import { v2 as cloudinary } from 'cloudinary'

import fs from "fs"

cloudinary.config({ 
    cloud_name: 'dud19izaw', 
    api_key: '833343373773684', 
    api_secret: 'pLnxTV0vv-gDo9haNdzTQvyqQ0M'
  });

  const uploadOnCloudinary=async (localFilePath)=>{
    try{
      if(!localFilePath)
        return null;
     const response=await cloudinary.uploader.upload(localFilePath,{
        resource_type: 'auto'
      })
      console.log("file is uploaded",response.url)
      return response
    }
    catch(err){
      fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload operation failed
      console.log(err);
      return null;
        }
  }
  export default uploadOnCloudinary