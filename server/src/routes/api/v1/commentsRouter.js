import express from "express";

import { Comment } from "../../../models/index.js"

const commentsRouter = new express.Router()

commentsRouter.get("/", async (req, res) => {
    try {
        const comments = await Comment.query()
        return res.status(200).json({ comments: comments })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default commentsRouter