import { container } from "tsyringe";

import { ICategoryRepository } from "../../models/cars/repositories/interfaces/ICategoryRepository";
import { CategoriesRepository } from "../../models/cars/repositories/implementations/CategoriesRepository";
import { ISpecificationsRepository } from "../../models/cars/repositories/interfaces/ISpecificationRepositories";
import { SpecificationsRepository } from "../../models/cars/repositories/implementations/SpecificationsRepository";

// Categories
container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

// Specifications
container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);