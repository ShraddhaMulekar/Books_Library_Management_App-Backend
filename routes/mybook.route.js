import express from "express"
import { getMyBookController } from "../controllers/getMybook.controller.js"
import { auth_middleware } from "../middlewares/auth.middleware.js"
import { addMybookController } from "../controllers/addMybook.controller.js"
import { updateStatusController } from "../controllers/updateStatus.controller.js"
import { updateRatingController } from "../controllers/updateRating.controller.js"

export const myBookRouter = express.Router()

myBookRouter.get("/", auth_middleware, getMyBookController)
myBookRouter.post("/:bookId", auth_middleware, addMybookController)
myBookRouter.patch("/:bookId/status", auth_middleware, updateStatusController)
myBookRouter.patch("/:bookId/rating", auth_middleware, updateRatingController)