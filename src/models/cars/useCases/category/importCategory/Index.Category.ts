import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRespository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryService } from "./ImportCategoryService";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryService = new ImportCategoryService(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryService);

export { importCategoryController };