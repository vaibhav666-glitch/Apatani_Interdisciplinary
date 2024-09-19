import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';

const UserCard=({user})=>{
    const {_id,name,department,fileUrl}=user;
     console.log(user);
   
    //console.log(fileUrl)
     const navigate=useNavigate();
     const handleNavigate=()=>{
      navigate('/viewList',{state:{user}})
     }
    
    return(
     <>
        
        <motion.div
          className="p-6 max-w-sm mx-auto mb-4 bg-gray-300 rounded-xl shadow-lg space-y-4 "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          
          onClick={handleNavigate}
          
          
        >
          
           <h2 className="text-2xl font-bold ">{department}</h2>
           <p className="text-gray-600">{name}</p>
            
            

           
            
            
           
      </motion.div>

 

   </>  
    )
}
export default UserCard