import { CreateSpecificationController } from "./CreateSpecificationController";
import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "./CreateSpecificationService";

const specificationRepository = SpecificationsRepository.getInstance();
const createSpecificationService = new CreateSpecificationService(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationService);

export {
    createSpecificationController
};
