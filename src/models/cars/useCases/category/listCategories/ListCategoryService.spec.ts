import { CategoriesRepositoryInMemory } from "../../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryService } from "../createCategory/CreateCategoryService";
import { ListCategoryService } from "./ListCategoryService";


let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let listCategoryService: ListCategoryService;
let createCategoryService: CreateCategoryService;

describe("List Cagetory", () => {
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        listCategoryService = new ListCategoryService(categoriesRepositoryInMemory);
        createCategoryService = new CreateCategoryService(categoriesRepositoryInMemory);
    })

    it("should be able to list all categories", async () => {
        const category = await createCategoryService.execute({
            "name": "suv",
            "description": "Categoria de suv"
        });

        const categories = await listCategoryService.execute();
        expect(categories).toEqual([category]);

    });

});