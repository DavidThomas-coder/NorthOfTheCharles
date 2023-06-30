/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable("users", (table) => {
        table
            .bigInteger("likeId")
            .unsigned()
            .notNullable()
            .index()
            .references("likes.id")
        table
            .bigInteger("commentId")
            .unsigned()
            .notNullable()
            .index()
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.alterTable("users", (table) => {
        table.dropColumn("likeId")
        table.dropColumn("commentId")
    })
}
