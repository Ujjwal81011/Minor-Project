import React from 'react'
import china from "../assets/chaina.jpg"
import india from "../assets/india.jpg"
import usa from "../assets/USA.jpg"

function Blog() {
  return (
<div className='flex flex-col w-full pb-20 md:px-32 px-8 gap-16 justify-center items-center mt-5'>
  {/* Blog Header Section */}
  <div className='flex flex-col w-full text-center items-center'>
    <span className='font-semibold text-blue-500 text-lg md:text-xl lg:text-2xl'>Our Blog</span>
    <span className='font-bold text-slate-700 text-3xl md:text-4xl lg:text-5xl mt-2'>Our Latest Posts</span>
    <p className='text-slate-500 mt-4 max-w-2xl'>
      Discover unbeatable flight deals and a seamless booking experience. Plan your next adventure with ease today!
    </p>
  </div>

  {/* Blog Posts Section */}
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-7xl px-4 lg:px-0 mx-auto'>
    {/* India Section */}
    <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
      <img src={india} alt="India" className='w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300' />
      <h1 className='text-slate-700 text-xl font-bold mt-4'>India</h1>
      <p className='text-slate-500 text-center mt-2 px-4'>Indira Gandhi International Airport, New Delhi, is a world-class hub offering modern amenities, efficient services, and seamless connectivity.</p>
      <span className='text-blue-600 text-lg font-semibold mt-4'>Top Customers from India</span>
      <h1 className='text-slate-800 text-md mt-2 font-semibold'>Narendra Modi</h1>
    </div>

    {/* China Section */}
    <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
      <img src={china} alt="China" className='w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300' />
      <h1 className='text-slate-700 text-xl font-bold mt-4'>China</h1>
      <p className='text-slate-500 text-center mt-2 px-4'>Beijing Capital International Airport is China's busiest hub, offering top-tier services, modern facilities, and extensive global connectivity.</p>
      <span className='text-blue-600 text-lg font-semibold mt-4'>Top Customers from China</span>
      <h1 className='text-slate-800 text-md mt-2 font-semibold'>Xi Jinping</h1>
    </div>

    {/* USA Section */}
    <div className='flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
      <img src={usa} alt="USA" className='w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300' />
      <h1 className='text-slate-700 text-xl font-bold mt-4'>USA</h1>
      <p className='text-slate-500 text-center mt-2 px-4'>Los Angeles International Airport (LAX) is a major U.S. gateway, providing world-class amenities, vast airline choices, and global connectivity.</p>
      <span className='text-blue-600 text-lg font-semibold mt-4'>Top Customers from USA</span>
      <h1 className='text-slate-800 text-md mt-2 font-semibold'>Donald Trump</h1>
    </div>
  </div>
</div> 

  )
}

export default Blog