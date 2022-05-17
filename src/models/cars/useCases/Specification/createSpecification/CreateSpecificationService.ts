import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/app.error";
import { ISpecificationsRepository } from "../../../repositories/interfaces/ISpecificationRepositories";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationService {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository
    ) { }

    async execute({ name, description }: IRequest): Promise<void> {

        const specificationAlreadyExists = await this.specificationsRepository.findSpecification(name);

        if (specificationAlreadyExists) {
            throw new AppError("Specification Already exists!");
        }

        await this.specificationsRepository.create({
            name,
            description
        });
    }
}

export { CreateSpecificationService };