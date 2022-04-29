import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSpecifications1651104232917 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const specifications = new Table({
            name: "specifications",
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
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        });

        await queryRunner.createTable(specifications);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("specifications");
    }

}
