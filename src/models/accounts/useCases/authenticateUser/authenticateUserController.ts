import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserService } from "./authenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password } = request.body;

            const authenticateUserService = container.resolve(AuthenticateUserService);

            const jwt = authenticateUserService.execute({ email, password });

            return response.status(200).json(jwt);
        } catch (err) {
            return response.status(501).json({
                message: err.message
            });
        }
    }
}

export { AuthenticateUserController };