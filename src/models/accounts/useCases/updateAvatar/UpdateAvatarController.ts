import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../errors/app.error";
import { UpdateAvatarService } from "./UpdateAvatarService";

interface IMyRequest extends Request {
    user_id: string
}

class UpdateAvatarController {

    async handle(req: IMyRequest, res: Response): Promise<Response> {
        try {
            const { user_id } = req.body;
            const avatar = req.file.filename;

            const usersRepository = container.resolve(UpdateAvatarService);

            await usersRepository.execute({ user_id, avatar });

            return res.status(204).send();
        } catch (error) {
            throw new AppError("",);
        }
    }

}

export { UpdateAvatarController };
