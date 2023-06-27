import express from "express";

import { Post } from "../../../models/index.js"

const postsRouter = new express.Router()

postsRouter.get("/", async (req, res) => {
    try {
        const posts = await Post.query()
        return res.status(200).json({ posts: posts })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default postsRouter