import { CreateCategoryService } from "./CreateCategoryService";
import { Request, Response } from "express";
import { container } from "tsyringe";

class CreateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, description } = request.body;

            const createCategoryService = container.resolve(CreateCategoryService);

            await createCategoryService.execute({ name, description });

            return response.status(201).json();
        } catch (err) {
            return response.status(501).json({
                message: err.message
            });
        }
    }
}

export { CreateCategoryController };