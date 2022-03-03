import { ListSpecificationController } from "./ListSpecificationController";
import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationService } from "./ListSpecificationService";

const specificationRepository = SpecificationsRepository.getInstance();
const listSpecificationService = new ListSpecificationService(specificationRepository);
const listSpecificationController = new ListSpecificationController(listSpecificationService);

export {
    listSpecificationController
};
