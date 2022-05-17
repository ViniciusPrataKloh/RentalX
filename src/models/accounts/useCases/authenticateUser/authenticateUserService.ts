import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/app.error";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUserService {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {

        const user = await this.usersRepository.findUser(email);

        if (!user) {
            throw new AppError("Email or password incorrect.");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email or password incorrect.");
        }

        const token = sign({}, 'b5d201290cdf3771078f21be8d645e794af6c3c2', {
            subject: user.id,
            expiresIn: '1d'
        });

        const userToken: IResponse = {
            user: {
                name: user.name,
                email: user.email
            },
            token
        }

        return userToken;
    }
}

export { AuthenticateUserService };