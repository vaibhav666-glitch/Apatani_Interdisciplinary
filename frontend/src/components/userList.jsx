
import { useOutletContext } from "react-router-dom";
import UserCard from "./userCardRecent.jsx";



const UserList=()=>{
  const {users}=useOutletContext();
//console.log(users);

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