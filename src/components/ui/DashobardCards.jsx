// DashboardCards.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCar, FaPlane } from 'react-icons/fa';

const DashboardCards = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col lg:flex-row gap-6 px-4 bg-gray-100 items-start justify-center py-16">

      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
        <div className="bg-[#0ac6ae] text-white text-xl font-semibold p-4 rounded-t-lg text-center">
          My Orders
        </div>
        <div className="p-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Pickup Location</span>
            <span className='pr-8'>Destination</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <div>
              <p className="font-bold text-gray-800">London,<br />United Kingdom</p>
              <p className="text-xs text-gray-500 mt-1">31 Jul 2025</p>
            </div>
            <div className="flex items-center mx-2">
              <div className="border-t-2 border-dashed text-[#0ac6ae] w-12"></div>
              <FaCar className="text-[#0ac6ae] mx-1"  />
              <div className="border-t-2 border-dashed text-[#0ac6ae] w-12"></div>
            </div>
            <div>
              <p className="font-bold text-gray-800">London,<br />United Kingdom</p>
              <p className="text-xs text-gray-500 mt-1">31 Jul 2025</p>
            </div>
          </div>
        </div>
        <div
          className="text-center text-[#0ac6ae] font-sm pb-3 cursor-pointer " style={{textDecoration:'underline'}}
          onClick={() => navigate('/user-orders')}
        >
          More
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
        <div className="bg-[#0ac6ae] text-white text-xl font-semibold p-4 rounded-t-lg text-center">
          My Trips
        </div>
        <div className="p-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Departure</span>
            <span className='pr-8'>Arrival</span>
          </div>
          <div className="flex justify-between items-center mt-1">
            <div>
              <p className="font-bold text-gray-800">London,<br />United Kingdom</p>
              <p className="text-xs text-gray-500 mt-1">30 Jul 2025</p>
            </div>
            <div className="flex items-center mx-2">
              <div className="border-t-2 border-dashed text-[#0ac6ae] w-12"></div>
              <FaCar className="text-[#0ac6ae] mx-1" />
              <div className="border-t-2 border-dashed text-[#0ac6ae] w-12"></div>
            </div>
            <div>
              <p className="font-bold text-gray-800">Abbottabad,<br />Pakistan</p>
            </div>
          </div>
          <div className="mt-3 text-center">
            <span className="inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-xs font-medium">
              10 KG Space Available
            </span>
          </div>
        </div>
        <div
          className="text-center text-[#0ac6ae] font-sm pb-3 cursor-pointer "style={{textDecoration:'underline'}}
          onClick={() => navigate('/user-trips')}
        >
          More
        </div>
      </div>

    </div>
  );
};

export default DashboardCards;
