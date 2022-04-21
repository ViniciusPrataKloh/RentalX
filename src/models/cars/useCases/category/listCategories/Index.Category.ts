import { ListCategoryController } from "./ListCategoryController";
import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { ListCategoryService } from "./ListCategoryService";

export default (): ListCategoryController => {
    const categoriesRepository = new CategoriesRepository();
    const listCategoryService = new ListCategoryService(categoriesRepository);
    const listCategoryController = new ListCategoryController(listCategoryService);

    return listCategoryController;
}