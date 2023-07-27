/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable("users").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("users", function(table){
                table.increments("user_id").primary()
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
    return knex.schema.hasColumn("taks").then(function(exists){
        if(exists){
            return knex.schema.dropTable("tasks")
        }
    })
};