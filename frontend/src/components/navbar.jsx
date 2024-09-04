import {Link} from 'react-router-dom'
export default function Nav(){
  return (
    <>
   <div className="flex justify-around  p-5">
    <div className="flex space-x-4">
      <Link to="/">logo</Link>
      <h1 className="font-medium text-2xl">Apatani Interdisciplinary Research Society</h1>
    </div>
    <div>
      <input type="text"
      placeholder="Search"/>
    </div>
   </div>
   <div className="flex justify-center  bg-gray-200 p-16 text-3xl font-serif">
   To connect the elders with the novices of our society and to encourage and guide research interested minds
   </div>
    </>
  )
}