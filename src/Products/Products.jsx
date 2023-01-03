import React from 'react';
import Product from '../Product/Product';
import onions from '../Assets/kitungu.png';
import tomatoes from '../Assets/toma.png';
import spinach from '../Assets/spino.png';
import kales from '../Assets/sukuma.png';
import papaya from '../Assets/papa.png';
import cabbage from '../Assets/cabo.png';
import { Link } from 'react-router-dom';
import { LazyMotion, domAnimation, m } from "framer-motion"

const Products = () => {
 const products = [
  {
   "imageUrl":cabbage,
   "title":"Cabbage",
   "size":"1kg",
   "price":"10"
  },
  {
    "imageUrl":spinach,
    "title":"Spinach",
    "size":"1kg",
    "price":"10"
   },
   {
    "imageUrl":kales,
    "title":"Kale",
    "size":"1kg",
    "price":"10"
   },
   {
    "imageUrl":papaya,
    "title":"Papaya",
    "size":"1kg",
    "price":"10"
   },
   {
    "imageUrl":tomatoes,
    "title":"Tomatoes",
    "size":"1kg",
    "price":"10"
   },
   {
    "imageUrl":onions,
    "title":"Onions",
    "size":"1kg",
    "price":"10"
   },
 ];


  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
        <div className='flex justify-between items-center'>
            <h3 className='md:text-[20px] font-bold'>Popular Product</h3>
            <button className='rounded-3xl bg-[#40AA54] text-[#F7F7F7] px-[0.75rem] py-[0.55rem] w-[20%] md:text-[16px] text-[12px]'><Link to='/products'>see all</Link></button>
        </div>
        <LazyMotion features={domAnimation}>
        <m.div animate={{ opacity: 1 }} className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
         {
          products.map((product,index)=> {
            return <Product key={index} product={product}/>
          })
         }
        
        </m.div>
        </LazyMotion>
    </div>
  )
}

export default Products