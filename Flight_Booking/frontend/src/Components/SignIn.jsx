import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function SignIn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    setError({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formValid = true;
    let errors = {};

    if (!formData.name) {
      formValid = false;
      errors.name = "Name is required";
    }
    if (!formData.email) {
      formValid = false;
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formValid = false;
      errors.email = "Email is invalid";
    }
    if (!formData.password) {
      formValid = false;
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formValid = false;
      errors.password = "Password must be at least 6 characters";
    }

    setError(errors);
    return formValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {
      console.log("Submit :", formData);
      const response = await axios.post("/api/v1/register", formData);
      toast.success("User registered successfully!");
      resetForm();
    } catch (error) {
      console.log("Error :", error.message);
      toast.error("User Already Exists!");

      const errorData = "User Already Exists!!";
      setError(errorData.errors || { general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-blue-50 p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 sm:mb-8 text-blue-700">
        Sign In
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm sm:max-w-md space-y-4 sm:space-y-6 bg-white p-6 sm:p-8 rounded-lg shadow-lg"
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-2 text-sm sm:text-base md:text-lg text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:border-blue-500 transition duration-200 border border-gray-300 rounded-lg p-2 sm:p-3"
            placeholder="Name"
          />
          {error.name && (
            <span className="text-red-500 text-sm">{error.name}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 text-sm sm:text-base md:text-lg text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:border-blue-500 transition duration-200 border border-gray-300 rounded-lg p-2 sm:p-3"
            placeholder="Enter your email"
          />
          {error.email && (
            <span className="text-red-500 text-sm">{error.email}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-2 text-sm sm:text-base md:text-lg text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:border-blue-500 transition duration-200 border border-gray-300 rounded-lg p-2 sm:p-3"
            placeholder="Enter your password"
          />
          {error.password && (
            <span className="text-red-500 text-sm">{error.password}</span>
          )}
        </div>

        {error.general && (
          <div className="text-red-500 text-sm text-center">
            {error.general}
          </div>
        )}

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 sm:py-3 rounded-full transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 sm:mt-6"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <a
          href="/Register"
          className="text-blue-500 text-center flex items-center justify-center mt-4 hover:underline"
        >
          Register now
        </a>
      </form>
    </div>
  );
}

export default SignIn;
