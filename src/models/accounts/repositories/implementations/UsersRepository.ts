import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../interfaces/IUsersRepository";


class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, email, password, driver_license, id, avatar }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            password,
            driver_license,
            id,
            avatar
        });

        await this.repository.save(user);
    }

    async findUser(email: string): Promise<User | null> {
        const user = await this.repository.findOne({ email });
        if (user == undefined) {
            return null;
        }
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }
}

export { UsersRepository };
