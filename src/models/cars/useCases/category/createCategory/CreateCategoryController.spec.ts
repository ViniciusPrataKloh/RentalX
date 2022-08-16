import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";
import { app } from "../../../../../app";

import { hash } from "bcrypt";
import createConnection from "../../../../../database";

let connection: Connection;

describe("Create Category Controller", () => {

    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations();

        const id = uuid();
        const password = await hash("admin", 8);

        await connection.query(`
            INSERT INTO users(id, name, email, password, "isAdmin", created_at, driver_license, avatar)
            VALUES('${id}', 'admin', 'admin@rentx.com', '${password}', true, 'now()', 'A', 'AVATAR');
        `);

    });

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.close();
    });

    it("should be able to create a new Category", async () => {

        const responseToken = await request(app).post("/sessions").send({
            email: "admin@rentx.com",
            password: "admin"
        });

        const { token } = responseToken.body;

        const response = await request(app)
            .post("/categories")
            .send({
                name: "Category Supertest",
                description: "Category Supertest"
            })
            .set({
                Authorization: `Bearer ${token}`
            });

        expect(response.status).toBe(201);
    });

    it("should not be able to create a new category when name already exists", async () => {
        // expect(async () => {
        const responseToken = await request(app).post("/sessions").send({
            email: "admin@rentx.com",
            password: "admin"
        });

        const { token } = responseToken.body;

        const response1 = await request(app)
            .post("/categories")
            .send({
                name: "Category Supertest 2",
                description: "Category Supertest"
            })
            .set({
                Authorization: `Bearer ${token}`
            });

        const response2 = await request(app)
            .post("/categories")
            .send({
                name: "Category Supertest 2",
                description: "Category Supertest"
            })
            .set({
                Authorization: `Bearer ${token}`
            });

        expect(response1.status).toBe(201);
        expect(response2.status).toBe(501);
        // }).rejects.toBeInstanceOf(AppError);
    });

});

