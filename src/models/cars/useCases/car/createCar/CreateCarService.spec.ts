import { AppError } from "../../../../../errors/app.error";
import { CarsRepositoryInMemory } from "../../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarService } from "./CreateCarService";

let createCarService: CreateCarService;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarService = new CreateCarService(carsRepositoryInMemory);
    });

    it("should be able to create a new car", async () => {
        const car = await createCarService.execute({
            name: "Name car",
            description: "Description car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category_id"
        });

        expect(car).toHaveProperty("id");
    });

    it("not shoulbe be able to create a new car when license-plate already exists", async () => {
        expect(async () => {
            await createCarService.execute({
                name: "Name car1",
                description: "Description car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category_id"
            });
            await createCarService.execute({
                name: "Name car2",
                description: "Description car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category_id"
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("shoulbe be able to create a new car available by default", async () => {
        const car = await createCarService.execute({
            name: "Name car",
            description: "Description car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category_id"
        });

        expect(car.available).toBe(true);
    });
});