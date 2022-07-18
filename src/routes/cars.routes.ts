import { Router } from "express";
import multer from "multer";
import { EnsureAdmin } from "../middlewares/EnsureAdmin";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import uploadConfig from "../middlewares/Upload";
import { CreateCarController } from "../models/cars/useCases/car/createCar/CreateCarController";
import { ListAvailableCarsController } from "../models/cars/useCases/car/listAvailableCars/listAvailableCarsController";
import { UploadCarImagesController } from "../models/cars/useCases/carImages/UploadCarImagesController";
import { CreateCarsSpecificationsController } from "../models/cars/useCases/carSpecification/CreateCarsSpecificationsController";

const carsRoutes = Router();

const uploadImages = multer(uploadConfig.upload("./tmp/cars"));

// Instâncias
const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarsSpecificationsController = new CreateCarsSpecificationsController();
const uploadCarImagesController = new UploadCarImagesController();

carsRoutes.post("/", ensureAuthenticated, EnsureAdmin, createCarController.handle);
carsRoutes.get("/available", listAvailableCarsController.handle);
carsRoutes.post("/specifications/:id", ensureAuthenticated, EnsureAdmin, createCarsSpecificationsController.handle);
carsRoutes.post("/images/:id",
    ensureAuthenticated,
    EnsureAdmin,
    uploadImages.array("images"),
    uploadCarImagesController.handle);

export { carsRoutes };
