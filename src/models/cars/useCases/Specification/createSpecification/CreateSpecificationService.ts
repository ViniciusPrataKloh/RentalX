import { ISpecificationsRepository } from "../../../repositories/interfaces/ISpecificationRepositories";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute({ name, description }: IRequest): void {

        const specificationAlreadyExists = this.specificationsRepository.findSpecification(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification Already exists!");
        }

        this.specificationsRepository.create({
            name,
            description
        });
    }
}

export { CreateSpecificationService };