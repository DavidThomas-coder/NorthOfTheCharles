/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("posts", (table) => {
        table.bigIncrements("id")
        table.string("type").notNullable()
        table.string("mediaURL").notNullable()
        table
            .bigInteger("userId")
            .unsigned()
            .notNullable()
            .index()
            .references("users.id")
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("posts")
}
