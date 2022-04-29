import { CreateSpecificationController } from "./CreateSpecificationController";
import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationService } from "./CreateSpecificationService";

export default (): CreateSpecificationController => {
    const specificationRepository = new SpecificationsRepository();
    const createSpecificationService = new CreateSpecificationService(specificationRepository);
    const createSpecificationController = new CreateSpecificationController(createSpecificationService);

    return createSpecificationController;
}
