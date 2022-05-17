import { Router } from "express";
import { AuthenticateUserController } from "../models/accounts/useCases/authenticateUser/authenticateUserController";

const authenticateRoutes = Router();

// Instâncias
const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes };