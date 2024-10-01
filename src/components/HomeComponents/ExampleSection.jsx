import React from 'react'
import { ExampleCard } from './ExampleCard'
import GoogleImg from '../../assets/google.png'
import FacebookImg from '../../assets/facebook.png'
import AlphabetLogo from '../../assets/alphabet.png'
import RedIncLogo from '../../assets/red-inc.png'

const ExampleSection = () => {
    const exampleData = [
        {title: "Google", text: "0.26gm/per visit", img: GoogleImg},
        {title: "Facebook", text: "0.21gm/per visit", img: FacebookImg},
        {title: "Alphabet", text: "0.094gm/per visit", img: AlphabetLogo},
        {title: "Red-Inc", text: "0.230gm/per visit", img: RedIncLogo},

    ]
  return (
    <div className='w-4/5 lg:w-1/2 mx-auto '>
        <h1 className='text-[#1b9876] font-poppins font-bold text-center text-[30px] md:text-[40px] mb-4'>sustainable <br/>
        example websites</h1>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            {
                exampleData?.map((item) => (
                    <ExampleCard item={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default ExampleSection;