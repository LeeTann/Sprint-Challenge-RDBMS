
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', tbl => {
        tbl.increments()
        tbl.string('project_name').notNullable().unique()
        tbl.text('description')
        tbl.boolean('completed')
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('products')
};
