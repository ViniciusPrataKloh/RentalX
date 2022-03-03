import { Specification } from "../../../model/Specification";
import { ISpecificationsRepository } from "../../../repositories/interfaces/ISpecificationRepositories";

class ListSpecificationService {
    constructor(private specificationRepository: ISpecificationsRepository) { }

    execute(): Specification[] {
        const specifications = this.specificationRepository.list();
        return specifications;
    }
}

export { ListSpecificationService };