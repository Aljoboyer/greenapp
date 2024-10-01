import React from 'react'
import GreenLogo from '../../assets/greenimg.png'

export const Claim = () => {
  return (
    <div className='w-full lg:w-4/6	 mx-auto mb-20 claim_card text-center cursor-pointer'>
       <div className='bg-[#1b9876] px-4 py-2 rounded-t-lg'>
            <h1 className='text-white font-roboto font-semibold text-center text-[20px] md:text-[30px] mb-4'>claim and download your greenWeb certificate</h1>
       </div>
       <div className='p-6'>
       <img src={GreenLogo} className='mx-auto w-[200px] mb-4' />
       <p className='text-[#223333] font-light font-roboto text-[18px] md:text-[20px]'>The greenWeb team designed this website's carbon calculator to inspire and enlighten people about the importance of creating websites with low carbon emissions.</p>
       </div>
    </div>
  )
}
