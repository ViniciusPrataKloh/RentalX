import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/app.error";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

@injectable()
class CreateUserService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.usersRepository.findUser(email);

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
