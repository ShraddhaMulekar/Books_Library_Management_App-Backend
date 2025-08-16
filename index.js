import express from "express"
import dotenv from "dotenv"
import {connect_db} from "./mongoose/db.config.js"
import userRouter from "./routes/userRoute.js"

dotenv.config()

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use("/users", userRouter)

app.listen(port, async()=>{
    await connect_db()
    console.log(`server running on http://localhost:${port}`)
})