import { Category } from "../../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    create({ name, description }: ICreateCategoryDTO): void;
    list(): Category[];
    findCategory(name: string): any;
}

export { ICategoryRepository, ICreateCategoryDTO };