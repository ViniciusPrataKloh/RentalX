import { Router } from "express";
import { CreateUserController } from "../models/accounts/useCases/createUser/CreateUserController";
import { UpdateAvatarController } from "../models/accounts/useCases/updateAvatar/UpdateAvatarController";
import multer from "multer";
import uploadConfig from "../middlewares/Upload";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

// Instâncias
const createUserController = new CreateUserController();
const updateAvatarController = new UpdateAvatarController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.patch("/avatar", uploadAvatar.single("avatar"), ensureAuthenticated, updateAvatarController.handle);

export { usersRoutes };