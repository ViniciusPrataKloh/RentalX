import { AppError } from "../../../../errors/app.error";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserService } from "../createUser/CreateUserService";
import { AuthenticateUserService } from "./AuthenticateUserService";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserService: AuthenticateUserService;
let createUserService: CreateUserService;


describe("Authenticate User", () => {

    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserService = new AuthenticateUserService(usersRepositoryInMemory);
        createUserService = new CreateUserService(usersRepositoryInMemory);
    });

    it("shoulbe be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            name: "Name teste",
            email: "teste@email.com",
            password: "Password test",
            driver_license: "Driver license test"
        };

        await createUserService.execute(user);

        const result = await authenticateUserService.execute({
            email: user.email,
            password: user.password
        });

        expect(result).toHaveProperty("token");
    });

    it("should not be able to authentica a nonexistent user", () => {
        expect(async () => {
            await authenticateUserService.execute({
                email: "teste@email.com",
                password: "Password test"
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should not be able to authentica an user with an invalid password", () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                name: "Name teste",
                email: "teste@email.com",
                password: "Password test",
                driver_license: "Driver license test"
            };

            await createUserService.execute(user);

            await authenticateUserService.execute({
                email: "teste@email.com",
                password: "Password test false"
            });

        }).rejects.toBeInstanceOf(AppError);
    });

});