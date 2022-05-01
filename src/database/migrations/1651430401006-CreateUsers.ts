import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1651430401006 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const users = new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "username",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "driver_license",
                    type: "varchar"
                },
                {
                    name: "admin",
                    type: "boolean",
                    default: false
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        });

        await queryRunner.createTable(users);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
