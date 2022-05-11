import { Router } from "express";
import { CreateUserController } from "../models/accounts/useCases/CreateUserController";

const usersRoutes = Router();

// Instâncias
const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };