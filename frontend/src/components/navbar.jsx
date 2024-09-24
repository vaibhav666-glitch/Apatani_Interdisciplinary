import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
export default function Nav({users}) {
  console.log(users);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue,setValue]=useState('');
  const [suggestion,setSuggestion]=useState([]);
  //const [result,setResult]=useState([]);
  const [showResult,setShowResult]=useState(false);
  const navigate=useNavigate();

  const handleInputChange=(event)=>{
    const value=event.target.value;
    setValue(value);

    const uniqueSuggestion=users.map(obj=>obj['name'])
    .filter(val=>val.toLowerCase().startsWith(value.toLowerCase()));
    setSuggestion(uniqueSuggestion);
  }
  const handleSuggestionClick=(value)=>{
    console.log("yo am value ", value);
    setValue(value);
    setSuggestion([]);
    
    const user=users.filter(val=>val['name'].toLowerCase().includes(value.toLowerCase()));
    //console.log("yo am result", user);
    navigate('/viewList',{state:{user}});
  
    setValue('')
    setShowResult(true);
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center p-5">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <Link to="/" className="flex flex-col items-center space-y-2">
  <img
    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
    src="https://res.cloudinary.com/dud19izaw/image/upload/v1725560878/AIRS_LOGO_pse7h8.jpg"
    alt="AIRS Logo"
  />
  <span className="text-sm md:text-base font-sans whitespace-nowrap">
    "Discover more, learn more."
  </span>
</Link>

          <h1 className="font-medium text-xl md:text-2xl text-center">
            Apatani Interdisciplinary Research Society
          </h1>
        </div>

        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(event)=>handleInputChange(event)}
            onBlur={()=>setSuggestion([])}
           
            className="w-full md:w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className='mt-2'>
            {inputValue &&(
              <ul className="bg-white rounded-md shadow-md">
                {suggestion.map(name=>(
                  <li
                  key={name}
                  onMouseDown={()=>handleSuggestionClick(name)}
                 
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  >
                    {name}
                  </li>
                ))}

              </ul>
            )}
          </div>

          {/* <div className='mt-2'>
            {
              showResult && suggestion.length===0 &&(
                <div>no result found</div>)}
              {showResult &&(<h1>{result[0].name}</h1>
            
            )}
          </div> */}
        </div>

        <div className="relative px-5">
      <div
        onClick={toggleDropdown}
      
        className="  px-4 py-2"  
      >
       <FontAwesomeIcon icon={faUser} />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 ">
          <div className="py-2">
            <Link
              to="/signin"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:text-white"
              onClick={toggleDropdown}
            >
              Sign In
            </Link>
            <Link
              to="/uploadFile"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-600 hover:text-white"
              onClick={toggleDropdown}
           >
              Add File
            </Link>
          </div>
        </div>
      )}
    </div>
      
      </div>

      
    </>
  );
}
