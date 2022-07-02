import { Category } from "../../entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../interfaces/ICategoryRepository";


class CategoriesRepositoryInMemory implements ICategoryRepository {

    categories: Category[] = [];

    async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
        const category = new Category();

        Object.assign(category, {
            name,
            description
        });

        this.categories.push(category);

        return category;
    }
    async list(): Promise<Category[]> {
        return this.categories;
    }
    async findCategory(name: string): Promise<any> {
        return this.categories.find((category) => category.name === name);
    }

}

export { CategoriesRepositoryInMemory };
