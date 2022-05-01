import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationService } from "./ListSpecificationService";

class ListSpecificationController {

    async handle(request: Request, response: Response): Promise<Response> {

        const listSpecificationService = container.resolve(ListSpecificationService);

        const specifications = await listSpecificationService.execute();

        return response.status(201).json(specifications);
    }
}

export { ListSpecificationController };