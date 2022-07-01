import { Router } from "express";
import { CreateCarController } from "../models/cars/useCases/car/createCar/CreateCarController";

const carsRoutes = Router();

// Instâncias
const createCarController = new CreateCarController();

carsRoutes.post("/", createCarController.handle);

export { carsRoutes };
