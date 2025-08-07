import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 opacity-50"></div>

      <div
        className="relative top-18 text-center text-white px-6"
        style={{ lineHeight: "1.0" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontWeight: "600", fontSize: "45px" }}
        >
          SEND PACKAGES ACROSS PAKISTAN
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-medium mt-2"
        >
          SAFELY & AFFORDABLY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg mt-4"
        >
          A platform where people can connect with travellers from any city of{" "}
          <br />
          the pakistan to send and receive packages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6"
        >
          <Link
            to="/login"
            className="bg-[#0ac6ae] text-white px-8 py-3 text-lg font-semibold hover:bg-[#089f8d] transition-all duration-300 underline mt-6"
            style={{ borderRadius: "10px" }}
          >
            Login/Register
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
