import { Router } from "express";
import { AuthenticateUserController } from "../models/accounts/useCases/authenticateUser/authenticateUserController";
import { CreateUserController } from "../models/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

// Instâncias
const createUserController = new CreateUserController();
const cauthenticateUserController = new AuthenticateUserController();

usersRoutes.post("/authenticate", cauthenticateUserController.handle);
usersRoutes.post("/", createUserController.handle);

export { usersRoutes };