import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../interfaces/ISpecificationRepository";


class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
    private specifications: Specification[] = [];

    async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = new Specification();

        Object.assign(specification, {
            name, description
        });

        this.specifications.push(specification);

        return specification;
    }

    async list(): Promise<Specification[]> {
        return this.specifications;
    }

    async findSpecification(name: string): Promise<Specification> {
        return this.specifications.find(
            (specification) => specification.name === name
        );
    }

    async findSpecificationByIds(ids: string[]): Promise<Specification[]> {
        return this.specifications.filter(
            (specification) => ids.includes(specification.id)
        );
    }

}

export { SpecificationsRepositoryInMemory };
