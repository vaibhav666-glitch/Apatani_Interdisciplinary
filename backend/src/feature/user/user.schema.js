import mongoose from "mongoose";

export const userSchema=new mongoose.Schema({
    name:String,
    description:String,
    email:String,
    phone:Number,
    fileUrl:[String],
})