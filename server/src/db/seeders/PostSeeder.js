import { Post } from "../../models/index.js"

class PostSeeder {
    static async seed() {
        const postsData = [
            {
                type: "image",
                mediaUrl: "https://i.imgur.com/qVSpi2V.png",
                postBody: "Here is my first post"
            },
            {
                type: "image",
                mediaURL: "https://i.imgur.com/bVywFrr.png",
                postBody: "LOLOL POST"
            }
        ]
        for (const singlePostData of postsData) {
            const currentPost = await Post.query().findOne({email: singleUserData.email })
            if (!currentUser) {
                await User.query().insert(singleUserData)
            }
        }
    }
}

export default PostSeeder