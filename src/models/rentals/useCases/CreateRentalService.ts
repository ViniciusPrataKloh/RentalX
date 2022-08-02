import { AppError } from "../../../errors/app.error";
import { IDayjsDateProvider } from "../../../shared/providers/dateProvider/interfaces/IDayjsDateProvider";
import { Rental } from "../entities/Rental";
import { IRentalsRepository } from "../repositories/interfaces/IRentalRepository";

interface IRequest {
    car_id: string;
    user_id: string;
    expected_return_date: Date;
}

class CreateRentalService {
    constructor(
        private dayjsDateProvider: IDayjsDateProvider,
        private rentalsRepository: IRentalsRepository
    ) { }

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

        const comparedDate = this.dayjsDateProvider.compareInHours(expected_return_date);

        if (comparedDate < minimumHour) {
            throw new AppError("The expected return date has less than 24h");
        }

        return rental;
    }
}

export { CreateRentalService };
