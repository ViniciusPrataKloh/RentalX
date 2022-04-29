import { Request, Response } from "express";
import { CreateSpecificationService } from "./CreateSpecificationService";

class CreateSpecificationController {
    constructor(private createSpecificationService: CreateSpecificationService) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, description } = request.body;

            await this.createSpecificationService.execute({ name, description });

            return response.status(201).json();
        } catch (err) {
            return response.status(501).json({
                message: err.message
            });
        }
    }
}

export { CreateSpecificationController };