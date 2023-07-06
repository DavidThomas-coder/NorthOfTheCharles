import { User, Comment, Post } from "../../models/index.js";

class LikesSeeder {
    static async seed() {
        const likesData = [
            {
                userId: 1,
                postId: 2
            },
            {
                userId: 1,
                postId: 3
            },
            {
                userId: 2,
                postId: 1
            },
            {
                userId: 2,
                postId: 3
            },
            {
                userId: 3,
                postId: 1
            },
            {
                userId: 3,
                postId: 2
            },


        ]
    }
}

export default LikesSeeder;