import { ICreateCarDTO } from "../../dto/ICreateCarDTO";
import { Car } from "../../entities/Car";

interface ICarRepository {
    create({ }: ICreateCarDTO): Promise<Car>;
    findCarByLicensePlate(license_plate: string): Promise<Car | null>;
}

export { ICarRepository };
