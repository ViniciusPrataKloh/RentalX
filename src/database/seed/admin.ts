import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

async function createAdmin() {
    // const connection = await createConnection("localhost");

    const id = uuidV4();
    const password = await hash("admin123", 8);
    console.log(password);

    // await connection.query(`
    //     INSERT INTO users(id, name, email, password, "isAdmin", created_at, driver_license, avatar)
    //     VALUES('${id}', 'admin', 'admin@rentx.com', '${password}', true, 'now()', 'A', NULL);
    // `);

    // await connection.close();
}

createAdmin().then(() => console.log("Admin user created!"));