import { useState } from "react"
const Nav=()=>{
    const [isOpen, setIsOpen]=useState(false);
    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    }
    return(<>
        <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          MyLogo
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white focus:outline-none focus:text-white" onClick={toggleMenu}>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen &&(<div className="md:hidden bg-gray-800">
          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Home</a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">About</a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Services</a>
          <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Contact</a>
        </div>)}
    </nav>
    
    </>
    )
}

export default Nav