import { Router } from "express";
import { CreateCategoryController } from "../models/cars/useCases/category/createCategory/CreateCategoryController";
import { ListCategoryController } from "../models/cars/useCases/category/listCategories/ListCategoryController";
import { ImportCategoryController } from "../models/cars/useCases/category/importCategory/ImportCategoryController";

import multer from "multer";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

// Instãncias
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const importCategoryController = new ImportCategoryController();


categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoryController.handle);

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);


export { categoriesRoutes };