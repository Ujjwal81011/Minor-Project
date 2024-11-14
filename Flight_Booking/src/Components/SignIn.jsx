import React from 'react'

function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
    <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-blue-700">Sign In</h1>
    
    <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
        
        <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-lg text-gray-700">Email</label>
            <input
                type="text"
                id="email"
                className="bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:border-blue-500 transition duration-200 border border-gray-300 rounded-lg p-3"
                placeholder="Enter your email"
            />
        </div>

        <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-lg text-gray-700">Password</label>
            <input
                type="password"
                id="password"
                className="bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:border-blue-500 transition duration-200 border border-gray-300 rounded-lg p-3"
                placeholder="Enter your password"
            />
        </div>
        
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-full transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6">
            Sign In
        </button>
        
    </div>
</div>

  )
}

export default SignIn