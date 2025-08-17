import express from "express"
import { bookController } from "../controllers/book.controller.js"
import { addBookController } from "../controllers/addBook.controller.js"

export const bookRouter = express.Router()

bookRouter.get("/", bookController)
bookRouter.post("/addbook", addBookController)