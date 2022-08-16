import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserService } from "./AuthenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password } = request.body;

            const authenticateUserService = container.resolve(AuthenticateUserService);

            const userToken = await authenticateUserService.execute({ email, password });

            return response.status(200).json(userToken);
        } catch (err) {
            return response.status(501).json({
                message: err.message
            });
        }
    }
}

export { AuthenticateUserController };
