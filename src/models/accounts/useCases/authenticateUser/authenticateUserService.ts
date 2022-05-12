import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

@injectable()
class AuthenticateUserService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<string> {

        const user = await this.usersRepository.findUser(email);

        if (!user) {
            throw new Error("Email or password incorrect.");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email or password incorrect.");
        }

        return "jwt:dausdbashjad";
    }
}

export { AuthenticateUserService };