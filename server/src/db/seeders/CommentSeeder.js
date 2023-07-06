import { User, Post } from './models/index.js';

class CommentSeeder {
    static async seed() {
        const commentData = [
            {
                user_id: 1,
                post_id: 2,
                comment_text: 'Wow so beautiful'
            },
            {
                user_id: 1,
                post_id: 3,
                comment_text: 'Delved to deep!'
            },
            {
                user_id: 2,
                post_id: 1,
                comment_text: 'I love this'
            },
            {
                user_id: 2,
                post_id: 3,
                comment_text: 'Lame'
            },
            {
                user_id: 3,
                post_id: 1,
                comment_text: 'git gud'
            },
            {
                user_id: 3,
                post_id: 2,
                comment_text: 'Reminds me of a hamster'
            }
        ]

        
    }
}

export default CommentSeeder;