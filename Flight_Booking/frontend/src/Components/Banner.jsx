import React from 'react'
import image from "../assets/sky.jpg"

function Banner() {
  return (
    <div className='w-full md:h-[400px] h-[460px] my-15 bg-fixed bg-cover relative'>
    <img src={image} alt="Sky" className="absolute w-full h-full object-cover" />
    <div className='absolute inset-0 bg-black bg-opacity-50 z-10'></div>
    <div className='relative z-20 w-full h-full flex flex-col items-center justify-center text-center p-5'>
        <h1 className='text-white font-semibold text-2xl md:text-[55px] lg:text-[60px] xl:text-[70px] text-shadow'>
            It's Time To Enjoy Your Freedom!
        </h1>
        {/* Increased margin-top for more space between heading and input */}
        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:mt-36 mt-8'>
            <input
                type="text"
                placeholder='Email Address'
                className='md:w-[500px] w-full border border-slate-400 outline-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 transition duration-300'
            />
            <button className='bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg py-3 px-6 transition duration-300 hover:from-blue-500 hover:to-blue-400'>
                Join Our Newsletter
            </button>
        </div>
    </div>
</div>

  )
}

export default Banner