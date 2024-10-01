import React from 'react'
import { IoIosArrowUp } from "react-icons/io";

export const TextSection = ({textData,buttonShow}) => {
  return (
<div className='w-4/5  text-center lg:w-1/2 mx-auto py-24'>
    <p className='leading-10 font-light font-roboto text-[16px] md:text-[20px] lg:text-[26px] text-[#233]'>{textData}</p>
    {buttonShow && <button className='ease-in-out duration-300 font-semibold font-poppins px-8 py-2 mt-4 rounded-full bg-[#223333] text-white border-[2px] border-white shadow-[0_2px_10px_#223333] hover:bg-[#1b9876] hover:border-[#1b9876] hover:shadow-[0_4px_6px_#1b9876] '><IoIosArrowUp className='inline mb-[2px] font-bold'  size={25}/>test now</button>}
</div>
  )
}
