import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('Patient', (table) => {
        table.increments('id')
        table.string('cpf', 14).unique().notNullable()
        table.string('name', 255).notNullable()
        table.string('sex', 1).notNullable()
        table.string('email', 100).unique().notNullable()
        table.string('phone', 14).notNullable()
        table.date('birthDay')
        table.string('address', 150)
        table.string('district', 50)
        table.string('city', 50)
        table.string('state', 2)
        table.string('zip_code', 10)
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Patient')
}

