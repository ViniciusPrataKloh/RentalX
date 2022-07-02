import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../interfaces/ICategoryRepository";


class CategoriesRepository implements ICategoryRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
        const category = this.repository.create({
            name,
            description
        });

        await this.repository.save(category);

        return category;
    }

    async list(): Promise<Category[]> {
        return await this.repository.find();
    }

    async findCategory(name: string): Promise<any> {
        const category = await this.repository.findOne({ name });
        return category;
    }

}

export { CategoriesRepository };
