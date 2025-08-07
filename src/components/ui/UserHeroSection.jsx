import React, { useState } from 'react';
import { ShoppingCart, User, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserHeroSection = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('dashboard.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Buttons */}
      <div className="relative flex gap-4" style={{ marginTop: '200px' }}>
        {/* ✅ New Parcel Button with Modal Trigger */}
        <button
          onClick={() => setShowModal(true)}
          className="flex flex-col items-center justify-center bg-[#0ac6ae] bg-opacity-90 px-6 py-3 rounded transition shadow-md"
        >
          <ShoppingCart className="w-6 h-6 text-white mb-0" />
          <span className="text-white font-semibold">New Parcel</span>
        </button>

        
        <button
          onClick={() => navigate("/new-trip")}
          className="flex flex-col items-center justify-center bg-[#0ac6ae] rounded bg-opacity-90 px-6 py-3 transition shadow-md"
        >
          <User className="w-6 h-6 text-white mb-1" />
          <span className="text-white font-semibold">New Trip</span>
        </button>
      </div>

     
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md px-8 py-20 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => navigate("/new-order")}
                className="flex items-center gap-2 justify-center bg-gradient-to-b from-[#183D4F] to-[#0F2C3F] text-white px-4 py-3 rounded shadow-md"
              >
                <ShoppingCart className="w-5 h-5 white" />
                <span className="font-semibold">I WANT TO ORDER</span>
              </button>

              <button
                onClick={() => navigate("/new-send-order")}
                className="flex items-center gap-2 justify-center bg-gradient-to-b from-[#183D4F] to-[#0F2C3F] text-white px-4 py-3 rounded shadow-md"
              >
                <User className="w-5 h-5 text-white" />
                <span className="font-semibold">I WANT TO SEND</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserHeroSection;
