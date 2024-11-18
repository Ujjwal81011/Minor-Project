import React from "react";
import image from "../assets/Support.jpg";

const Support = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-6 sm:p-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-800">
          Welcome to Cleartrip Support
        </h1>
        <p className="text-gray-600 text-lg">
          Find answers to all your queries, call us at{" "}
          <span className="font-medium text-blue-600">+91 9305981011</span>
        </p>
        <div className="flex justify-center mt-6 space-x-6 text-gray-500">
          <span className="text-3xl hover:text-blue-500 transition">✈️</span>
          <span className="text-3xl hover:text-blue-500 transition">🏨</span>
          <span className="text-3xl hover:text-blue-500 transition">🚌</span>
          <span className="text-3xl hover:text-blue-500 transition">🚆</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* Booking Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Want to know about your bookings? Help us find your trips
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Provide your Trip ID to check the details of your bookings.
            </p>
            <form>
              <div className="mb-5">
                <label
                  htmlFor="tripId"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Trip ID
                </label>
                <input
                  type="text"
                  id="tripId"
                  placeholder="Enter Trip ID"
                  className="block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-sm px-4 py-3"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="otp"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  6 digit OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  placeholder="Enter the OTP received"
                  className="block w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-sm px-4 py-3"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Get OTP
              </button>
            </form>
            <p className="mt-5 text-gray-600 text-sm">
              Have an account?{" "}
              <a
                href="#signin"
                className="text-blue-500 font-medium hover:underline"
              >
                Sign in
              </a>{" "}
              to fetch your trips.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <ul className="space-y-5">
              <li>
                <a
                  href="#"
                  className="text-blue-500 font-medium hover:underline"
                >
                  How do I cancel a flight?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 font-medium hover:underline"
                >
                  How do I make changes to a flight reservation?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-500 font-medium hover:underline"
                >
                  Click here for Hotel FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Fetch Your Trips */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Fetch your trips to:
            </h3>
            <ul className="text-sm text-gray-600 space-y-3">
              <li>✅ Check your trip details</li>
              <li>✅ Cancel your trip</li>
              <li>✅ Amend your flights</li>
              <li>✅ Print E-ticket</li>
              <li>✅ and more...</li>
            </ul>
          </div>

          {/* Mobile App Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Plan your vacation and book hotels
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Book hotels in over 15,000 locations worldwide.
            </p>
            <img
              src={image}
              alt="Mobile App"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
