import React from 'react';
import Navbar from "../Navbar/Navbar";
import Product from '../Product/Product';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {BASE_URL} from "../config/config";

const MainProducts = () => {
const [products,setProducts] = useState([]);
const [categories,setCategories] = useState([]);
const [category,setCategory] = useState('');
const [search,setSearch] = useState('');




useEffect(()=>{
const fetchCategories = async () => {
  try {
    const response = await axios.get(BASE_URL + '/category');
    setCategories(response.data); 
  } catch (error) {
   console.log(error);
  }
}
fetchCategories();
},[]);


 useEffect(()=>{
  const fetchProducts = async () => {
    try {
      const response = await  axios.get(`${BASE_URL}/products/all?category=${category}`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
   }
fetchProducts();
 },[category,search]);

const allcategories = ['all', ...new Set(categories.map((main)=> main.name))]

const handleCategory = (category) => {
  if(category === 'all') {
   setCategory('');
   setSearch('');
   return;
  } 
    setCategory(category);
    setSearch('');

}

  return (
    <div className='max-w-[1640px]'>
      <Navbar/>
      <div className='max-w-[1640px] m-auto px-4 py-12'>
     <div className='flex flex-col lg:flex-row gap-2 justify-between'>
      {/* search  */}
      <div className="px-4 flex">
    <input
      className="w-80 text-xs md:text-sm rounded-3xl outline-none"
      type="text"
      name="text"
      placeholder="search your daily groceries"
      onChange={(e)=>setSearch(e.target.value)}
    />
    <button
      type="submit"
      className="text-[#F7F7F7] w-28  p-2 bg-[#40AA54] ml-[-30px] md:ml-[-50px] rounded-3xl"
    >
      search
    </button>
  </div>

  {/* filter buttons */}
    <div className='flex justfiy-between flex-wrap'>
      {allcategories.map((cate,index)=>{
       return <button className='m-1 border p-1 rounded-lg border-[#40AA54] text-[#40AA54] hover:bg-[#40AA54] hover:text-[#F7F7F7]' onClick={() => handleCategory(cate)} key={index}>{cate}</button>
      })}
    </div>
     </div>
     <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
         {

          // eslint-disable-next-line array-callback-return
          products?.filter((prod)=>{
           if(search === "") {
            return prod
           } else if(prod.title?.toLowerCase().includes(search.toLowerCase())) {
            return prod;
           }
          }).map((product,index)=> {
            return <Product key={index} product={product}/>
          })
         }
        </div>
      </div>
    </div>
  )
}

export default MainProducts