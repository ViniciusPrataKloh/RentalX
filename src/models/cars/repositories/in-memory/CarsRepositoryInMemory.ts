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

        this.cars.push(car);

        return car;
    }

    async findCarByLicensePlate(license_plate: string): Promise<Car> {
        const car = this.cars.find(car => car.license_plate === license_plate);
        return car;
    }

    findAvailableCars(category_id: string, brand: string, name: string) {
        const availableCars = this.cars.filter(
            (car) => car.available ||
                (category_id) && (car.category_id === category_id && car.available) ||
                (brand) && (car.brand === brand && car.available) ||
                (name) && (car.name === name && car.available)
        );
        return availableCars;
    }

}

export { CarsRepositoryInMemory };
