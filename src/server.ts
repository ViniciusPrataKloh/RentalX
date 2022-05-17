import "reflect-metadata";
import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swaggerFile.json";

import { Request, Response, NextFunction } from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";
import { usersRoutes } from "./routes/users.routes";

import "./database/index.ts";
import "./shared/container";
import { authenticateRoutes } from "./routes/authenticate.routes";
import { AppError } from "./errors/app.error";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);
app.use("/users", usersRoutes);
app.use(authenticateRoutes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    });
});

app.listen(3333, () => {
    console.log("Server is running on port 3333.");
    console.log("See the documentation: http://localhost:3333/api-docs.");
});