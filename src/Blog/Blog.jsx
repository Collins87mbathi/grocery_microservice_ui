import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import cost from "../images/cost.png";
import tracking from "../images/tracking.png";
import delivery from "../images/deliveryf.png";
import naturalfood from "../images/naturalfood.png";

const Blog = () => {
  return (
    <div className="py-8 max-w-4xl xl:max-w-6xl mx-auto lg:flex">
      <div className="flex flex-col pt-8 gap-4">
        <h2 className="text-2xl font-bold">
          Perez Grabs could be your daily service
        </h2>
        <p className="text-[grey]">
          Lean into that problem translating our vision of having a market
          leading platform. Commitment data-point high performance
        </p>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <IoMdCheckmarkCircleOutline className="bg-[#40AA54] text-slate-100 rounded" />{" "}
            Best service than others
          </li>
          <li className="flex items-center gap-2">
            <IoMdCheckmarkCircleOutline className="bg-[#40AA54] text-slate-100 rounded" />{" "}
            Use experience{" "}
          </li>
          <li className="flex items-center gap-2">
            <IoMdCheckmarkCircleOutline className="bg-[#40AA54] text-slate-100 rounded" />{" "}
            Userfriendly app
          </li>
        </ul>
        <p className="bg-[#40AA54] p-3 w-40 my-4 lg:my-0 text-center text-slate-100 rounded-sm">
          Learn More
        </p>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col pt-8 gap-4">
          <div className="flex flex-col items-center border p-8 rounded">
            <img src={naturalfood} className="w-10" alt="food" />
            <h2>Fresh Foods</h2>
            <p>Lean into that problem translating our vision of having</p>
          </div>
          <div className="flex flex-col items-center border p-8 rounded">
            <img src={delivery} className="w-10" alt="delivery" />
            <h2>Fastest Delivery</h2>
            <p>Lean into that problem translating our vision of having</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center border p-8 rounded">
            <img src={tracking} className="w-10" alt="tracking" />
            <h2>Live Tracking</h2>
            <p>Lean into that problem translating our vision of having</p>
          </div>
          <div className="flex flex-col items-center border p-8 rounded">
            <img src={cost} className="w-10 " alt="cost" />
            <h2>Low Cost Delivery</h2>
            <p>Lean into that problem translating our vision of having</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
