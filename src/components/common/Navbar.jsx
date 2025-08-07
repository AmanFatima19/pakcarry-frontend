import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white text-black shadow-md z-50 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex-1 flex justify-center py-2">
        <Link
          to="/"
          className="text-3xl font-bold font-orbitron text-decoration-none"
        >
          <span className="text-[#0ac6ae]">Pak</span>
          <span className="logo-carry">Carry</span>
        </Link>
      </div>

      <nav className="hidden md:flex justify-center space-x-6 text-lg py-2">
        <Link to="/" className="hover:text-gray-800 links">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-400 links">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-400 links">
          Contact
        </Link>
        <Link to="/feedback" className="hover:text-gray-400 links">
          Feedback
        </Link>
      </nav>

      <button
        className="md:hidden absolute top-4 right-6 text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav
        className={`md:hidden flex flex-col items-center bg-white w-full py-4 space-y-4 text-lg ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="text-black no-underline hover:text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-black no-underline hover:text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-black no-underline hover:text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
        <Link
          to="/feedback"
          className="text-black no-underline hover:text-gray-700"
          onClick={() => setMenuOpen(false)}
        >
          Feedback
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
