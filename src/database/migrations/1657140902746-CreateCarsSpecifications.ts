import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCarsSpecifications1657138877667 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "cars_specifications",
                columns: [
                    {
                        name: "car_id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "specification_id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );

        await queryRunner.createForeignKey(
            "cars_specifications",
            new TableForeignKey({
                name: "FK_car_specification",
                referencedTableName: "cars",
                referencedColumnNames: ["id"],
                columnNames: ["car_id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );

        await queryRunner.createForeignKey(
            "cars_specifications",
            new TableForeignKey({
                name: "FK_specification_car",
                referencedTableName: "specifications",
                referencedColumnNames: ["id"],
                columnNames: ["specification_id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("cars_specifications", "FK_car_specification");

        await queryRunner.dropForeignKey("cars_specifications", "FK_specification_car");

        await queryRunner.dropTable("cars_specifications");
    }

}
