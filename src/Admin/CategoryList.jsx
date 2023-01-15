import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { BASE_URL } from '../config/config';

const CategoryList = () => {
const [category,setCategory] = useState([]);


const FetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL + '/category');
    setCategory(response.data); 
  } catch (error) {
   console.log(error);
  }
};

useEffect(()=>{
FetchProducts();
},[]);

  return (
   <div className=''>
    <div className='grid gap-4 grid-cols-3'>
          {
          category?.map((cate)=>{
             return <div className='max-w-[180px] min-w-[180px] h-[180px] flex items-center justify-center  rounded-lg bg-[#F7F7F7] text-[#16162E]' key={cate._id} >
              <p className='text-[18px]'>{cate.name}</p>
            </div>
          })
          }
    </div>
    </div>
  )
}

export default CategoryList