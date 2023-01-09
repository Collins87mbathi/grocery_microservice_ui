import React from 'react'
import {HiOutlineShoppingBag} from "react-icons/hi";

const Product = ({product}) => {

const {img,title,price,size} = product;
  return (
    <div className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
       <div className='flex justify-center'><img src={img} className='w-full h-[200px] pt-4' alt='png'/> </div>
       
    <div className='flex gap-1 flex-col ml-4 mt-8'>
        <h3 className='font-bold'>{title}</h3>
        <p className='text-gray-500 text-[13px]'>{size}</p>
        <h3>${price}</h3>
        <div className='flex items-center justify-between mb-2'>
    <div className='flex items-center gap-2'>
    <p className='border-2 px-0.5 py-0.1 md:px-1.5 md:py-0.5 rounded-lg text-[#40AA54] cursor-pointer'> - </p>
    <p>2</p>
    <p className=' border-2 px-0.5 py-0.1 md:px-1.5 md:py-0.5 rounded-lg text-[#40AA54] cursor-pointer'> + </p>
    </div>
    <div className='mr-4 bg-[#40AA54] text-[#F7F7F7] p-1 rounded-full cursor-pointer'><HiOutlineShoppingBag/></div>
    </div>
    </div>
    
    </div>
  )
}

export default Product