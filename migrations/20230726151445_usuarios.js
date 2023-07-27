/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable("usuarios").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("usuarios", function(table){
                table.increments("usuario_id").primary()
                table.string("name").notNullable()
                table.string("email").notNullable()
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.hasColumn("usuarios").then(function(exists){
        if(exists){
            return knex.schema.dropTable("usuarios")
        }
    })
};