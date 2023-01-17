import React, { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  const [loading] = useState(false);

  return (
    <div className="flex flex-col items-center  mt-[50px]">
      <h2 className="font-semibold text-xl text-[#40AA54]">Pay with Mpesa</h2>
      <form>
        <div className="mt-4">
          <div className="w-[300px]">
            <label
              htmlFor="number"
              className="block mb-3 text-sm font-semibold text-gray-500"
            >
              Number
            </label>
            <input
              name="number"
              type="text"
              placeholder="enter the number you are paying with"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>
        <div className="mt-4">
          <Link to="/confirmation">
            <button className="w-full px-6 py-2 text-[#F7F7F7] bg-[#40AA54] hover:bg-[#40AA54]">
              {loading ? "loading" : "pay"}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Payment;
