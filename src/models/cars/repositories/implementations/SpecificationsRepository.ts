import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../interfaces/ISpecificationRepositories";


class SpecificationsRepository implements ISpecificationsRepository {

    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name, description
        });

        await this.repository.save(specification);
    }

    async list(): Promise<Specification[]> {
        return await this.repository.find();
    }

    async findSpecification(name: string): Promise<any> {
        const specification = await this.repository.findOne({ name });
        return specification;
    }
}

export { SpecificationsRepository };