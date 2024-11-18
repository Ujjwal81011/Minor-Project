import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const reset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/v1/contact", formData);
      console.log("Form submitted successfully:", response.data);
      toast.success("Form submitted successfully! We'll get back to you soon.");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error.message);
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || { general: error.response.data.message });
      } else {
        toast.error(
          "An error occurred while submitting the form. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-blue-700">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-lg text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:border-blue-500 transition duration-200 border border-gray-300 rounded-lg p-3"
            placeholder="Enter your name"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-lg text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:border-blue-500 transition duration-200 border border-gray-300 rounded-lg p-3"
            placeholder="Enter your email"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-lg text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:border-blue-500 transition duration-200 border border-gray-300 rounded-lg p-3"
            placeholder="Enter your message"
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>
        {errors.general && <span className="text-red-500 text-sm text-center">{errors.general}</span>}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
