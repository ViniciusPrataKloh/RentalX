import { Request, Response } from "express";
import { ImportCategoryService } from "./ImportCategoryService";
import { container } from "tsyringe";

class ImportCategoryController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        const importCategoryService = container.resolve(ImportCategoryService);

        await importCategoryService.execute(file);

        return response.status(201).send();
    }
}

export { ImportCategoryController };