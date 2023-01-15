import React from 'react';
import Navbar from "../Navbar/Navbar";
import Product from '../Product/Product';
import onions from '../Assets/kitungu.png';
import tomatoes from '../Assets/toma.png';
import spinach from '../Assets/spino.png';
import kales from '../Assets/sukuma.png';
import papaya from '../Assets/papa.png';
import cabbage from '../Assets/cabo.png';
import { useState } from 'react';
// import Buttons from './Buttons';

const MainProducts = () => {
const [category,setCategory] = useState();
const [search,setSearch] = useState();

 const products = [
  {
   "imageUrl":cabbage,
   "title":"Cabbage",
   "size":"1kg",
   "price":"10",
   "category":"leafs"
  },
  {
    "imageUrl":spinach,
    "title":"Spinach",
    "size":"1kg",
    "price":"10",
    "category":"leafs"
   },
   {
    "imageUrl":kales,
    "title":"Kale",
    "size":"1kg",
    "price":"10",
    "category":"leafs"
   },
   {
    "imageUrl":papaya,
    "title":"Papaya",
    "size":"1kg",
    "price":"10",
    "category":"roots"
   },
   {
    "imageUrl":tomatoes,
    "title":"Tomatoes",
    "size":"1kg",
    "price":"10",
    "category":"vegetables"
   },
   {
    "imageUrl":onions,
    "title":"Onions",
    "size":"1kg",
    "price":"10",
    "category":"arrowroots"
   },
 ];

const allcategories = ['all', ...new Set(products.map((main)=> main.category))]

const handleCategory = (e) => {
  if(e.target.value === 'all') {
   setCategory('');
   setSearch('')
  } else  {
    setCategory(e.target.value);
    setSearch('');
  }
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
      onChange={(e)=>setSearch(e.target.value.toLowerCase())}
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
       return <button className='m-1 border p-1 rounded-lg border-[#40AA54] text-[#40AA54] hover:bg-[#40AA54] hover:text-[#F7F7F7]'value={cate} onChange={handleCategory} key={index}>{cate}</button>
      })}
    </div>
     </div>
     <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
         {
          products.map((product,index)=> {
            return <Product key={index} product={product}/>
          })
         }
        </div>
      </div>
    </div>
  )
}

export default MainProducts