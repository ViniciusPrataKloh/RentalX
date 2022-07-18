import { Router } from "express";
import { EnsureAdmin } from "../middlewares/EnsureAdmin";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { CreateCarController } from "../models/cars/useCases/car/createCar/CreateCarController";
import { ListAvailableCarsController } from "../models/cars/useCases/car/listAvailableCars/listAvailableCarsController";
import { CreateCarsSpecificationsController } from "../models/cars/useCases/carSpecification/CreateCarsSpecificationsController";

const carsRoutes = Router();

// Instâncias
const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarsSpecificationsController = new CreateCarsSpecificationsController();

carsRoutes.post("/", ensureAuthenticated, EnsureAdmin, createCarController.handle);
carsRoutes.get("/available", listAvailableCarsController.handle);
carsRoutes.post("/specifications/:id", ensureAuthenticated, EnsureAdmin, createCarsSpecificationsController.handle);

export { carsRoutes };
