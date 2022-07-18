import { container } from "tsyringe";

import { CategoriesRepository } from "../../models/cars/repositories/implementations/CategoriesRepository";
import { ICategoryRepository } from "../../models/cars/repositories/interfaces/ICategoryRepository";

import { SpecificationsRepository } from "../../models/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../models/cars/repositories/interfaces/ISpecificationRepository";

import { UsersRepository } from "../../models/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../models/accounts/repositories/interfaces/IUsersRepository";

import { CarsRepository } from "../../models/cars/repositories/implementations/CarsRepository";
import { ICarRepository } from "../../models/cars/repositories/interfaces/ICarRepository";

import { CarImagesRepository } from "../../models/cars/repositories/implementations/CarImagesRepository";
import { ICarImagesRepository } from "../../models/cars/repositories/interfaces/ICarImages";

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

// Cars
container.registerSingleton<ICarRepository>(
    "CarsRepository",
    CarsRepository
);

// Car Images
container.registerSingleton<ICarImagesRepository>(
    "CarImagesRepository",
    CarImagesRepository
);