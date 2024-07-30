import express from "express"
import { connectUsingMongoose } from "./src/config/mongooseConfig.js";
import { ApplicationError } from "./src/error-handler/applicationError.js";
import bodyParser from "body-parser";
import UserRouter from "./src/feature/user/user.route.js";
import AdminRouter from "./src/feature/admin/admin.route.js";


const app=express();
app.use(bodyParser.json());


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


app.listen(3200,()=>{
    console.log("server is listening on 3200");
    connectUsingMongoose()
})