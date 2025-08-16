import mongoose from "mongoose";

export const connect_db = async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log("db connected")
}