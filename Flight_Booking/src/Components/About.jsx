import React from 'react'
import image from '../assets/Aero.avif';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function About() {
  return (
    <div className='w-full lg:px-[150px] md:px-[100px] px-8 flex lg:flex-row flex-col items-center justify-between py-10 lg:gap-20 md:gap-16 gap-10'>
      <div className='lg:w-[450px] lg:h-[450px] md:w-[400px] md:h-[400px] w-[270px] h-[270px] bg-no-repeat bg-cover'>
        <img src={image} alt="/" className='rounded-full'/>
      </div>

      <div className='flex flex-col lg:w-[48%] md:w-[50%] w-full md:px-0 px-4'>
        <h1 className='text-xl lg:text-2xl text-blue-500 font-semibold'>ABOUT US</h1>
        <span className='text-[24px] lg:text-[34px] font-medium text-gray-700 mt-1'>
          We Are Here To Bring You All The <br /> Comfort And Pleasure 
        </span>
        <p className='text-gray-700 max-w-[650px] leading-7 mt-5 text-base lg:text-lg'>
        We are a trusted flight booking platform offering affordable fares, seamless reservations, and personalized travel experiences to destinations worldwide.
        </p>

        <div className='flex flex-col gap-3 mt-5'>
          <div className='flex items-center gap-3'>
            <IoCheckmarkCircleOutline className='text-blue-400 lg:text-2xl md:text-xl text-5xl'/>
            <span className='text-base lg:text-lg'>Best Price Guarantee: Enjoy competitive fares with no hidden fees.
            </span>
          </div>
        </div>

        <div className='flex flex-col gap-3 mt-5'>
          <div className='flex items-center gap-3'>
            <IoCheckmarkCircleOutline className='text-blue-400 lg:text-2xl md:text-xl text-5xl'/>
            <span className='text-base lg:text-lg'>24/7 Customer Support: We're here to assist you anytime, anywhere.
            </span>
          </div>
        </div>

        <div className='flex flex-col gap-3 mt-5'>
          <div className='flex items-center gap-3'>
            <IoCheckmarkCircleOutline className='text-blue-400 lg:text-2xl md:text-xl text-5xl'/>
            <span className='text-base lg:text-lg'>Exclusive Deals: Unlock special offers and discounts on every booking.
            </span>
          </div>
        </div>

        <div className='flex flex-col gap-3 mt-5'>
          <div className='flex items-center gap-3'>
            <IoCheckmarkCircleOutline className='text-blue-400 lg:text-2xl md:text-xl text-5xl'/>
            <span className='text-base lg:text-lg'>Easy Booking Process: Quick, seamless reservations with a user-friendly interface.
            </span>
          </div>
        </div>

        <button className='bg-blue-600 rounded-full px-6 py-3 text-white font-semibold w-[200px] mt-12 shadow-md hover:bg-blue-700'>
          Discover More
        </button>
      </div>
    </div>
  )
}

export default About