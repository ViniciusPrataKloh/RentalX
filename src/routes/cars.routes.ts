import { Router } from "express";
import { EnsureAdmin } from "../middlewares/EnsureAdmin";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { CreateCarController } from "../models/cars/useCases/car/createCar/CreateCarController";

const carsRoutes = Router();

// Instâncias
const createCarController = new CreateCarController();

carsRoutes.post("/", ensureAuthenticated, EnsureAdmin, createCarController.handle);

export { carsRoutes };
