const Model = require("./Model")


class Post extends Model {
    static get tableName() {
        return "posts"
    }
    static get jsonSchema(){
        return {
            type: "object",
            required: ["type", "mediaURL"],
            properties: {
                type: { type: "string"},
                mediaURL: {type: "string"}
            }
        }
    }
    static get relationMappings(){
        const {Like, Comment, User} = require("./index.js")
        return {
            likes: {
                relation: Model.HasManyRelation,
                modelClass: Like,
                join: {
                    from: "posts.id",
                    to: "likes.postId"
                }
            },
            comment: {
                relation: Model.HasManyRelation,
                modelClass: Comment,
                join: {
                    from: "posts.id",
                    to: "comments.postId"
                }
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "posts.id",
                    to: "users.postId"
                }
            }
        }
    }
}


module.exports = Post