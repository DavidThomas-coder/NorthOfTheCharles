/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("friends", (table) => {
        table.bigIncrements("id")
        table.bigInteger("userId")
            .unsigned()
            .references("users.id")
            .index()
            .notNullable()
        table.timestamp("createdAt")
            .notNullable()
            .defaultTo(knex.fn.now());
        table.timestamp("updatedAt")
            .notNullable()
            .defaultTo(knex.fn.now());
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("friends")
}
