import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { CreateRentalController } from "../models/rentals/useCases/CreateRentalController";


const rentalsRoutes = Router();

// Instâncias
const createRentalController = new CreateRentalController();

rentalsRoutes.post("/", ensureAuthenticated, createRentalController.handle);

export { rentalsRoutes };
