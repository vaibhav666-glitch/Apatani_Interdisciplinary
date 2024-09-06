import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center p-5">
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
            className="w-full md:w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      
    </>
  );
}
