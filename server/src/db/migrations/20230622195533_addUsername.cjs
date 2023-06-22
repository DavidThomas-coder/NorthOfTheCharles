/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable("users", (table) => {
        table.string("username").notNullable().unique()
        table.string("firstName").notNullable()
        table.string("lastName").notNullable()
        table.string("city").notNullable()
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.alterTable("users", (table) => {
        table.dropColumn("username")
        table.dropColumn("firstName")
        table.dropColumn("lastName")
        table.dropColumn("city")
    })
}
