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
            .references("users.id")
            .index()
            .notNullable()
        table.bigInteger("postId")
            .unsigned()
            .references("posts.id")
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
