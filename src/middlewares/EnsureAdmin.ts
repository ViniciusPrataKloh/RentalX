import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app.error";
import { User } from "../models/accounts/entities/User";
import { UsersRepository } from "../models/accounts/repositories/implementations/UsersRepository";

interface IMyRequest extends Request {
    user_id: string;
}

export async function EnsureAdmin(req: IMyRequest, res: Response, next: NextFunction) {
    const user_id = req.user_id;

    const usersRepository = new UsersRepository;

    const user: User = await usersRepository.findById(user_id);

    if (!user.isAdmin) {
        throw new AppError("Permission denied");
    }

    next();
}