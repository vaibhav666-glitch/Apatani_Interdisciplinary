import express from "express"
import UserController from "./user.controller.js";
import jwtAuth from "../../middleware/jwt.middleware.js";
import { uploadFile } from "../../middleware/fileUpload.middleware.js";
 

const userController=new UserController();

const UserRouter=express.Router();
UserRouter.post('/add',uploadFile.array('fileUrl',5),(req,res)=>{userController.addUser(req,res)});

UserRouter.get('/',(req,res)=>{userController.getAllUser(req,res)});
UserRouter.get('/:id',(req,res)=>{userController.getUserById(req,res)});
UserRouter.put("/update",jwtAuth,(req,res)=>{userController.updateUser(req,res)});
UserRouter.delete("/delete",jwtAuth,(req,res)=>{userController.deleteUser(req,res)})


export default UserRouter