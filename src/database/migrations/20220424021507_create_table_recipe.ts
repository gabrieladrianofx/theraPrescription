import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('Recipe', (table) => {
        table.increments('id')
        table.timestamp('date_recipe').defaultTo(knex.fn.now())

        // relationship
        table.string('patient_cpf', 14)
            .references('Patient.cpf')
            .notNullable()
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Recipe')
}

