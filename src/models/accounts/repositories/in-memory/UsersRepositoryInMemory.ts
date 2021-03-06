import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../interfaces/IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {

    users: User[] = [];

    async create({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            password,
            driver_license
        });

        this.users.push(user);
    }

    async findUser(email: string): Promise<User> {
        return this.users.find((user) => user.email === email);
    }

    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }
}

export { UsersRepositoryInMemory };
