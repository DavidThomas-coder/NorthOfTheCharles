const Model = require('./Model.js');

class Friend extends Model {
    static get tableName() {
        return 'friends';
    }

    static get relationMappings() {
        const { Friendship, User } = require('./index.js');
        
        return {
            users: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: "friends.id",
                    through: {
                        from: "friendships.friendId",
                        to: "friendships.userId"
                    },
                    to: "users.id"
                }
            },
            friendships: {
                relation: Model.HasManyRelation,
                modelClass: Friendship,
                join: {
                    from: "friends.id",
                    to: "friendships.friendId"
                }
            }
        }
    }

}

module.exports = Friend;