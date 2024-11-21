import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Reset form fields and errors
  const reset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    reset(); // Clear the form immediately after submission
    try {
      await axios.post("/api/v1/contact", formData);
      toast.success("Form submitted successfully! We'll get back to you soon.");
    } catch (error) {
      const responseErrors = error.response?.data?.errors || {};
      setErrors(responseErrors);
      toast.error(
        responseErrors.general || "Submission Unsuccessful",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-5">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-blue-600">
        Get in Touch
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 space-y-6"
      >
        {/** Input Field Component */}
        {["name", "email", "message"].map((field, idx) => (
          <div className="flex flex-col" key={idx}>
            <label htmlFor={field} className="mb-2 text-sm font-medium text-gray-700 capitalize">
              {field}
            </label>
            {field === "message" ? (
              <textarea
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition border border-gray-300 rounded-lg px-4 py-2 h-28"
                placeholder={`Your ${field}`}
              />
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition border border-gray-300 rounded-lg px-4 py-2"
                placeholder={`Your ${field}`}
              />
            )}
            {errors[field] && <span className="text-red-500 text-xs mt-1">{errors[field]}</span>}
          </div>
        ))}

        {/** General Error */}
        {errors.general && <p className="text-red-500 text-sm text-center">{errors.general}</p>}

        {/** Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
