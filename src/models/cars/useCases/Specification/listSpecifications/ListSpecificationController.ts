import { Request, Response } from "express";
import { ListSpecificationService } from "./ListSpecificationService";

class ListSpecificationController {
    constructor(private listSpecificationService: ListSpecificationService) { }

    handle(request: Request, response: Response): Response {
        const specifications = this.listSpecificationService.execute();
        return response.status(201).json(specifications);
    }
}

export { ListSpecificationController };