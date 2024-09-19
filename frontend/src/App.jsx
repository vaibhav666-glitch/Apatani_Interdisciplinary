import React from 'react'
import Layout from './Layout.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import UserList from './components/userList.jsx'
import OpenPdf from './components/openPdf.jsx'
import ViewList from './components/viewList.jsx'
import UploadFiles from './components/uploadFiles.jsx'
import { useState,useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://apatani-interdisciplinary-back.onrender.com/api/users');
     // console.log(response.data);
        setUsers(response.data); // Assuming response.data contains the users array
      } catch (err) {
        console.log('Unable to fetch', err);
      }
    };
    fetchData();
  }, []);


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout users={users}/>,
    children:[
      {
        path:'',
        element:<UserList/>

      },
      {
        path:'viewList',
        element:<ViewList/>
      },
      {
        path:'viewPdf',
        element:<OpenPdf/>
      },
      {
        path:'uploadFile',
        element:<UploadFiles/>
      }
    ]

  }
])

return <RouterProvider router={router} />;
};

export default App