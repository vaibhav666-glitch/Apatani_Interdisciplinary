import './index.css'
import axios from "axios"
import { useState, useEffect } from 'react'
import Nav from './components/navbar.jsx';

import UserList from './components/userList.jsx';

function App() {
  // const [name,setName]=useState("");
  // const[email,setEmail]=useState("");
  // const[phone,setPhone]=useState("");
  
  // async function sendData(){
  //   const response = await axios.post('http://localhost:3200/api/users/add', { name,email,phone });
  //   console.log('Login successful:', response.data);
  // }
  return (
    <>
     <UserList />
     </>
  //  <>
  //  <div className="flex justify-center items-center h-screen bg-gray-100">
  //       <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
  //         <h2 className="text-2xl font-bold text-center mb-4">User Information</h2>
  //         <div className="space-y-4">
  //           <div>
  //             <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
  //             <input
  //               type="text"
  //               id="name"
  //               value={name}
  //               onChange={(e) => setName(e.target.value)}
  //               className="w-full p-2 mt-1 border rounded-md"
  //               placeholder="Enter your name"
  //             />
  //           </div>
  //           <div>
  //             <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
  //             <input
  //               type="email"
  //               id="email"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //               className="w-full p-2 mt-1 border rounded-md"
  //               placeholder="Enter your email"
  //             />
  //           </div>
  //           <div>
  //             <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
  //             <input
  //               type="text"
  //               id="phone"
  //               value={phone}
  //               onChange={(e) => setPhone(e.target.value)}
  //               className="w-full p-2 mt-1 border rounded-md"
  //               placeholder="Enter your phone number"
  //             />
  //           </div>
  //         </div>
  //         <button
  //           className='w-full mt-4 bg-blue-600 rounded-xl px-4 py-2 shadow-xl text-white'
  //           onClick={sendData}
  //         >
  //           Send Data
  //         </button>
  //       </div>
  //     </div>
  //  </>
 

  )
}

export default App
