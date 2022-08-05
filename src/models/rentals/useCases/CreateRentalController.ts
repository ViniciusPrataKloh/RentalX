import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRentalService } from "./CreateRentalService";

interface IMyRequest extends Request {
    user_id: string
}

class CreateRentalController {
    async handle(request: IMyRequest, response: Response): Promise<Response> {
        try {
            const {
                car_id,
                expected_return_date
            } = request.body;

            const { user_id } = request;

            const createRentalService = container.resolve(CreateRentalService);

            const rental = await createRentalService.execute({
                car_id,
                user_id,
                expected_return_date
            });

            return response.status(201).json(rental);

        } catch (err) {
            return response.status(501).json({
                message: err.message
            });
        }
    }
}

export { CreateRentalController };
