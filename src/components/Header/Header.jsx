import React from 'react'
import Navbars from '../Shared/Navbars/Navbars'
import HeaderLogo from '../../assets/header_img.png'

const Header = () => {
  return (
    <div className='h-screen w-full home_header '>
        <Navbars/>

        <div className='flex flex-col-reverse lg:flex-row justify-evenly items-center'>
            <div>
                <h1>Unlock Insights for a Greener Future!</h1>
                <p>Download our comprehensive whitepaper now and embark on a journey towards a more sustainable future.</p>
                <button>Download Now!</button>
            </div>

            <div>
                <img src={HeaderLogo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header