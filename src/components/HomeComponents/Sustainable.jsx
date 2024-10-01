import React from 'react'

export const Sustainable = () => {
  return (
    <div className='w-full lg:w-1/2 mx-auto mb-16'>
        <h1 className='text-[#1b9876] font-poppins font-bold text-center text-[30px] md:text-[40px] mb-4'>learn more about <br/>
        web sustainability?</h1>

        <div className='sustain_card w-full p-6 rounded-lg '>
            <p className='text-[#1b9876] font-roboto font-medium text-center text-[22px] md:text-[26px] mb-4'>join the greenWeb newsletter</p>
            <div className='flex flex-col md:flex-row justify-center items-center my-7'>
                <input  placeholder='y o u r  e ma i l  a d d r e s s' className='font-medium font-poppins text-[16px] md:text[18px] bg-[#ececec]  rounded-full  w-[300px] md:w-[400px] px-4 py-[10px] block text-[#223333]  placeholder:text-[#223333] outline-none focus:outline-blue-200 focus:outline-[4px] focus:bg-white'/>
                
                 <button className='ease-in-out duration-300 font-semibold font-poppins px-6 py-2  rounded-full bg-[#223333] text-white border-[2px] border-white shadow-[0_2px_10px_#223333] hover:bg-[#1b9876] hover:border-[#1b9876] hover:shadow-[0_4px_6px_#1b9876] ms-4 mt-4 md:mt-0'>subscribe</button>
            </div>
            <p className='text-[#7c7c7c] font-normal font-poppins text-[14px] text-center'>The greenWeb team will send you occasional updates on web accessibility and sustainability. There will be no spam, only high-quality information.</p>
        </div>
    </div>
  )
}
