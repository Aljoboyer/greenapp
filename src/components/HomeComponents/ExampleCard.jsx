import React from 'react'

export const ExampleCard = ({item}) => {
  return (
    <div className='text-center cursor-pointer  flex flex-col justify-center items-center'>
        <div className='img_div shadow-[0_4px_20px_2px_#00000024] my-4'>
            <img className='card_img' src={item?.img} alt="" />
        </div>
        <p className='text-[#045863] font-bold font-roboto text-[18px]'>{item?.title}</p>
        <p className='text-[#045863] font-normal font-roboto text-[16px]'>{item?.text}</p>
    </div>
  )
}
