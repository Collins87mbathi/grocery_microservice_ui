import React from 'react'
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import Card from './Card';
import {cards} from "./cards";
import "./filter.css";

const Filter = () => { 


  let box = document.querySelector('.product-container');

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width)
}

const btnpressnext = () => {
  let width = box.clientWidth;
  box.scrollLeft = box.scrollLeft + width;
  console.log(width)
}
  return (
    <div className='max-w-[1240px] mx-auto px-4 m-8 h-[60vh]'>
      <div className='flex justify-between items-center'>
        <h3 className='md:text-[20px] font-bold'>Category</h3>
        <div className='flex gap-6 font-bold'>
        <div className='font-bold p-2 rounded-full cursor-pointer'>
            <AiOutlineLeft onClick={btnpressprev}/>
        </div>
        <div className='bg-[#40AA54] font-bold p-2 rounded-full cursor-pointer text-[#F7F7F7]'>
                <AiOutlineRight onClick={btnpressnext}/>
        </div>
        </div>
      </div>
      <div className='relative overflow-hidden pt-6 ml-[-7px]'>
      <div className='product-container'>
        {
          cards.map((card,index)=>{
           return <Card key={index} card={card}/>
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Filter