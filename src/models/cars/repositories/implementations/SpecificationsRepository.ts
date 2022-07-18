import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../interfaces/ISpecificationRepository";


class SpecificationsRepository implements ISpecificationsRepository {

    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({
            name, description
        });

        await this.repository.save(specification);

        return specification;
    }

    async list(): Promise<Specification[]> {
        return await this.repository.find();
    }

    async findSpecification(name: string): Promise<any> {
        const specification = await this.repository.findOne({ name });
        return specification;
    }

    async findSpecificationByIds(ids: string[]): Promise<Specification[]> {
        const specifications = await this.repository.findByIds(ids);
        return specifications;
    }
}

export { SpecificationsRepository };
