import React from 'react'

function Book() {
  return (
    <div className="flex flex-col items-center p-6 text-gray-900 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
        Book Your Flight and Enjoy Your Journey!
    </h1>
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md lg:max-w-lg space-y-6">
        
        <label className="block text-sm font-medium text-gray-700">Email:</label>
        <input
            type="email"
            placeholder="Please enter your Email ID"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        
        <label className="block text-sm font-medium text-gray-700">Phone No.:</label>
        <input
            type="tel"
            placeholder="Please enter your contact number"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <label className="block text-sm font-medium text-gray-700" htmlFor="destination">
            Choose your destination:
        </label>
        <select
            id="destination"
            name="destination"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="select your destination"
        >
            <option value="None">None</option>
            <option value="paris">Paris</option>
            <option value="tokyo">Tokyo</option>
            <option value="sydney">Sydney</option>
            <option value="goa">Goa</option>
            <option value="mumbai">Mumbai</option>
            <option value="Switzerland">Switzerland</option>
        </select>
        <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all">
            Proceed to Payment
        </button>
    </div>
</div>


  )
}

export default Book