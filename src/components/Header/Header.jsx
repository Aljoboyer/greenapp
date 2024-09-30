import React from 'react'
import Navbars from '../Shared/Navbars/Navbars'
import HeaderLogo from '../../assets/header_img.png'

const Header = () => {
  return (
    <div className='h-fit w-full home_header '>
        <Navbars/>

        <div className='flex flex-col-reverse lg:flex-row justify-evenly items-center px-10 py-4'>
            <div className='text-center lg:text-start'>
                <h1 className='font-bold font-poppins text-white text-[30px] md:text-[40px] xl:text-[46px] '>Unlock Insights for a Greener Future!</h1>
                <p className='font-medium font-roboto text-white text-[14px] md:text-[16px] my-7'>Download our comprehensive whitepaper now and embark on a journey towards a more sustainable future.</p>
                <button className='shadow-[0_4px_10px_4px_#223333] rounded-full bg-[#d9d9d9] text-black hover:text-white hover:bg-[#035762]  ease-in-out duration-300 font-medium font-roboto px-6 py-4'>Download Now !</button>
            </div>

            <div>
                <img src={HeaderLogo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header