import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/app.error";
import { Car } from "../../entities/Car";
import { ICarRepository } from "../../repositories/interfaces/ICarRepository";
import { ISpecificationsRepository } from "../../repositories/interfaces/ISpecificationRepository";

interface IRequest {
    car_id: string;
    specifications_id: string[];
}

@injectable()
class CreateCarsSpecificationsService {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarRepository,
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository
    ) { }

    async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
        const carExists = await this.carsRepository.findCarById(car_id);

        if (!carExists) {
            throw new AppError("Car does not exists");
        }

        const specifications = await this.specificationsRepository.findSpecificationByIds(specifications_id);

        carExists.specifications = specifications;

        await this.carsRepository.create(carExists);

        return carExists;
    }
}

export { CreateCarsSpecificationsService };
