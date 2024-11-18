import React from 'react'

function Footer() {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-10 border border-gray-300'>
    <span className='text-sm md:text-base text-gray-600'>
        Copyright &copy; 2024 Luxury Airs. All rights reserved.
    </span>
    <div className='flex flex-col md:flex-row gap-4 md:gap-6 mt-6 md:mt-0'>
        <a href="#" className='font-medium text-gray-600 hover:text-blue-500 text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] whitespace-nowrap'>
            Terms and Conditions
        </a>
        <a href="#" className='font-medium text-gray-600 hover:text-blue-500 text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] whitespace-nowrap'>
            Long Term Contracts
        </a>
        <a href="#" className='font-medium text-gray-600 hover:text-blue-500 text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] whitespace-nowrap'>
            Copyright Policy
        </a>
        <a href="#" className='font-medium text-gray-600 hover:text-blue-500 text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] whitespace-nowrap'>
            Customer Support
        </a>
    </div>
</div>
  )
}
export default Footer