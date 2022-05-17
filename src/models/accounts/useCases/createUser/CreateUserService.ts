import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";
import { hash } from "bcrypt";
import { AppError } from "../../../../errors/app.error";

@injectable()
class CreateUserService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.usersRepository.findUser(email);

        console.log(userAlreadyExists);
        if (userAlreadyExists) {
            throw new AppError("User already exists!");
        }

        const encryptedPassword = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            password: encryptedPassword,
            driver_license
        });
    }

}

export { CreateUserService };