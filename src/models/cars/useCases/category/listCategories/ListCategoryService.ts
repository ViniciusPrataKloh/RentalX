import { Category } from "../../../model/Category";
import { ICategoryRepository } from "../../../repositories/interfaces/ICategoryRepository";


class ListCategoryService {
    constructor(private categoriesRepository: ICategoryRepository) { }

    execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoryService };