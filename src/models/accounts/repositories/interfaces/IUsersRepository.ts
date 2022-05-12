import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { User } from "../../entities/User";

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findUser(email: string): Promise<User | null>;
}

export { IUsersRepository };