import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios"
import { useNavigate } from "react-router-dom";
function ContactInfo() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const [users, setUsers] = useState([]);
  function changeHandler(e) {
   
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserData({ ...userData, [name]: value });
  }

 async function submitHandler(e) {
  e.preventDefault();
  setErrors({})
 try{
      const response = await axios.post("http://localhost:3000/contact", userData);
      if (response.status === 200) {
        toast.success("Message sent successfully");
        setUserData({
          name: "",
          email: "",
          message: "",
        });
        navigate("/")
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
  if (error.response?.data?.errors) {
    setErrors(error.response.data.errors); 
  } else {
    // toast.error(error.response?.data?.msg);
    toast.error("Something went wrong")
  }
}
 }
  return (
    <>
      <section className="text-gray-600 body-font relative top-20">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden p-6 flex items-end justify-start relative">
           
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.141071669342!2d74.4230593739818!3d31.520285147149107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f9c663e93e7%3A0xa30d716a19044478!2sAirport%20Rd%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1753640069281!5m2!1sen!2s" width="100%" height="100%" 
              className="absolute inset-0"
              title="map"
             style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div className="bg-white relative top-5 flex flex-wrap py-2 rounded shadow-md w-[90%] mx-auto">
              <div className="lg:w-1/2 px-6">
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  ADDRESS
                </h2>
                <p className="mt-1">Airport Road,Lahore</p>
              </div>
              <div className="lg:w-1/2 px-6 lg:mt-0">
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  EMAIL
                </h2>
                <a className="mt-1" style={{ color: "#0ac6ae" }}>
                  infopakcarry@gmail.com
                </a>
                <h2
                  className="mt-4"
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  PHONE
                </h2>
                <p className="mt-2">03224010765</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={submitHandler}
            className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 pl-20"
          >
            <h2 className="text-lg mb-3 font-medium title-font text-black">
              Contact Us
            </h2>
            <div className="relative">
              <label for="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={changeHandler}
                className="w-full bg-white rounded border border-gray-300 focus:outline-[#0ac6ae] text-gray-700 py-1 px-3"
              />
               {errors.name && (
    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
    
  )}
  <div className="mb-2"></div>
            </div>
            <div className="relative">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={changeHandler}
                className="w-full bg-white rounded border border-gray-300 focus:outline-[#0ac6ae] py-1 px-3"
              />
                {errors.email && (
    <p className="text-red-600 text-sm mt-1">{errors.email}</p>)}
    <div className="mb-2"></div>
            </div>
            <div className="relative mb-2">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={userData.message}
                onChange={changeHandler}
                className="w-full bg-white rounded border border-gray-300 focus:outline-[#0ac6ae] h-32 text-base text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
               {errors.message && (
    <p className="text-red-600 text-sm mt-1">{errors.message}</p>
  )}
  <div className="mb-2"></div>
            </div>
            <button
              type="submit"
              className="text-white bg-[#0ac6ae] border-0 py-2 px-5 rounded text-lg"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactInfo;
