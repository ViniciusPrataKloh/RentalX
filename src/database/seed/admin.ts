import { hash } from "bcrypt";
import { getConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

async function createAdmin() {
    const connection = getConnection();

    const id = uuidV4();
    const password = await hash("admin", 8);

    await connection.query(`
        INSERT INTO users(id, name, email, password, admin, created_at)
        VALUES('${id}', 'admin', 'admin@rentx.com', '${password}', true, ${new Date()});
    `);
}