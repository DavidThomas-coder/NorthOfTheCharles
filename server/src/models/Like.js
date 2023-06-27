const Model = require('./model');

class Like extends Model {
        static get tableName() {
            return 'likes';
    }

    static relationMappings() {
        const { User, Post } = require('./index.js');

        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'likes.userId',
                    to: 'users.id'
                    }
                },

            post: {
                relation: Model.BelongsToOneRelation,
                modelClass: Post,
                join: {
                    from: 'likes.postId',
                    to: 'posts.id'
            }
        }
    }
}
}
module.exports = Like;