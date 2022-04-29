import { Specification } from "../../entities/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationDTO): Promise<void>;
    list(): Promise<Specification[]>;
    findSpecification(name: string): Promise<any>;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };