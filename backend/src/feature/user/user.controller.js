
//import uploadOnCloudinary from "../../config/cloudinaryConfig.js";
import { ApplicationError } from "../../error-handler/applicationError.js";
import UserRepository from "./user.repository.js";

export default class UserController{
    constructor(){
        this.userRepository=new UserRepository();
    }

    async addUser(req,res){
        try{ 
        const fileUrls=req.files.map(file=>file.path);
        if (!fileUrls || fileUrls.length === 0) {
            throw new ApplicationError(400, "At least one file is required");
        }
        const{name,email,description,phone}=req.body;
        const newUser={name,email,description,phone,fileUrl:fileUrls}
        //console.log(req.body);
            const user=await this.userRepository.addUser(newUser);
            res.status(201).send(user);
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("User not found",401);
        }
    }

    async getAllUser(req,res){
        try{
            const user=await this.userRepository.getAllUser();
            res.status(201).send(user);
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("User not found",401);
        }
    }

    async getUserById(req,res){
        try{
            const user=await this.userRepository.getUserById(req.params.id);
            res.status(201).send(user);
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("user not found", 401);
        }
    }

    async updateUser(req,res){
        try{
            const user=await this.userRepository.updateUser(req.body);
            res.status(201).send(user);
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("User not found",401);
        }
    }

    async deleteUser(req,res){
        try{
            const user=await this.userRepository.getUserById(req.params.id);
            res.status(201).send(user);
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("user not found", 401);
        }
    }



}