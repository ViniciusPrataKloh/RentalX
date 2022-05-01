import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";
import swaggerFile from "./swaggerFile.json";

import "./database/index.ts";
import "./shared/container";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => {
    console.log("Server is running on port 3333.");
    console.log("See the documentation: http://localhost:3333/api-docs.");
});