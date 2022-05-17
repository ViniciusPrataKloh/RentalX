import { ICategoryRepository } from "../../../repositories/interfaces/ICategoryRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/app.error";

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

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findCategory(name);

        if (categoryAlreadyExists) {
            throw new AppError("Category already exists!");
        }

        await this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };