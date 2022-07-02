import { Car } from "../../../entities/Car";
import { CarsRepositoryInMemory } from "../../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarService } from "../createCar/CreateCarService";
import { ListAvailableCarService } from "./listAvailableCarsService";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarService: ListAvailableCarService;
let createCarService: CreateCarService;

describe("List Available Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarService = new ListAvailableCarService(carsRepositoryInMemory);
        createCarService = new CreateCarService(carsRepositoryInMemory);
    });

    it("should be able to list all available cars", async () => {

        const car1 = await createCarService.execute({
            name: "Name car1",
            description: "Description car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category_id"
        });
        const car2 = await createCarService.execute({
            name: "Name car2",
            description: "Description car",
            daily_rate: 100,
            license_plate: "ABC-1334",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category_id"
        });

        const cars: Car[] = await listAvailableCarService.execute({});
        expect(cars).toEqual([car1, car2]);
    });

    it("should be able to list all available cars by brand", async () => {

        const car = await createCarService.execute({
            name: "Name car1",
            description: "Description car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category_id"
        });

        const cars: Car[] = await listAvailableCarService.execute({
            brand: "Brand2"
        });
        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by name", async () => {

        const car = await createCarService.execute({
            name: "Name car1",
            description: "Description car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category_id"
        });

        const cars: Car[] = await listAvailableCarService.execute({
            name: "Name car1"
        });
        expect(cars).toEqual([car]);
    });
});