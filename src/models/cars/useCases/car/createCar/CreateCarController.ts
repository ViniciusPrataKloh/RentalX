import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarService } from "./CreateCarService";


class CreateCarController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {
                name,
                description,
                daily_rate,
                license_plate,
                fine_amount,
                brand,
                category_id
            } = request.body;

            const createCarService = container.resolve(CreateCarService);

            const car = await createCarService.execute({
                name,
                description,
                daily_rate,
                license_plate,
                fine_amount,
                brand,
                category_id
            });

            return response.status(201).json(car);

        } catch (err) {
            return response.status(501).json({
                message: err.message
            });
        }
    }
}

export { CreateCarController };
