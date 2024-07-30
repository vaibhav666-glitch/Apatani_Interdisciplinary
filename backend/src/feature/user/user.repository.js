import mongoose from "mongoose";
import { ApplicationError } from "../../error-handler/applicationError.js";
import { userSchema } from "./user.schema.js";

const userModel= mongoose.model('User',userSchema);

export default class UserRepository{
    async addUser(userObj){
        try{
            const user = new userModel(userObj);
            await user.save();
            return user;
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something is went wrong with server", 500);
        }
    }

    async updateUser(userObj){
        try{
            const user = await userModel.findByIdAndUpdate(userObj._id, userObj, {new: true});
            return user;
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something is went wrong with server", 500);
        }
    }

    async getAllUser(){
        try{
            const user = await userModel.find();
            return user;
        }
            
        
        catch(err){
            console.log(err)
            throw new ApplicationError("Something is went wrong with server", 500);
        }
    }

    async getUserById(id){
        try{
            const user = await userModel.findById(id);
            return user;
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something is went wrong with server", 500);
        }
    }

    async deleteUser(id){
        try{
         await userModel.findByIdAndDelete(id);
         return true;
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("Something is went wrong with server", 500);
            }
    }

}