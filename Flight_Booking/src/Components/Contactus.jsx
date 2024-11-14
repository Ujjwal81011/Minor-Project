import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const reset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormData:", formData);
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-blue-700">Contact Us</h1>
      <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-lg text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:border-blue-500 transition duration-200 border border-gray-300 rounded-lg p-3"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-lg text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:border-blue-500 transition duration-200 border border-gray-300 rounded-lg p-3"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-lg text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:border-blue-500 transition duration-200 border border-gray-300 rounded-lg p-3"
            placeholder="Enter your message"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
