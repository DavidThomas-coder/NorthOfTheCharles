const Model = require("./Model")

class Friendship extends Model {
    static get tableName() {
        return "friendships"
    }

    static get relationMappings() {
        const {User, Friend} = require("./index.js")

        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "friendships.userId",
                    to: "users.id"
                }
            },
            friends: {
                relation: Model.BelongsToOneRelation,
                modelClass: Friend,
                join: {
                    from: "friendships.friendId",
                    to: "friends.id"
                }
            }
        }
    }
}

module.exports = Friendship