import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import {connect_db} from "./mongoose/db.config.js"
import userRouter from "./routes/userRoute.js"
import { bookRouter } from "./routes/book.route.js"
import { myBookRouter } from "./routes/mybook.route.js"

dotenv.config()

const port = process.env.PORT || 3000

const app = express()

app.use(cors({
  origin: "http://localhost:5173",  // frontend origin
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json())

app.use("/users", userRouter)
app.use("/books", bookRouter)
app.use("/mybooks", myBookRouter)

app.listen(port, async()=>{
    await connect_db()
    console.log(`server running on http://localhost:${port}`)
})