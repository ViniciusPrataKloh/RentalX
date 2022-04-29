import { ListSpecificationController } from "./ListSpecificationController";
import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationService } from "./ListSpecificationService";

export default (): ListSpecificationController => {
    const specificationRepository = new SpecificationsRepository();
    const listSpecificationService = new ListSpecificationService(specificationRepository);
    const listSpecificationController = new ListSpecificationController(listSpecificationService);

    return listSpecificationController;
}

