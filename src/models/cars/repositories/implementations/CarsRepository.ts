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
        const car = await this.repository.findOne({ license_plate });

        return car;
    }

    async findAvailableCars(category_id: string, brand?: string, name?: string): Promise<Car[]> {
        const query = this.repository
            .createQueryBuilder("c")
            .where("available = :available", { available: true });

        if (brand) {
            query.andWhere("brand = :brand", { brand });
        }
        if (name) {
            query.andWhere("name = :name", { name });
        }

        const cars = await query.getMany();

        return cars;
    }
}

export { CarsRepository };
