// import { AppError } from "@errors/app.error";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/app.error";
import { ICategoryRepository } from "../../../../cars/repositories/interfaces/ICategoryRepository";
import { Category } from "../../../entities/Category";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryService {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoryRepository
    ) { }

    async execute({ name, description }: IRequest): Promise<Category> {
        const categoryAlreadyExists = await this.categoriesRepository.findCategory(name);

        if (categoryAlreadyExists) {
            throw new AppError("Category already exists!");
        }

        const category = await this.categoriesRepository.create({ name, description });

        return category;
    }
}

export { CreateCategoryService };
