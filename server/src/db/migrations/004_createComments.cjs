/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("comments", (table) => {
        table.bigIncrements("id")
        table.text("body").notNullable()
        table
            .bigInteger("userId")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .index()
        table
            .bigInteger("postId")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("posts")
            .index()
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("comments")
}
