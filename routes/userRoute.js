import express from "express"
import { registrationController } from "../controllers/user.registration.controller.js"
import { loginController } from "../controllers/user.login.controller.js"
import { logOutController } from "../controllers/user.logout.controller.js"
import { auth_middleware } from "../middlewares/auth.middleware.js"
import { getMeController } from "../controllers/getMe.controller.js"

const userRouter = express.Router()

userRouter.post("/register", registrationController)
userRouter.post("/login", loginController)
userRouter.post("/logout", logOutController)
userRouter.get("/me", auth_middleware, getMeController);

export default userRouter