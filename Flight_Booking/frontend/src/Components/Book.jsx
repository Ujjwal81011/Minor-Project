import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import emailValidator from "email-validator";

function Book() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    aadhar: "",
    destination: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      aadhar: "",
      destination: "",
    });
    setErrors({});
  };

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email || !emailValidator.validate(formData.email))
      formErrors.email = "Invalid email.";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      formErrors.phone = "Phone number must be 10 digits.";
    if (!formData.aadhar || !/^\d{12}$/.test(formData.aadhar))
      formErrors.aadhar = "Aadhar number must be 12 digits.";
    if (!formData.destination)
      formErrors.destination = "Destination is required.";
    return formErrors;
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
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setLoading(true);
    console.log("FormData:", formData);
    try {
      const response = await axios.post("/api/v1/booking", formData);
      toast.success("Booking added successfully!");
      resetForm();
    } catch (error) {
      console.error("Failed to add booking:", error.message);
      toast.error("Failed to add booking");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 text-gray-900 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      {" "}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
        {" "}
        Book Your Flight and Enjoy Your Journey!{" "}
      </h1>{" "}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md lg:max-w-lg space-y-6"
      >
        {" "}
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          {" "}
          <label className="block text-sm font-medium text-gray-700 md:w-1/3">
            {" "}
            Name:{" "}
          </label>{" "}
          <input
            type="text"
            name="name"
            placeholder="Please enter your full name"
            className="w-full md:w-2/3 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
          />{" "}
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}{" "}
        </div>{" "}
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          {" "}
          <label className="block text-sm font-medium text-gray-700 md:w-1/3">
            {" "}
            Email:{" "}
          </label>{" "}
          <input
            type="email"
            name="email"
            placeholder="Please enter your Email ID"
            className="w-full md:w-2/3 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />{" "}
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}{" "}
        </div>{" "}
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          {" "}
          <label className="block text-sm font-medium text-gray-700 md:w-1/3">
            {" "}
            Phone No.:{" "}
          </label>{" "}
          <input
            type="tel"
            name="phone"
            placeholder="Please enter your contact number"
            className="w-full md:w-2/3 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.phone}
            onChange={handleChange}
          />{" "}
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}{" "}
        </div>{" "}
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          {" "}
          <label className="block text-sm font-medium text-gray-700 md:w-1/3">
            {" "}
            Aadhar No.:{" "}
          </label>{" "}
          <input
            type="text"
            name="aadhar"
            placeholder="Please enter your Aadhar No."
            className="w-full md:w-2/3 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.aadhar}
            onChange={handleChange}
          />{" "}
          {errors.aadhar && (
            <p className="text-red-500 text-sm">{errors.aadhar}</p>
          )}{" "}
        </div>{" "}
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          {" "}
          <label
            className="block text-sm font-medium text-gray-700 md:w-1/3"
            htmlFor="destination"
          >
            {" "}
            Choose your destination:{" "}
          </label>{" "}
          <select
            id="destination"
            name="destination"
            className="w-full md:w-2/3 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formData.destination}
            onChange={handleChange}
          >
            {" "}
            <option value="None">None</option>{" "}
            <option value="paris">Paris</option>{" "}
            <option value="tokyo">Tokyo</option>{" "}
            <option value="sydney">Sydney</option>{" "}
            <option value="goa">Goa</option>{" "}
            <option value="mumbai">Mumbai</option>{" "}
            <option value="Switzerland">Switzerland</option>{" "}
          </select>{" "}
          {errors.destination && (
            <p className="text-red-500 text-sm">{errors.destination}</p>
          )}{" "}
        </div>{" "}
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {" "}
          {loading ? "Processing..." : "Proceed to Payment"}{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
}

export default Book;
