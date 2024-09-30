import React from 'react'
import Navbars from '../Navbars/Navbars';

const Layout = ({children}) => {
  return (
    <main className='w-full'>
        {/* <Navbars/> */}
        {children}
    </main>
  )
}

export default Layout;