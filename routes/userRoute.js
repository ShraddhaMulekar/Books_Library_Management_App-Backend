import express from "express"
import { registration } from "../controllers/user.registration.controller.js"
import { login } from "../controllers/user.login.controller.js"
import { logOutController } from "../controllers/user.logout.controller.js"

const userRouter = express.Router()

userRouter.post("/register", registration)
userRouter.post("/login", login)
userRouter.post("/logout", logOutController)

export default userRouter