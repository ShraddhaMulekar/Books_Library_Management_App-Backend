import express from "express"
import { registration } from "../controllers/user.registration.controller.js"

const userRouter = express.Router()

userRouter.post("/register", registration)

export default userRouter