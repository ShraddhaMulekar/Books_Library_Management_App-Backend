import mongoose from "mongoose";

const logoutSchema = new mongoose.Schema({
    token : {type:String, required:true},
    createdAt : {type:Date, default:Date.now()}
},{
    versionKey : false
})

export const logoutModel = mongoose.model("Logout", logoutSchema)