import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ onSwitchToLogin }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle signup logic here
    alert(`Signing up with Email: ${email}, Full Name: ${fullName}`);
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center text-[#0ac6ae]">
        Register
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block mb-2 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-3"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-3"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-3"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-2 font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-3"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#0ac6ae] text-white py-3 rounded hover:bg-[#089f8d] transition"
        >
          Register
        </button>
      </form>
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="text-gray-600 underline hover:text-gray-800"
        >
          Back to Home
        </button>
        <p className="text-center">
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-[#0ac6ae] underline hover:text-[#089f8d]"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
