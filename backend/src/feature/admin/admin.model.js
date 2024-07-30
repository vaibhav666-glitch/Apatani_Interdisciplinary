import dotenv from "dotenv"
dotenv.config();

const email=process.env.email
const password=process.env.password


   export const signIn=(obj)=>{
        try{
            if(obj.email==email && obj.password==password)
                return true;
            else
            return false;
        }
        catch(err){
            console.log(err);
        }
    }
    
   