import React, { useState,useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config/config";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";


const Payment = () => {
  const [loading,setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [phone, setPhone] = useState("");
  const user = useSelector((state) => state?.user.user);
  let orderId;
  let amount;


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(BASE_URL + "/orders/single", {
          headers: { authorization: `Bearer ${user.token}` },
        });
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, [user.token]);


 
 // eslint-disable-next-line array-callback-return
 orders.filter((order)=>{
  if(order.isComplete === false) {
    orderId = order.orderId;
    amount = order.amount;
  }
 });
const postPayment = async () => {
  try {
    setLoading(true);
    const  response = await axios.post(`${BASE_URL}/payment/stkPush`, {
      orderId,
      amount,
      phone
    });
    response && toast.success('your payment was successful', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setLoading(false)
  } catch (error) {
    console.log(error);
    // toast.error(error.response.data, {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   });
  }
  
} 

const confirmPayment = async () => {
  try {
    setLoading(true);
    const  response = await axios.post(`${BASE_URL}/payment/${orderId}`);
    response && window.location.replace('/confirmation');
  } catch (error) {
    toast.error(error.response.data, {
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
    <div className="flex flex-col items-center  mt-[50px]">
      <h2 className="font-semibold text-xl text-[#40AA54]">Pay with Mpesa</h2>
        <div className="mt-4">
          <div className="w-[300px]">
            <label
              htmlFor="phone"
              className="block mb-3 text-sm font-semibold text-gray-500"
            >
              Number
            </label>
            <input
              name="phone"
              type="text"
              placeholder="enter the number you are paying with"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              onChange={(e)=>setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4">
        <div className="mt-4">
            <button onClick={postPayment} className="w-full px-6 py-2 text-[#F7F7F7] bg-[#40AA54] hover:bg-[#40AA54]">
              {loading ? "loading" : "pay"}
            </button>
        </div>
        <div className="mt-4">
        <button onClick={confirmPayment} className="w-full px-6 py-2 text-[#F7F7F7] bg-[#40AA54] hover:bg-[#40AA54]">
              complete order
            </button>
            </div>
        </div>
    </div>
  );
};

export default Payment;
