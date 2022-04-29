import { Request, Response } from "express";
import { ListSpecificationService } from "./ListSpecificationService";

class ListSpecificationController {
    constructor(private listSpecificationService: ListSpecificationService) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const specifications = await this.listSpecificationService.execute();
        return response.status(201).json(specifications);
    }
}

export { ListSpecificationController };