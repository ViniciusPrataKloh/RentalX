import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@errors/app.error";
import { UsersRepository } from "../models/accounts/repositories/implementations/UsersRepository";

interface IPayLoad {
    sub: string;
}

interface IMyRequest extends Request {
    user_id: string;
}

export async function ensureAuthenticated(req: IMyRequest, res: Response, next: NextFunction) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "b5d201290cdf3771078f21be8d645e794af6c3c2") as IPayLoad;

        const usersRepository = new UsersRepository();
        const validatedUser = await usersRepository.findById(user_id);

        if (!validatedUser) {
            throw new AppError("Invalid token.", 401);
        }

        req.user_id = user_id;

        next();
    } catch {
        throw new AppError("Invalid token.", 401);
    }

}