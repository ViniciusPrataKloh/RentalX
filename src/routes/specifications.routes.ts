import { Router } from "express";
import { CreateSpecificationController } from "../models/cars/useCases/Specification/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../models/cars/useCases/Specification/listSpecifications/ListSpecificationController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


const specificationsRoutes = Router();

// Instâncias
const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();


specificationsRoutes.post("/", createSpecificationController.handle);
specificationsRoutes.get("/", ensureAuthenticated, listSpecificationController.handle);

export { specificationsRoutes };