import React from 'react'
import Navbars from '../Navbars/Navbars';
import Footers from '../Footers/Footers';

const Layout = ({children}) => {
  return (
    <main className='w-full'>
        {/* <Navbars/> */}
        {children}
        <Footers/>
    </main>
  )
}

export default Layout;