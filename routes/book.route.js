import express from "express"
import { bookController } from "../controllers/book.controller.js"

export const bookRouter = express.Router()

bookRouter.get("/", bookController)