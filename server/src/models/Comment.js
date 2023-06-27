const Model = require('./Model.js');

class Comment extends Model {
    static get tableName() {
        return 'comments';
    }

    static get relationMappings() {
        const { Post, User } = require('./index.js');
        
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'comments.userId',
                    to: 'users.id'
                }
            },

            post: {
                relation: Model.BelongsToOneRelation,
                modelClass: Post,
                join: {
                    from: 'comments.postId',
                    to: 'posts.id'
                }
            }
        };
    }

}

module.exports = Comment;