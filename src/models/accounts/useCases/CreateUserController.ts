import { Request, response, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "./CreateUserService";


class CreateUserController {
    async handle(request: Request, response: Response) {
        try {
            const { name, username, email, password, driver_license } = request.body;

            const createUserService = container.resolve(CreateUserService);

            await createUserService.execute({ name, username, email, password, driver_license });

            return response.status(201).json();
        } catch (err) {
            return response.status(501).json({
                message: err.message
            });
        }

    }
}

export { CreateUserController };