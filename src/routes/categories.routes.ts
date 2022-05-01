import { Router } from "express";
import { CreateCategoryController } from "../models/cars/useCases/category/createCategory/CreateCategoryController";
import listCategoryController from "../models/cars/useCases/category/listCategories/Index.Category";
import importCategoryController from "../models/cars/useCases/category/importCategory/Index.Category";

import multer from "multer";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController().handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController().handle(request, response);
});


export { categoriesRoutes };