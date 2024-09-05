import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import UserList from './components/userList.jsx'
import OpenPdf from './components/openPdf.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<UserList/>

      },
      {
        path:'viewPdf',
        element:<OpenPdf/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>,
)
