import * as Knex from 'knex'


export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('users',(table:Knex.CreateTableBuilder)=>{
    table.increments('id')
    table.string('full_name', 36)
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('users')
}

