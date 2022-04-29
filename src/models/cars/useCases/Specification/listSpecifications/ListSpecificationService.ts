import { Specification } from "../../../entities/Specification";
import { ISpecificationsRepository } from "../../../repositories/interfaces/ISpecificationRepositories";

class ListSpecificationService {
    constructor(private specificationRepository: ISpecificationsRepository) { }

    async execute(): Promise<Specification[]> {
        const specifications = await this.specificationRepository.list();
        return specifications;
    }
}

export { ListSpecificationService };