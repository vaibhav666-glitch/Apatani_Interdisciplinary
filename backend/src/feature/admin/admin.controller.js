import { ApplicationError } from "../../error-handler/applicationError.js";
import { signIn } from "./admin.model.js";
import jwt from "jsonwebtoken"

export default class AdminController{

   logIn(req,res){
        try{
            const isAdmin= signIn(req.body);
            if(!isAdmin){
                res.status(401).send(isAdmin)
            }
          else{
            const token=jwt.sign({email:req.email},process.env.JWT_SECRET,
                {expiresIn:"1h"});
                return res.status(200).send(token)
          }
        }

        catch(err){
            console.log(err);
            throw new ApplicationError("something is wrong", 500);
        }
    }

    logOut(req,res){
        return res.status(200).send("log out successfully ")
    }



}