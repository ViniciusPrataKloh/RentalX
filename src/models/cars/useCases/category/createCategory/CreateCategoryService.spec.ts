import { AppError } from "../../../../../errors/app.error";
import { CategoriesRepositoryInMemory } from "../../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryService } from "./CreateCategoryService";

let createCategoryService: CreateCategoryService;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {

    beforeAll(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryService = new CreateCategoryService(categoriesRepositoryInMemory);
    });

    it('should be able to create a new category', async () => {
        const category = {
            name: "Category test",
            description: "Category description test"
        }

        await createCategoryService.execute({
            name: category.name,
            description: category.description
        });

        const createdCategory = categoriesRepositoryInMemory.findCategory(category.name);
        console.log(createdCategory);

        expect(createdCategory).toBeTruthy();
    });

    it('should not be able to create a new category when name already exists', async () => {
        expect(async () => {
            const category = {
                name: "Category test",
                description: "Category description test"
            }

            await createCategoryService.execute({
                name: category.name,
                description: category.description
            });

            await createCategoryService.execute({
                name: category.name,
                description: category.description
            });
        }).rejects.toBeInstanceOf(AppError);

    })
});