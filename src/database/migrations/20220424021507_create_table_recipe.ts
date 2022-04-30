import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('Recipe', (table) => {
        table.increments('id')
        table.date('date_recipe')

        // relationship
        table.integer('patient_id').unsigned()
        table.foreign('patient_id')
            .references('Patient.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Recipe')
}

