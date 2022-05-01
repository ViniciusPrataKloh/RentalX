import { container } from "tsyringe";

import { ICategoryRepository } from "../../models/cars/repositories/interfaces/ICategoryRepository";
import { CategoriesRepository } from "../../models/cars/repositories/implementations/CategoriesRepository";

// Categories
container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository",
    CategoriesRepository
);