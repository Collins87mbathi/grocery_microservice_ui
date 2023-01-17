import React, { useState } from "react";
import axios from "axios";
import {BASE_URL} from "../config/config"
import {useSelector} from "react-redux";
import { toast } from "react-toastify";

const Confirmation = () => {
  const [loading,setLoading] = useState(false);
  const [orderId,setOrderId] = useState('');
  const [email,setEmail] = useState('');
  const user = useSelector((state)=>state.user.user);

  
// eslint-disable-next-line array-callback-return
user?.orders.filter((order)=>{
  if(order.isComplete === false) {
   setOrderId(order.orderId);
  }
})

 setEmail(user.email);
 const fetchProduct = async () => {
  try {
    setLoading(true);
 const response = await axios.post(BASE_URL + '/sendmail',{
  orderId,
  email
 })
 response && window.location.replace('/complete');
 setLoading(false); 
  } catch (error) {
  toast.error('error completing order', {
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
    <div className="flex flex-col items-center mt-[4rem]">
      <div>
        <p>please complete the order</p>
      </div>
      <div className="mt-4">
          <button onClick={fetchProduct} className=" px-6 py-2 text-[#F7F7F7] bg-[#40AA54] hover:bg-[#40AA54]">
            {loading ? "loading" : "complete"}
          </button>
      </div>
    </div>
  );
};

export default Confirmation;
