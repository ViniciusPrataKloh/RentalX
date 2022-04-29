import { ISpecificationsRepository } from "../../../repositories/interfaces/ISpecificationRepositories";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    async execute({ name, description }: IRequest): Promise<void> {

        const specificationAlreadyExists = await this.specificationsRepository.findSpecification(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification Already exists!");
        }

        await this.specificationsRepository.create({
            name,
            description
        });
    }
}

export { CreateSpecificationService };