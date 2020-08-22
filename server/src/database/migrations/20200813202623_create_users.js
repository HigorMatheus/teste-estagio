
exports.up = function(knex) {
    return knex.schema.createTable('users',function(table){
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('sobrenome').notNullable();
        table.string('idade').notNullable();
        table.string('escolaridade').notNullable();
        table.string('tecnologia').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
