import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateSpecificationService } from "./CreateSpecificationService";

class CreateSpecificationController {

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, description } = request.body;

            const createSpecificationService = container.resolve(CreateSpecificationService);

            await createSpecificationService.execute({ name, description });

            return response.status(201).json();
        } catch (err) {
            return response.status(501).json({
                message: err.message
            });
        }
    }
}

export { CreateSpecificationController };