import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('Orientations', (table) => {
        table.increments('id')
        table.text('prescribed_guidance', 'textlong')

        // relationship
        table.integer('recipe_id').unsigned()
        table.foreign('recipe_id')
            .references('Recipe.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Orientations')
}

