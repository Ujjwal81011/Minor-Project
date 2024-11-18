import React from 'react'
import plane1 from "../assets/Charter.jpg"
import plane2 from "../assets/Helicopter.webp"
import plane3 from "../assets/Private plane.jpg"
import { IoIosStar } from "react-icons/io";
import { FaPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Plans() {
  return (
    <div className="flex w-full pt-10 pb-20 px-4 sm:px-10 md:px-16 flex-col gap-16 justify-center items-center bg-gray-50">
    <div className="flex flex-col w-full items-center text-center">
        <span className="font-semibold text-blue-600 text-lg sm:text-xl md:text-2xl">Our Plans</span>
        <span className="font-bold text-3xl text-gray-800 mt-1">Flights For Everyone</span>
        <p className="text-center max-w-lg sm:max-w-xl mt-4 text-sm sm:text-base md:text-lg">
            Discover the perfect travel experience with our exclusive flight options tailored for everyone.
        </p>
    </div>

    {/* Responsive Grid Layout for Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <img src={plane1} alt="Private Charter Jet" className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 transform hover:scale-105" />
            <div className="flex items-center mt-3">
                <h1 className="font-semibold text-lg sm:text-xl text-gray-800">Private Charter</h1>
                <div className="flex items-center ml-2">
                    {[...Array(5)].map((_, index) => (
                        <IoIosStar key={index} className='text-xl text-blue-500' />
                    ))}
                </div>
            </div>
            <h2 className='text-gray-500 text-md mt-1 px-4'>Charter B1732</h2>
            <p className="text-gray-600 text-md mt-2 px-4 text-center">Book a private charter for personalized, luxurious travel. Enjoy flexible schedules, ultimate privacy, and total comfort.</p>
            <h1 className='text-2xl font-bold mt-3'>
                <span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>$370 </span>/Hour
            </h1>
            <Link to={"/book"}>
                <button className='bg-blue-600 text-white rounded-full px-6 py-2 mt-3 hover:bg-blue-700 flex items-center justify-center transition-colors duration-200'>
                    <FaPlane className='mt-1 text-2xl mx-2' />Book Now
                </button>
            </Link>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <img src={plane2} alt="Helicopter" className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 transform hover:scale-105" />
            <div className="flex items-center mt-3">
                <h1 className="font-semibold text-lg sm:text-xl text-gray-800">Helicopter Booking</h1>
                <div className="flex items-center ml-2">
                    {[...Array(5)].map((_, index) => (
                        <IoIosStar key={index} className='text-xl text-blue-500' />
                    ))}
                </div>
            </div>
            <h2 className='text-gray-500 text-md mt-1 px-4'>Charter B1732</h2>
            <p className="text-gray-600 text-md mt-2 px-4 text-center">Helicopter booking provides quick, flexible travel for short distances. It offers stunning views, privacy, and a convenient way to avoid traffic.</p>
            <h1 className='text-2xl font-bold mt-3'>
                <span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>$270 </span>/Hour
            </h1>
            <Link to={"/book"}>
                <button className='bg-blue-600 text-white rounded-full px-6 py-2 mt-3 hover:bg-blue-700 flex items-center justify-center transition-colors duration-200'>
                    <FaPlane className='mt-1 text-2xl mx-2' />Book Now
                </button>
            </Link>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <img src={plane3} alt="Private Plane" className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 transform hover:scale-105" />
            <div className="flex items-center mt-3">
                <h1 className="font-semibold text-lg sm:text-xl text-gray-800">Private Plane</h1>
                <div className="flex items-center ml-2">
                    {[...Array(5)].map((_, index) => (
                        <IoIosStar key={index} className='text-xl text-blue-500' />
                    ))}
                </div>
            </div>
            <h2 className='text-gray-500 text-md mt-1 px-4'>Charter B1732</h2>
            <p className="text-gray-600 text-md mt-2 px-4 text-center">A private plane offers flexible travel, letting you fly on your schedule with complete privacy, comfort, and personalized service.</p>
            <h1 className='text-2xl font-bold mt-3'>
                <span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>$320 </span>/Hour
            </h1>
            <Link to={"/book"}>
                <button className='bg-blue-600 text-white rounded-full px-6 py-2 mt-3 hover:bg-blue-700 flex items-center justify-center transition-colors duration-200'>
                    <FaPlane className='mt-1 text-2xl mx-2' />Book Now
                </button>
            </Link>
        </div>
    </div>
</div>
    
  )
}
export default Plans