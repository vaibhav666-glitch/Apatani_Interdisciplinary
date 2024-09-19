import mongoose from "mongoose";

export const userSchema=new mongoose.Schema({
    name:String,
    department:String,
    fileUrl:[String],
})