import express from "express"
import { registration } from "../controllers/user.registration.controller.js"
import { login } from "../controllers/user.login.controller.js"

const userRouter = express.Router()

userRouter.post("/register", registration)
userRouter.post("/login", login)

export default userRouter