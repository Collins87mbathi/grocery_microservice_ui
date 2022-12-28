import React from 'react'

const Card = ({card}) => {
return (
    <div className='max-w-[175px] min-w-[175px] rounded-lg flex flex-col gap-2 items-center justify-center h-[175px] bg-[#F7F7F7] text-[#16162E]'>
    <img src={card.imageUrl} className="w-[50px] h-auto" alt='png'/>   
    <p className='text-[18px]'>{card.title}</p>  
   </div>
 );
}

export default Card