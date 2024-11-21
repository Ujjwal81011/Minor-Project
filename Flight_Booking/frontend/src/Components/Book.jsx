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
    date: "",
    destination: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      aadhar: "",
      date: "",
      destination: "",
    });
    setErrors({});
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email || !emailValidator.validate(formData.email))
      formErrors.email = "Invalid email.";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      formErrors.phone = "Phone number must be 10 digits.";
    if (!formData.aadhar || !/^\d{12}$/.test(formData.aadhar))
      formErrors.aadhar = "Aadhar number must be 12 digits.";
    if (!formData.date) formErrors.date = "Booking date is required.";
    if (!formData.destination)
      formErrors.destination = "Destination is required.";
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/v1/booking", formData);
      toast.success("Booking added successfully!");
      resetForm();
    } catch (error) {
      console.error("Booking failed:", error.message);
      toast.error("Failed to add booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-blue-50 text-gray-900">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">
        Book Your Flight and Enjoy Your Journey!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 space-y-6 w-full max-w-md sm:max-w-lg lg:max-w-xl"
      >
        {[
          {
            label: "Name",
            type: "text",
            name: "name",
            placeholder: "Full name",
          },
          {
            label: "Email",
            type: "email",
            name: "email",
            placeholder: "Email ID",
          },
          {
            label: "Phone No.",
            type: "tel",
            name: "phone",
            placeholder: "10-digit phone number",
          },
          {
            label: "Aadhar No.",
            type: "text",
            name: "aadhar",
            placeholder: "12-digit Aadhar number",
          },
          { label: "Booking Date", type: "date", name: "date" },
        ].map(({ label, type, name, placeholder }) => (
          <div key={name} className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-2">
              {label}
            </label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors[name] && (
              <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
            )}
          </div>
        ))}

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-2">
            Destination
          </label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Select a destination</option>
            <option value="paris">Paris</option>
            <option value="tokyo">Tokyo</option>
            <option value="sydney">Sydney</option>
            <option value="goa">Goa</option>
            <option value="mumbai">Mumbai</option>
            <option value="switzerland">Switzerland</option>
          </select>
          {errors.destination && (
            <p className="text-red-500 text-sm mt-1">{errors.destination}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Processing..." : "Proceed to Payment"}
        </button>
      </form>
    </div>
  );
}

export default Book;
