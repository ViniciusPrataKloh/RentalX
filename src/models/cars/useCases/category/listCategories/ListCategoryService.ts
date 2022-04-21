import { Category } from "../../../entities/Category";
import { ICategoryRepository } from "../../../repositories/interfaces/ICategoryRepository";


class ListCategoryService {
    constructor(private categoriesRepository: ICategoryRepository) { }

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoryService };