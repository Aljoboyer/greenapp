import React from 'react'
import Layout from '../../components/Shared/Layouts/Layouts'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <Layout>
        <Header/>
        <div className='w-4/5	 lg:w-1/2 mx-auto py-24'>
          <p className='leading-10 text-center font-light font-roboto text-[16px] md:text-[20px] lg:text-[26px] text-[#233]'>The CO2 footprint of the Internet's data centers alone may already be comparable to that of global air travel. The good news is that a growing number of major Internet corporations are becoming more environmentally conscientious, opting for more renewable energy sources for their data centers and operations.</p>
        </div>
    </Layout>
  )
}

export default Home