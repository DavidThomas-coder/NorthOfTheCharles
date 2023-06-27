import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import commentsRouter from "./api/v1/commentsRouter.js";
import postsRouter from "./api/v1/postsRouter.js";


const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/comments", commentsRouter)
rootRouter.use("/api/v1/posts", postsRouter)

//place your server-side routes here

export default rootRouter;
