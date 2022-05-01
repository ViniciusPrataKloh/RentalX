import { Router } from "express";
import { CreateSpecificationController } from "../models/cars/useCases/Specification/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../models/cars/useCases/Specification/listSpecifications/ListSpecificationController";


const specificationsRoutes = Router();

// Instâncias
const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", listSpecificationController.handle);

export { specificationsRoutes };