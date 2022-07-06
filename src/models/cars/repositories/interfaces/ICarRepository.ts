import { ICreateCarDTO } from "../../dto/ICreateCarDTO";
import { Car } from "../../entities/Car";

interface ICarRepository {
    create({ }: ICreateCarDTO): Promise<Car>;
    findCarByLicensePlate(license_plate: string): Promise<Car>;
    findAvailableCars(category_id: string, brand?: string, name?: string);
}

export { ICarRepository };
