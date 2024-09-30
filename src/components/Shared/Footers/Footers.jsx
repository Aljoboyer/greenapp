import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";

const Footers = () => {
  return (
    <div className='w-full pb-10'>
      <div className='flex flex-row justify-between items-center'>
          <div className='h-[2px] w-2/6	 bg-[#1b9876] '></div>
          <div className='flex flex-col md:flex-row justify-between items-center w-2/6	'>
              <p className='cursor-pointer font-normal font-poppins text-[#1b9876] hover:text-gray-300 ease-in-out duration-300 ml-4'>Sustainable Websites</p>
              <p className='cursor-pointer font-normal font-poppins text-[#1b9876] hover:text-gray-300 ease-in-out duration-300 '>Blog</p>
              <p className='cursor-pointer font-normal font-poppins text-[#1b9876] hover:text-gray-300 ease-in-out duration-300 mx-4'>Contact Us</p>
          </div>
          <div className='h-[2px] w-2/6	 bg-[#1b9876] '></div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center px-10 py-6'>
          <div className='w-full md:w-2/6 text-center md:text-start'>
          <p className='cursor-pointer font-normal font-poppins text-[#1b9876] ease-in-out duration-300 mx-4'>Contact Us:</p>
            <p className='cursor-pointer font-normal font-poppins ease-in-out duration-300 mx-4 hover:underline'><CiMail className='inline mr-2' size={22}/>
            contact@everythinggreen.org</p>
          </div>

          <div className='w-full md:w-2/6 text-center md:text-start my-4 md:my-0'>
            <p className='cursor-pointer font-normal font-poppins  ease-in-out duration-300 mx-4 hover:underline'>
            Privacy Policy<FaLinkedin className='inline ml-4'color='blue'/></p>
          </div>

          <div className='w-full md:w-2/6'>
          <p className='cursor-pointer font-normal font-poppins text-[#1b9876]  ease-in-out duration-300 mx-4 text-center'>Address:</p>
            <p className='cursor-pointer font-normal font-poppins ease-in-out duration-300 mx-4 hover:underline text-center'>China Hong Kong City Block 3, Room 1203,12th Floor, 33 Canton Rd, Tsim Sha Tsui, Hong Kong</p>
          </div>
      </div>
    </div>
  )
}

export default Footers;