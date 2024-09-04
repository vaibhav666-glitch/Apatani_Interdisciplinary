import { motion } from 'framer-motion';
import OpenPdf from './openPdf.jsx';
import { Link } from 'react-router-dom';
const UserCard=({user})=>{
    const {name,description,email,phone,fileUrl}=user;
    // const file=fileUrl[0];
    // console.log(file);

    
    return(
        
        <motion.div
          className="p-6 max-w-sm mx-auto mb-4 bg-yellow-300 rounded-xl shadow-lg space-y-4 "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
           <h2 className="text-2xl font-bold ">{name}</h2>
           <p className="text-gray-600">{description}</p>
            <p className="text-gray-800"><strong>Email:</strong>{email}</p>
            <p className="text-gray-800"><strong>Phone:</strong>{phone}</p>
            
            <Link to="/viewPdf" >viewDetails</Link>
           
      </motion.div>
        
    )
}
export default UserCard