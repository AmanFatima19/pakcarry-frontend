import React from 'react';
import { Home, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TripNav = () => {
    const navigate = useNavigate();
  return (
    <nav className="bg-[#0ac6ae] w-full shadow-md py-3 px-4 flex items-center justify-between">
      
      <div className="flex items-center">
        <button className="test-white transition" onClick={()=>navigate("/")}>
          <Home className="w-6 h-6 text-white" />
        </button>
      </div> 
        <h3 className="text-2xl md:text-xl font-bold leading-none m-0 p-0 text-white">
          Add a Trip
        </h3>
      

     
      <div className="flex items-center">
        <button className="relative test-white hover:text-[#0ac6ae] transition">
          <Bell className="w-6 h-6 text-white" />
          {/* Optional Notification Badge */}
          {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            1
          </span> */}
        </button>
      </div>
    </nav>
  );
};

export default TripNav;
