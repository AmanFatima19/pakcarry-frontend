import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false); // Default to login
  const [backendError, setBackendError] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setBackendError("");

    const newErrors = {};
    if (!isForgotPassword) {
      if (isRegister) {
        if (!formData.name.trim()) {
          newErrors.name = "Full name is required";
        } else if (formData.name.trim().length < 4) {
          newErrors.name = "Fullname must be at least 4 characters long";
        }
      }
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!formData.password.trim()) {
        newErrors.password = "Password is required";
      } else if (formData.password.trim().length < 8) {
        newErrors.password = "Password must be at least 8 characters long";
      }
    } else {
      if (!formData.email.trim()) newErrors.email = "Email is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      let response;
      if (isForgotPassword) {
        response = await axios.post("http://localhost:8000/forgot-password", {
          email: formData.email,
        });
        toast.success(response.data.msg);
        setFormData({ ...formData, email: "" });
        setIsForgotPassword(false);
      } else if (isRegister) {
        response = await axios.post("http://localhost:8000/register", formData);
        console.log(response.data);
        toast.success("Registered successfully! Please login.");
        setIsRegister(false);
        setFormData({ name: "", email: "", password: "" });
      } else {
        // Updated logic for login
        response = await axios.post("http://localhost:8000/login", {
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        const userRole = response.data.user.role;
        if (userRole === "admin") {
          navigate("/admin-dashboard");
        } else {
          toast.success("User Logged In Successfully");
          navigate("/user-dashboard");
        }
      }
    } catch (error) {
      if (error.response?.data?.error?.errors) {
        const validationErrors = error.response.data.error.errors;
        const backendErrors = {};
        Object.keys(validationErrors).forEach((key) => {
          backendErrors[key] = validationErrors[key].message;
        });
        setErrors(backendErrors);
      } else {
        setBackendError(error.response?.data?.msg || "Something went wrong");
        toast.error(error.response?.data?.msg || "Something went wrong");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#0ac6ae] md:bg-white lg:bg-white">
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 min-h-screen">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center">
            {isForgotPassword
              ? "Forgot Password"
              : isRegister
              ? "Sign Up"
              : "Login"}
          </h2>

          {!isForgotPassword && (
            <div className="flex justify-center mb-4 mt-6">
              <button
                className={`w-1/2 px-4 py-2 border rounded-l-md ${
                  isRegister
                    ? "bg-[#0ac6ae] text-white font-semibold"
                    : "bg-white"
                }`}
                onClick={() => setIsRegister(true)}
              >
                Register
              </button>
              <button
                className={`w-1/2 px-4 py-2 border rounded-r-md ${
                  !isRegister
                    ? "bg-[#0ac6ae] text-white font-semibold"
                    : "bg-white"
                }`}
                onClick={() => setIsRegister(false)}
              >
                Login
              </button>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {isForgotPassword ? (
              <>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border px-4 py-2 mb-1 mt-4 rounded focus:outline-[#0ac6ae]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </>
            ) : isRegister ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border px-4 py-2 mb-1 mt-3 rounded focus:outline-[#0ac6ae]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
                <div className="my-2"></div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border px-4 py-2 mb-1 rounded focus:outline-[#0ac6ae]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
                <div className="my-2"></div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full border px-4 py-2 mb-1 rounded focus:outline-[#0ac6ae]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </>
            ) : (
              <>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border px-4 py-2 mb-1 mt-4 rounded focus:outline-[#0ac6ae]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
                <div className="my-2"></div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full border px-4 py-2 mb-1 rounded focus:outline-[#0ac6ae]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </>
            )}

            {backendError && (
              <p className="text-red-500 text-sm text-center">{backendError}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#0ac6ae] hover:bg-[#089f8d] transition duration-300 text-white py-2 rounded mt-2"
            >
              {isForgotPassword
                ? "Send Reset Email"
                : isRegister
                ? "Sign Up"
                : "Login"}
            </button>

            {isForgotPassword ? (
              <p className="text-sm mt-2 text-center">
                <span
                  className="text-[#0ac6ae] cursor-pointer"
                  onClick={() => {
                    setIsForgotPassword(false);
                    setIsRegister(false);
                  }}
                >
                  Back to Login
                </span>
              </p>
            ) : isRegister ? (
              <p className="text-sm mt-2 text-center">
                Already have an account?{" "}
                <span
                  className="text-[#0ac6ae] cursor-pointer"
                  onClick={() => setIsRegister(false)}
                >
                  Login
                </span>
              </p>
            ) : (
              <>
                <p className="text-sm mt-2 text-center">
                  <span
                    className="text-[#0ac6ae] cursor-pointer"
                    onClick={() => setIsForgotPassword(true)}
                  >
                    Forgot Password?
                  </span>
                </p>
                <p className="text-sm mt-2 text-center">
                  Don't have an account?{" "}
                  <span
                    className="text-[#0ac6ae] cursor-pointer"
                    onClick={() => setIsRegister(true)}
                  >
                    Sign Up
                  </span>
                </p>
              </>
            )}
          </form>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-[#0ac6ae] text-white items-center justify-center text-center p-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pakistan's First P2P Package <br /> Delivery Platform
          </h2>
          <p className="text-base md:text-lg">
            Connect with verified travelers to send packages across cities at
            affordable rates. Safe, secure, and efficient delivery.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
