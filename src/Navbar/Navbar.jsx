import React,{useState} from 'react'
import Logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <img className=' h-28 w-auto' src={Logo} alt='company'/>
      <ul className='hidden md:flex'>
      <li className='p-4 hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54]'><Link to="/">Home</Link></li>
        <li className='p-4 hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54]'><Link to="/products">Products</Link></li>
        <li className='p-4 hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54]'>About</li>
        <li><Link to='/register' className='bg-[#40AA54] p-1 rounded-md  hover:bg-[#F7F7F7] border-2  flex gap-4 m-2 transition duration-500 active:text-[#16162E] text-center'>Register</Link></li>
        <li><Link to='/login'className='bg-[#40AA54] p-1 flex justify-center rounded-md hover:bg-[#F7F7F7] border-2 transition duration-500  text-[#16162E] active:text-[#16162E]  gap-4 m-2' >Login</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'flex flex-col items-center fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <img className=' h-20 w-auto' src={Logo} alt='company'/>
        <li className='p-4 hover:text-[#40AA54] text-[#16162E] active:text-[40AA54] transition duration-500 focus:text-[40AA54]'><Link to="/">Home</Link></li>
        <li className='p-4 hover:text-[#40AA54]  text-[#16162E] active:text-[40AA54] transition duration-500 focus:text-[40AA54]'><Link to="/products">Products</Link></li>
        <li className='p-4 hover:text-[#40AA54]  text-[#16162E] active:text-[40AA54] transition duration-500 focus:text-[40AA54]'>About</li>
        <li><Link to='/register' className='flex justify-center bg-[#40AA54] p-1 rounded-md  hover:bg-[#F7F7F7] border-2  flex gap-4 m-2 transition duration-500 active:text-neutral-500 text-center'>Register</Link></li>
        <li><Link to='/login'className='bg-[#40AA54] p-1 flex justify-center rounded-md hover:bg-[#F7F7F7] border-2 transition duration-500  text-neutral-900 active:text-neutral-500  gap-4 m-2' >Login</Link></li>
      </ul>
    </div>
  )
}                                                                                                                                                                                                                                                 

export default Navbar