import React,{useState} from 'react'
import "./Admin.css";
import axios from 'axios';
import {useSelector} from "react-redux";
import {BASE_URL} from "../config/config";

const AddCategory = () => {
const [name,setName] = useState('');
const [loading,setLoading] = useState(false);
const user = useSelector((state)=>state.user.user);

const handleClick = async () => {
 setLoading(true);
 try {
  const response = await axios.post(BASE_URL + '/category', {name},
  {headers: { authorization: `Bearer ${user.token}` }}
  );
  response && window.location.replace('/dashboard/category-list');
  setLoading(false);
 } catch (error) {
  setLoading(false);
  console.log(error);
 }
}

  return (
    <div className='flex flex-col items-center'>
    <div className='mt-4'>
    <input type="text" name='name' value={name} className='rounded-lg category' placeholder="input name" onChange={(e)=>{setName(e.target.value)}}/>
    </div>
    <div className='mt-4'>
     <button onClick={handleClick} className='bg-[#40AA54] py-2 px-8 rounded text-[#F7F7F7]'>{loading ? "loading..." : "save"}</button>
    </div>
    </div>
  )
}

export default AddCategory