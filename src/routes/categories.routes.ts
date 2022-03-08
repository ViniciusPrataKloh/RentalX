import { Router } from "express";
import { createCategoryController } from "../models/cars/useCases/category/createCategory/Index.Category";
import { listCategoryController } from "../models/cars/useCases/category/listCategories/Index.Category";
import { importCategoryController } from "../models/cars/useCases/category/importCategory/Index.Category";

import multer from "multer";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
});


export { categoriesRoutes };