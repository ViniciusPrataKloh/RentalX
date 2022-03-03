import { CreateCategoryService } from "./CreateCategoryService";
import { Request, Response } from "express";

class CreateCategoryController {
    constructor(private createCategoryService: CreateCategoryService) { }

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createCategoryService.execute({ name, description });

        return response.status(201).json();
    }
}

export { CreateCategoryController };