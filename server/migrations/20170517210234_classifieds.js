
exports.up = function(knex) {
  return knex.schema.createTable('classifieds', (table) =>{
    table.increments()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('price').notNullable()
    table.string('item_image').notNullable()
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
}


exports.down = function(knex) {
  return knex.schema.dropTable('classifieds')

};
