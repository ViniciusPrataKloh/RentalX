import { getRepository, Repository } from "typeorm";
import { ICreateRentalDTO } from "../../dto/ICreateRentalDTO";
import { Rental } from "../../entities/Rental";
import { IRentalsRepository } from "../interfaces/IRentalRepository";

class RentalsRepository implements IRentalsRepository {

    private repository: Repository<Rental>;

    constructor() {
        this.repository = getRepository(Rental);
    }

    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        return await this.repository.findOne({ car_id });
    }
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        return await this.repository.findOne({ user_id });
    }
    async create({ car_id, user_id, expected_return_date }: ICreateRentalDTO): Promise<Rental> {
        const rental = this.repository.create({
            car_id,
            user_id,
            expected_return_date
        });

        await this.repository.save(rental);

        return rental;
    }

}

export { RentalsRepository };
