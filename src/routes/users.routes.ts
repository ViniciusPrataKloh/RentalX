import { Router } from "express";
import { CreateUserController } from "../models/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

// Instâncias
const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };