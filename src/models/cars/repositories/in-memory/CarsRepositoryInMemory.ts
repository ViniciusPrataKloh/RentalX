import { ICreateCarDTO } from "../../dto/ICreateCarDTO";
import { Car } from "../../entities/Car";
import { ICarRepository } from "../interfaces/ICarRepository";


class CarsRepositoryInMemory implements ICarRepository {

    cars: Car[] = [];

    async create({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id
    }: ICreateCarDTO): Promise<Car> {
        const car = new Car();

        Object.assign(car, {
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id
        });

        console.log(car);

        this.cars.push(car);

        return car;
    }

    async findCarByLicensePlate(license_plate: string): Promise<Car | null> {
        const car = this.cars.find(car => car.license_plate === license_plate);
        return car;
    }

}

export { CarsRepositoryInMemory };
