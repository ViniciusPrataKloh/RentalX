import { ICategoryRepository } from "../../../repositories/interfaces/ICategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoryRepository) { };

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findCategory(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }

        await this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };