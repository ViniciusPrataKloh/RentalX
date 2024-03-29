import dayjs from "dayjs";
import { AppError } from "../../../errors/app.error";
import { DayjsDateProvider } from "../../../shared/providers/dateProvider/implementations/DayjsDateProvider";
import { RentalsRepositoryInMemory } from "../repositories/in-memory/RentalsRepositoryInMemory";
import { CreateRentalService } from "./CreateRentalService";

let createRentalService: CreateRentalService;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dayjsDateProvider: DayjsDateProvider

describe("Create Rental", () => {
    const dayAdd48Hours = dayjs().add(2, "day").toDate();

    beforeEach(() => {
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
        dayjsDateProvider = new DayjsDateProvider();
        createRentalService = new CreateRentalService(dayjsDateProvider, rentalsRepositoryInMemory);
    });

    it("should be able to create a new rental", async () => {
        const rental = await createRentalService.execute({
            car_id: "28a1e5ee-164b-4508-8081-1071a5123c3c",
            user_id: "f57db2dd-8f3a-4523-a975-709542483640",
            expected_return_date: dayAdd48Hours
        });

        expect(rental).toHaveProperty("id");
        expect(rental).toHaveProperty("start_at");
    });

    it("should not be able to create a new rental if there is another to the same car", async () => {
        expect(async () => {
            const rental = await createRentalService.execute({
                car_id: "28a1e5ee-164b-4508-8081-1071a5123c3c",
                user_id: "f57db2dd-8f3a-4523-a975-709542483640",
                expected_return_date: dayAdd48Hours
            });

            const newRental = await createRentalService.execute({
                car_id: "28a1e5ee-164b-4508-8081-1071a5123c3c",
                user_id: "78cf14cf-2504-41fb-b462-bd9001b549fb",
                expected_return_date: dayAdd48Hours
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to create a new rental if there is another to the same user", async () => {
        expect(async () => {
            const rental = await createRentalService.execute({
                car_id: "28a1e5ee-164b-4508-8081-1071a5123c3c",
                user_id: "f57db2dd-8f3a-4523-a975-709542483640",
                expected_return_date: dayAdd48Hours
            });

            const newRental = await createRentalService.execute({
                car_id: "8a1e5ee-164b-4508-8081-1071a5123c3c",
                user_id: "f57db2dd-8f3a-4523-a975-709542483640",
                expected_return_date: dayAdd48Hours
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to create a new rental with less than 24 hours", async () => {
        expect(async () => {
            const rental = await createRentalService.execute({
                car_id: "28a1e5ee-164b-4508-8081-1071a5123c3c",
                user_id: "f57db2dd-8f3a-4523-a975-709542483640",
                expected_return_date: dayjs().toDate()
            });
        }).rejects.toBeInstanceOf(AppError);
    });

});