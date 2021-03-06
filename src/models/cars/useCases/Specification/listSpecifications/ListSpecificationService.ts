import { inject, injectable } from "tsyringe";
import { Specification } from "../../../entities/Specification";
import { ISpecificationsRepository } from "../../../repositories/interfaces/ISpecificationRepository";

@injectable()
class ListSpecificationService {
    constructor(
        @inject("SpecificationsRepository")
        private specificationRepository: ISpecificationsRepository
    ) { }

    async execute(): Promise<Specification[]> {
        const specifications = await this.specificationRepository.list();
        return specifications;
    }
}

export { ListSpecificationService };
