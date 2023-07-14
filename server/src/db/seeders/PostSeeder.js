import { Post } from "../../models/index.js"

class PostSeeder {
    static async seed() {
        const postsData = [
            {
                type: "image",
                mediaURL: "https://i.imgur.com/qVSpi2V.png",
                postBody: "Here is my first post",
                userId: 1,
                likeId: 1,
                commentId: 1
            },
            {
                type: "image",
                mediaURL: "https://i.imgur.com/bVywFrr.png",
                postBody: "LOLOL POST",
                userId: 2,
                likeId: 2,
                commentId: 2
            }
        ]
        for (const singlePostData of postsData) {
            const currentPost = await Post.query().findOne({type: singlePostData.type })
            if (!currentPost) {
                await Post.query().insert(singlePostData)
            }
        }
    }
}

export default PostSeeder