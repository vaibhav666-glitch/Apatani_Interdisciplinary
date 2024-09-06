import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./userCardRecent.jsx";



const UserList=()=>{

const [users,setUsers]=useState([]);

useEffect(()=>{
    const fetchData=async ()=>{
        try{
        const response=await axios.get('http://localhost:3200/api/users')
        //console.log()
        setUsers(response.data)
        }
        catch(err){
            console.log("Unable to fetch",err);

        }

    }
    fetchData();
},[]);

return(
    <>
  <div className="flex justify-center bg-gray-200 p-8 md:p-16 text-xl md:text-3xl font-serif text-center">
        To connect the elders with the novices of our society and to encourage and guide research-interested minds
      </div>
    
    {/* Categories container */}
    <div className="container p-4 mx-auto ">
        <h1 className="text-2xl flex justify-start  font-bold mb-10 ">Categories</h1>
        <div className="flex flex-wrap justify-center  p-4 bg-gray-100">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
        </div>
    </div>
   
   
    </>
   
)
}

export default UserList