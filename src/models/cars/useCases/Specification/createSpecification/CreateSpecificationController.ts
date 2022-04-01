import { Request, Response } from "express";
import { CreateSpecificationService } from "./CreateSpecificationService";

class CreateSpecificationController {
    constructor(private createSpecificationService: CreateSpecificationService) { }

    handle(request: Request, response: Response): Response {
        try {
            const { name, description } = request.body;

            this.createSpecificationService.execute({ name, description });

            return response.status(201).json();
        } catch (err) {
            return response.status(501).json({
                message: err.message
            });
        }
    }
}

export { CreateSpecificationController };