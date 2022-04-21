import { Request, Response } from "express";
import { ListCategoryService } from "./ListCategoryService";

class ListCategoryController {
    constructor(private listCategoryService: ListCategoryService) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const categories = await this.listCategoryService.execute();

        return response.status(201).json(categories);
    }
}

export { ListCategoryController };