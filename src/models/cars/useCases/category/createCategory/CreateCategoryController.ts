import { CreateCategoryService } from "./CreateCategoryService";
import { Request, Response } from "express";

class CreateCategoryController {
    constructor(private createCategoryService: CreateCategoryService) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, description } = request.body;

            await this.createCategoryService.execute({ name, description });

            return response.status(201).json();
        } catch (err) {
            return response.status(501).json({
                message: err.message
            });
        }
    }
}

export { CreateCategoryController };