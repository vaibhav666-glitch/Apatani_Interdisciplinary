
import { ApplicationError } from "../../error-handler/applicationError.js";
import UserRepository from "./user.repository.js";

export default class UserController{
    constructor(){
        this.userRepository=new UserRepository();
    }

    async addUser(req,res){
        try{
            const user=await this.userRepository.addUser(req.body);
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