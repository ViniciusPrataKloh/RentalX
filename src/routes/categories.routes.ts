import { Router } from "express";
import { createCategoryController } from "../models/cars/useCases/category/createCategory/Index.Category";
import { listCategoryController } from "../models/cars/useCases/category/listCategories/Index.Category";
import multer from "multer";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    const { file } = request;
    console.log(file);
    return response.send();
});

export { categoriesRoutes };

function multer(arg0: { dest: string; }) {
    throw new Error("Function not implemented.");
}
