import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0ac6ae] text-white pt-10 mt-16">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold px-10 lg:px-0 md:px-0">PakCarry</h2>
          <p
            className="mt-2 px-10 lg:px-0 md:px-0"
            style={{ fontSize: "16px" }}
          >
            Welcome to PakCarry, the peer-to-peer delivery platform
            revolutionizing logistics by connecting travelers with parcel
            senders securely.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3 pl-7">Get In Touch</h3>
          <ul className="space-y-2" style={{ fontSize: "16px" }}>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Allam Iqbal Town,LHR
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" /> +92 3456789021
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" /> info@pakcarry.com
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3 pl-7">Useful Links</h3>
          <ul className="space-y-2 " style={{ fontSize: "16px" }}>
            <li>
              <a href="/" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/feedback" className="text-white">
                Feedback
              </a>
            </li>
            <li>
              <a href="/about" className="text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/faq" className="text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Prohibited Items List
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Protection Plan
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="mt-8 text-center py-3"
        style={{ backgroundColor: "black" }}
      >
        <p className="text-sm">
          &copy; {new Date().getFullYear()}, All rights reserved by PakCarry.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
