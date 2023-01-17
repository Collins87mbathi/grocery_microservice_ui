/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import {useSelector} from "react-redux";
import ProgressBar from "../ProgressBar/ProgressBar";
import axios from "axios";
import { BASE_URL } from "../config/config";
import { toast } from "react-toastify";


const Shipping = () => {
const cart = useSelector((state)=> state?.cart);
const user = useSelector((state)=> state.user.user);

const [userData,setUserData] = useState({
 city : "",
 number:"",
 subcounty:"",
 street:""
});

const [loading,setLoading] = useState(false);
const [orderloading,setOrderloading] = useState(false);
const  [selectedOption,setSelectedOption] = useState("pay now");

const OptionChange = (e) =>{
setSelectedOption(e.target.value) 
};

const handleChange = (e) => {
 setUserData((intial)=>{
  return {...intial,[e.target.name]:e.target.value}
 })
}

const handleOrder = async (e) => {
e.preventDefault();
try {
  setOrderloading(true);
  const response = await axios.post(`${BASE_URL}/orders`,{
    paymentMethod:selectedOption,
    amount:cart.total,
    products:cart?.products
  },
   {headers: { authorization: `Bearer ${user.token}` }}
   );
   if(response.data.paymentMethod === "pay now") {
     window.location.replace('/payment');
   } else if(response.data.paymentMethod === "pay on Delivery") {
     window.location.replace('/confirmation');
   }
   setOrderloading(false);
} catch (error) {
  setOrderloading(false);
  console.log(error);
}
}

const handleClick = async (e) => {
  e.preventDefault();
  try {
    setLoading(true)
   const response = await axios.post(`${BASE_URL}/address`,userData,
   {headers: { authorization: `Bearer ${user.token}` }}
   );
   response && toast.success('your data was successfully saved', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
   setLoading(false);
  } catch (error) {
    setLoading(false);
    toast.error(`${error.response.data}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
}

  return (
    <div>
      <Navbar />
      <ProgressBar current={2} completeB={false} />
      <div className="">
        </div>
        <div className="container p-4 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <form className="justify-center w-full mx-auto">
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="city" className="block mb-3 text-sm font-semibold text-gray-500">
                                        City</label>
                                    <input name="city" type="text" placeholder="city"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        onChange={handleChange}
                                        />
                                    
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label htmlFor="number"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Number</label>
                                    <input name="number" type="text" placeholder="number"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        onChange={handleChange}
                                        />
                                </div>
                            </div>
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="subcounty"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Subcounty</label>
                                    <input name="subcounty" type="text" placeholder="subcounty"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        onChange={handleChange}
                                        />
                                </div>
                                <div className="w-full lg:w-1/2 ">
                                    <label htmlFor="street" className="block mb-3 text-sm font-semibold text-gray-500">
                                    street</label>
                                    <input name="street" type="text" placeholder="Street"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        onChange={handleChange}
                                        />
                                </div>
                            </div>
            
                            <div className="mt-4">
                                <button
                                    className="w-full px-6 py-2 text-[#F7F7F7] bg-[#40AA54] hover:bg-[#40AA54]" 
                                    onClick={handleClick}
                                    >
                                        {loading ? "loading" : "save address"}
                                         </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                    <div className="pt-12 md:pt-0 2xl:ps-4">
                        <h2 className="text-xl font-bold">Order Summary
                        </h2>
                        <div className="mt-8">
                        <div className="lg:w-[400px] border-t border-gray-200 p-4">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cart?.products.map((product) => (
                <li key={product._id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.img}
                      alt="image"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.title}</a>
                        </h3>
                        <p className="ml-4">{product.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.category}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">{product.quantity} kg</p>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-[#40AA54] hover:text-[#40AA54]-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
                        </div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Subtotal<span className="ml-2">${cart.total}.00</span></div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Shipping Tax<span className="ml-2">$0.00</span></div>
                        <div
                            className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                            Total<span className="ml-2">${cart.total}</span></div>
                    </div>
                     
                     
                    <form>
                    <div className="">
                     <label className="flex items-center gap-2"> 
                      <input type="radio" value="pay now" className="text-[#40AA54] outline-none" checked={selectedOption === "pay now"} onChange={OptionChange} />
                      pay now
                     </label>
                    </div>

                    <div>
                     <label className="flex items-center gap-2">
                      <input type="radio" value="pay on Delivery" className="text-[#40AA54] outline-none" checked={selectedOption === "pay on Delivery"} onChange={OptionChange} />
                      pay on Delivery
                     </label>
                    </div>

                    <div className="mt-4">
                                <button
                                    className="w-1/2 px-6 py-2 text-[#F7F7F7] bg-[#40AA54] hover:bg-[#40AA54]" 
                                    onClick={handleOrder}
                                    >
                                       {orderloading ? "loading..." : "next"}
                                         </button>
                            </div>
                            </form>

                </div>
            </div>
        </div>
    </div>
  );
};

export default Shipping;
