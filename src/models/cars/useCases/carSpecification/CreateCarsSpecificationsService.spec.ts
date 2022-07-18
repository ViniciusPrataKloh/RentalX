import { AppError } from "../../../../errors/app.error";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "../../repositories/in-memory/SpecificationsRepositoryInMemory";
import { CreateCarsSpecificationsService } from "./CreateCarsSpecificationsService";

let createCarsSpecificationsService: CreateCarsSpecificationsService;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("Create Cars Specifications", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
        createCarsSpecificationsService = new CreateCarsSpecificationsService(
            carsRepositoryInMemory,
            specificationsRepositoryInMemory
        );
    });

    it("should not be able to create a new specification to an non-existent car", async () => {
        expect(async () => {
            const car_id = "1234";
            const specifications_id = ["4321"];

            await createCarsSpecificationsService.execute({
                car_id,
                specifications_id
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should be create to create a new specification to an existent car", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Name car1",
            description: "Description car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category_id"
        });

        const specifications_id = ["5814e3b2-108b-4f09-b666-e18451d08f50"];
        const specification = await specificationsRepositoryInMemory.create({
            name: "Name test",
            description: "Description test"
        });

        const carsSpecifications = await createCarsSpecificationsService.execute({
            car_id: car.id,
            specifications_id: [specification.id]
        });

        expect(carsSpecifications).toHaveProperty("specifications");
        expect(car.specifications.length).toBe(1);
    })
});