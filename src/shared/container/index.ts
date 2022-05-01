import { container } from "tsyringe";

import { ICategoryRepository } from "../../models/cars/repositories/interfaces/ICategoryRepository";
import { CategoriesRepository } from "../../models/cars/repositories/implementations/CategoriesRepository";
import { ISpecificationsRepository } from "../../models/cars/repositories/interfaces/ISpecificationRepositories";
import { SpecificationsRepository } from "../../models/cars/repositories/implementations/SpecificationsRepository";
import { IUsersRepository } from "../../models/accounts/repositories/interfaces/IUsersRepository";
import { UsersRepository } from "../../models/accounts/repositories/implementations/UsersRepository";

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

// Users
container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);