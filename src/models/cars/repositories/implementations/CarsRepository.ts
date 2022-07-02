import { getRepository, Repository } from "typeorm";
import { ICreateCarDTO } from "../../dto/ICreateCarDTO";
import { Car } from "../../entities/Car";
import { ICarRepository } from "../interfaces/ICarRepository";


class CarsRepository implements ICarRepository {

    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car);
    }

    async create({ name, description, daily_rate, license_plate, fine_amount, brand, category_id }: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id
        });

        await this.repository.save(car);

        return car;
    }

    async findCarByLicensePlate(license_plate: string): Promise<Car> {
        const car = this.repository.findOne({ license_plate });

        return car;
    }

    async findAvailableCars(): Promise<Car[] | null> {
        const cars = this.repository.find({ available: true });

        return cars;
    }

}

export { CarsRepository };
