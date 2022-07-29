import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { AppError } from "../../../errors/app.error";
import { Rental } from "../entities/Rental";
import { IRentalsRepository } from "../repositories/interfaces/IRentalRepository";

dayjs.extend(utc);

interface IRequest {
    car_id: string;
    user_id: string;
    expected_return_date: Date;
}

class CreateRentalService {
    constructor(private rentalsRepository: IRentalsRepository) { }

    async execute({ car_id, user_id, expected_return_date }: IRequest): Promise<Rental> {

        const minimumHour = 24;

        const carHasRentalOpen = await this.rentalsRepository.findOpenRentalByCar(car_id);

        if (carHasRentalOpen) {
            throw new AppError("Car is unavailable");
        }

        const userHasRentalOpen = await this.rentalsRepository.findOpenRentalByUser(user_id);

        if (userHasRentalOpen) {
            throw new AppError("There is a rental in progress for this user");
        }

        const rental = await this.rentalsRepository.create({
            car_id,
            user_id,
            expected_return_date
        });

        const dateNow = dayjs().utc().local().format();

        const expectedReturnDateFormat = dayjs(expected_return_date).utc().local().format();

        const comparedDate = dayjs(expectedReturnDateFormat).diff(dateNow, "hours");

        if (comparedDate < minimumHour) {
            throw new AppError("The expected return date has less than 24h");
        }

        return rental;
    }
}

export { CreateRentalService };
