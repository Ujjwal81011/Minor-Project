import React from 'react'

function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-6 lg:p-8">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 sm:mb-8 text-blue-700">
        Sign In
    </h1>

    <div className="w-full max-w-sm sm:max-w-md space-y-4 sm:space-y-6 bg-white p-6 sm:p-8 rounded-lg shadow-lg">

        <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm sm:text-base md:text-lg text-gray-700">
                Email
            </label>
            <input
                type="text"
                id="email"
                className="bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:border-blue-500 transition duration-200 border border-gray-300 rounded-lg p-2 sm:p-3"
                placeholder="Enter your email"
            />
        </div>

        <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm sm:text-base md:text-lg text-gray-700">
                Password
            </label>
            <input
                type="password"
                id="password"
                className="bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:border-blue-500 transition duration-200 border border-gray-300 rounded-lg p-2 sm:p-3"
                placeholder="Enter your password"
            />
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 sm:py-3 rounded-full transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 sm:mt-6">
            Sign In
        </button>

        <a href="#" className="text-blue-500 text-center flex items-center justify-center mt-4 hover:underline">
            Register now
        </a>

    </div>
</div>


  )
}

export default SignIn