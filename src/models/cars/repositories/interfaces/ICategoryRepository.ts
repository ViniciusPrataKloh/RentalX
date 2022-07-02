import { Category } from "../../entities/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    create({ name, description }: ICreateCategoryDTO): Promise<Category>;
    list(): Promise<Category[]>;
    findCategory(name: string): Promise<any>;
}

export { ICategoryRepository, ICreateCategoryDTO };
