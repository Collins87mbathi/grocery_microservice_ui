import React from 'react';
// import Image from '../images/hero.svg'
import './Hero.css';

const Hero = () => {
  return (
    <div className='md:max-w-[1240px] mx-auto bg-[url("https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JvY2VyeSUyMHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60")] h-[80vh] md:w-full w-[350px]  bg-cover bg-fixed bg-no-repeat bg-center rounded-xl md:w-auto'>
      <div className='flex flex-col gap-1 w-1/2 pt-40 pl-8'>
        <h1 className='text-[#F7F7F7] md:text-4xl font-extrabold text-2xl'>Order your</h1>
         <h1 className='text-[#F7F7F7] md:text-4xl font-extrabold text-2xl'>Daily Groceries</h1>
         <h2 className='text-[#40AA54] md:text-3xl font-extrabold text-xl'>#Free Delivery</h2>
         <div className='flex'>
          <input className='w-80 text-xs md:text-sm rounded-3xl outline-none' type="text" name='text' placeholder="search your daily groceries"/>
          <button type='submit' className='text-[#F7F7F7] w-28  p-2 bg-[#40AA54] ml-[-30px] md:ml-[-50px] rounded-3xl'>search</button>
         </div>
      </div>
      </div>
  )
}

export default Hero