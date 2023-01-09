import React from 'react'
import {ImGoogle2} from 'react-icons/im';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config/config';
import {setLoginSuccess,setLoginFailure} from "../Redux/slices/UserSlice";
import { useDispatch } from 'react-redux';

const Login = () => {
const dispatch = useDispatch();
const [userData,setUserData] = useState({
  email:"",
  password:""
});
const [error,setError] = useState("");
const [loading,setLoading] = useState(false);


const handleChange = (e) => {
setUserData((initial)=>{
  return {...initial, [e.target.name]:e.target.value}
}) 
};

const fetchData = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);
    const response = await axios.post(`${BASE_URL}/auth/login`,userData);
    dispatch(setLoginSuccess(response.data));
    console.log(response.data);
    setLoading(false);
    response && window.location.replace('/');
  } catch (error) {
    setLoading(false);
    setLoginFailure();
    setError(error.response.data);
  }
}
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={Logo}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Login to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={fetchData}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to='/forgotpassword' className="font-medium text-[#40AA54] hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div className='text-center text-red-500 md:text-lg'>
              <p>{error}</p>
            </div>
            <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#40AA54] py-2 px-4 text-sm font-medium text-white hover:bg-[#40AA54]-700 focus:outline-none focus:ring-2 focus:ring-[#40AA54]-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-[#40AA54]-500 group-hover:text-[#40AA54]-400" aria-hidden="true" />
              </span>
              {loading ? "loading ..." : "Login"}
            </button>
            </div>
          </form>
          <div className='flex items-center flex-col gap-2'>
            <Link to='/register'>Don't have an account? <font className='text-[#40AA54] font-semibold'>register</font></Link>
            <p className='text-lg font-semibold'>or login with </p>
            <ImGoogle2 className='text-3xl text-gray-500 cursor-pointer'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login