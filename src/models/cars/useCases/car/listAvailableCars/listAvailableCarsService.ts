import { ICarRepository } from "../../../repositories/interfaces/ICarRepository";

interface IRequest {
    category_id?: string;
    brand?: string;
    name?: string;
}

class ListAvailableCarService {

    constructor(
        private carsRepository: ICarRepository
    ) { }

    async execute({ category_id, brand, name }: IRequest) {
        const cars = await this.carsRepository.findAvailableCars(
            category_id,
            brand,
            name
        );

        return cars;
    }

}

export { ListAvailableCarService };
