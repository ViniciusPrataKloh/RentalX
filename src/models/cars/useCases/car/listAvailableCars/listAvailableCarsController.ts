import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAvailableCarService } from "./listAvailableCarsService";


class ListAvailableCarsController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { brand, name } = request.body;

            const listAvailableCarsService = container.resolve(ListAvailableCarService);

            const availableCars = await listAvailableCarsService.execute({ brand, name });

            return response.status(200).json({ availableCars });
        } catch (err) {
            return response.status(501).json({
                message: err.message
            });
        }
    }
}

export { ListAvailableCarsController };
