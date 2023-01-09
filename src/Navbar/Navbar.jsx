import React, { useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
// import {FaCartPlus} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const user = useSelector((state) => state.state.user);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="max-w-[1640px] h-[60px] mx-auto flex justify-between items-center p-4">
      <img className=" h-[80px] w-auto " src={Logo} alt="company" />
      {/* <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 text-[#40AA54] '>
          Perez <span className='font-bold text-[#16162E]'>Grabs</span>
        </h1> */}
      <Link to="/cart" role="button" className="relative flex">
        <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
        </svg>
        <span className="absolute right-0 top-0 rounded-full bg-[#40AA54] w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
          5
        </span>
      </Link>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54]">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54]">
          <Link to="/products">Products</Link>
        </li>
        <li className="p-4 hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54]">
          About
        </li>
        <li>
          <Link
            to="/register"
            className="bg-[#40AA54] p-1 rounded-md  hover:bg-[#F7F7F7] border-2  flex gap-4 m-2 transition duration-500 active:text-[#16162E] text-center"
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="bg-[#40AA54] p-1 flex justify-center rounded-md hover:bg-[#F7F7F7] border-2 transition duration-500  text-[#16162E] active:text-[#16162E]  gap-4 m-2"
          >
            Login
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose className="cursor-pointer" size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      <ul
        className={
          nav
            ? " flex flex-col items-center fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <img className=" h-20 w-auto" src={Logo} alt="company" />
        <li className="p-4 hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:text-[#40AA54]  text-[#16162E] active:text-[#40AA54] transition duration-500">
          <Link to="/products">Products</Link>
        </li>
        <li className="p-4 hover:text-[#40AA54]  text-[#16162E] active:text-[#40AA54] transition duration-500">
          About
        </li>
        {user ? (
          <>
            <li>
              <Link
                to="/register"
                className="flex justify-center bg-[#40AA54] p-1 rounded-md  hover:bg-[#F7F7F7] border-2  flex gap-4 m-2 transition duration-500 active:text-neutral-500 text-center"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-[#40AA54] p-1 flex justify-center rounded-md hover:bg-[#F7F7F7] border-2 transition duration-500  text-neutral-900 active:text-neutral-500  gap-4 m-2"
              >
                Login
              </Link>
            </li>
          </>
        ) : (
          <li className="text-[20px] font-semibold">{user?.fullname}</li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
