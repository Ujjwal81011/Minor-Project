import React from 'react'
import { IoBedOutline } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdGlobe } from "react-icons/io";

export default function Features() {
  return (
    <div className='flex w-full md:px-[200px] px-8 flex-col gap-16 justify-center items-center'>
        <div className='flex flex-col w-full items-center'>
            <span className='text font-semibold text-sky-800 mt-4'>Our Features</span>
            <span className='md:text-3xl text-2xl font-semibold mt-2'>
                Our Priceless Features
            </span>
            <p className='text-center mt-2 max-w-[400px]'>
                We provide good facilities to our consumers as per their needs, and never give a chance for complaint.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full items-center justify-center">
            <div className="bg-sky-100 hover:bg-sky-200 py-4 px-6 flex flex-col items-center justify-center gap-3 md:gap-5 rounded-[10px] transition-all duration-300 min-h-[300px] h-full">
                <IoBedOutline className="text-4xl md:text-5xl text-blue-500" />
                <h1 className="text-lg md:text-xl font-bold text-center italic">Hotels on the House</h1>
                <p className="text-center text-sm md:text-base flex-grow">
                Hotels on the House offers an enticing deal: book a flight and enjoy complimentary hotel stays, creating luxurious and memorable travel experiences without breaking the bank.</p>
            </div>

            <div className="bg-sky-100 hover:bg-sky-200 py-4 px-6 flex flex-col items-center justify-center gap-3 md:gap-5 rounded-[10px] transition-all duration-300 min-h-[300px] h-full">
                <VscWorkspaceTrusted className="text-4xl md:text-5xl text-blue-500" />
                <h1 className="text-lg md:text-xl font-bold text-center italic">Safe to Trust</h1>
                <p className="text-center text-sm md:text-base flex-grow">Choosing reputable flight booking platforms guarantees a safe travel experience, with secure payment options, transparent policies, and dedicated customer support for peace of mind.</p>
            </div>

            <div className="bg-sky-100 hover:bg-sky-200 py-4 px-6 flex flex-col items-center justify-center gap-3 md:gap-5 rounded-[10px] transition-all duration-300 min-h-[300px] h-full">
                <IoMdGlobe className="text-4xl md:text-5xl text-blue-500" />
                <h1 className="text-lg md:text-xl font-bold text-center italic">World Customers</h1>
                <p className="text-center text-sm md:text-base flex-grow">Worldwide customers flock to trusted flight booking platforms, enjoying seamless travel experiences, exclusive deals, and convenient options for unforgettable journeys around the globe.</p>
            </div>
        </div>
    </div>
  )
}