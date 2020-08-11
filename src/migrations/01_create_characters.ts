import * as Knex from 'knex'


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('characters', (table: Knex.CreateTableBuilder) => {
    table.increments('id')
    table.string('name')
    table.integer('creator_id').references('users.id').onDelete('CASCADE')
    table.string('specie')
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('characters')
}

