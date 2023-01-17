import React,{useEffect, useState} from 'react';

import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import { LazyMotion, domAnimation, m } from "framer-motion"
import axios from 'axios';
import { BASE_URL } from '../config/config';

const Products = () => {
const [products,setProducts] = useState([]);
const [loading,setLoading] = useState(false);

  const fetchproducts = async () => {
    try {
   
      setLoading(true); 
      const response = await axios.get(`${BASE_URL}/products`);
      if (response.status === 200 && response.data.length > 0) {
        setProducts(response.data);
        setLoading(false);
      } else if (response.status === 200 && response.data.length === 0) {
        setProducts([]);
        setLoading(false); 
      }
  
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
      setProducts([]);
    }
  }
  
  useEffect(()=>{
   fetchproducts();
  },[]);
  let circleCommonClasses = 'h-2.5 w-2.5 bg-current   rounded-full';
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">

        <div className='flex justify-between items-center'>
            <h3 className='md:text-[20px] font-bold'>Popular Product</h3>
            <button className='rounded-3xl bg-[#40AA54] text-[#F7F7F7] px-[0.75rem] py-[0.55rem] w-[20%] md:text-[16px] text-[12px]'><Link to='/products'>see all</Link></button>
        </div>
        <LazyMotion features={domAnimation}>
        {loading ? 
        <div className='flex'>
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div
            className={`${circleCommonClasses} mr-1 animate-bounce200`}
        ></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
         :
          <m.div animate={{ opacity: 1 }} className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
         {
          products.map((product,index)=> {
            return <Product key={index} product={product}/>
          })
         }
        
        </m.div>

         }
        </LazyMotion>
    </div>
  )
}

export default Products