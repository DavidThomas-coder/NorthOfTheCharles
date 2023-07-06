/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("likes", (table) => {
        table.bigIncrements("id")
        table.bigInteger("usersId")
            .unsigned()
            .references("id")
            .inTable("users")
            .index()
            .notNullable()
        table.bigInteger("postId")
            .unsigned()
            .references("id")
            .inTable("posts")
            .index()
            .notNullable()
        table.integer("likeValue")
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
    return knex.schema.dropTableIfExists("likes")
}
