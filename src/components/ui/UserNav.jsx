import React, { useState, useEffect } from 'react';
import { Bell, LogOut, User, Clock, MessageSquare, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserNav = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState({ name: "Guest User" });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <nav className="w-full bg-white shadow-md py-3 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png" 
            alt="User"
            className="w-10 h-10 rounded-full object-cover border cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-2xl md:text-xl font-bold leading-none m-0 p-0">
            <span className="text-[#0ac6ae]">Pak</span>
            <span className="text-black">Carry</span>
          </h3>
          <p className="text-sm text-gray-500 hidden md:block mt-0 leading-none p-0 m-0">
            Anything, Anywhere
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-600 hover:text-[#0ac6ae] transition" />
          </button>
        </div>
      </nav>

      <div className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-slate-700 to-slate-800 text-white p-4 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <button className="text-white absolute top-4 right-4 text-xl" onClick={() => setIsSidebarOpen(false)}>×</button>

        <div className="flex flex-col items-center mt-6">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="User"
            className="w-20 h-20 rounded-full border"
          />
          <p className="mt-2 text-lg">{user.name}</p>
          <button className="px-3 py-1 bg-[#0ac6ae] rounded text-sm flex items-center gap-1">
            <Settings className="w-4 h-4" /> Edit Profile
          </button>
        </div>

       <div className="mt-4 space-y-4 text-sm">
  <div
    className="flex items-center gap-2 cursor-pointer hover:text-[#0ac6ae]"
    onClick={() => {
      navigate("/login");
      setIsSidebarOpen(false);
    }}
  >
    <User className="w-5 h-5" /> Home
  </div>

  <div
    className="flex items-center gap-2 cursor-pointer hover:text-[#0ac6ae]"
    onClick={() => {
      navigate("/history");
      setIsSidebarOpen(false);
    }}
  >
    <Clock className="w-5 h-5" /> History
  </div>

  <div
    className="flex items-center gap-2 cursor-pointer hover:text-[#0ac6ae]"
    onClick={() => {
      navigate("/feedback");
      setIsSidebarOpen(false);
    }}
  >
    <MessageSquare className="w-5 h-5" /> Feedback
  </div>

  <div
    className="flex items-center gap-2 cursor-pointer hover:text-red-500"
    onClick={handleLogout}
  >
    <LogOut className="w-5 h-5" /> Logout
  </div>
</div>

      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default UserNav;
