import { Router } from "express";
import { createSpecificationController } from "../models/cars/useCases/Specification/createSpecification/Index.Specification";
import { listSpecificationController } from "../models/cars/useCases/Specification/listSpecifications/Index.Specification";


const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
    return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };