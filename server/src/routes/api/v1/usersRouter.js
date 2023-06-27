import express from "express";
import passport from "passport";
import { User } from "../../../models/index.js";
import UserSerializer from "../../serializers/UserSerializer.js";

const usersRouter = new express.Router();

usersRouter.get("/", async (req, res) => {
  try {
    const users = await User.query()
    const serializedUsers = users.map(user => UserSerializer.showUserDetails(user))
    return res.status(200).json({ users: serializedUsers })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

usersRouter.post("/", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;
  try {
    const persistedUser = await User.query().insertAndFetch({ email, password });
    return req.login(persistedUser, () => {
      return res.status(201).json({ user: persistedUser });
    });
  } catch (error) {
    console.log(error);
    return res.status(422).json({ errors: error });
  }
});

export default usersRouter;
