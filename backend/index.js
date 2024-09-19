import express from "express"
import { connectUsingMongoose } from "./src/config/mongooseConfig.js";
import { ApplicationError } from "./src/error-handler/applicationError.js";
import bodyParser from "body-parser";
import UserRouter from "./src/feature/user/user.route.js";
import AdminRouter from "./src/feature/admin/admin.route.js";
// import dotenv from "dotenv"
// //dotenv.config();
//import path from'path';
import cors from "cors"

const PORT=process.env.PORT||3200

const app=express();

app.use('/public/file', express.static('public/file'));


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use('/api/admin',AdminRouter);
app.use('/api/users',UserRouter);




//Error Handler
app.use((err,req,res,next)=>{
    console.error(err);
    if(err instanceof ApplicationError)
        res.status(err.status).send({message:err.message});

    //server errors
    res.status(500).send("Something went wrong, please try again later")
})


app.listen(PORT,()=>{
    console.log("server is listening on ",PORT);
    connectUsingMongoose()
})