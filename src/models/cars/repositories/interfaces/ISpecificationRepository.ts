import { Specification } from "../../entities/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): Promise<Specification>;
    list(): Promise<Specification[]>;
    findSpecification(name: string): Promise<Specification>;
    findSpecificationByIds(ids: string[]): Promise<Specification[]>;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
