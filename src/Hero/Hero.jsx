import React from "react";
// import Image from '../images/hero.svg'
import "./Hero.css";

const Hero = () => {
  return (
    <div className="mx-auto max-w-4xl xl:max-w-6xl">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full text-gray-200 space-y-5 h-full bg-black/40 flex flex-col justify-center items-center">
          <h1 className="px-4 text-[#F7F7F7] md:text-4xl font-extrabold text-2xl">
            Order your
          </h1>
          <h1 className="px-4 text-[#F7F7F7] md:text-4xl font-extrabold text-2xl">
            Daily Groceries
          </h1>
          <h2 className="px-4 text-[#40AA54] md:text-3xl font-extrabold text-xl">
            #Free Delivery
          </h2>
          <div className="px-4 flex">
            <input
              className="w-full text-xs md:text-sm rounded-3xl outline-none md:w-80"
              type="text"
              name="text"
              placeholder="search your daily groceries"
            />
            <button
              type="submit"
              className="text-[#F7F7F7] w-28  p-2 bg-[#40AA54] ml-[-30px] md:ml-[-50px] rounded-3xl"
            >
              search
            </button>
          </div>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JvY2VyeSUyMHNob3BwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1260&q=60"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
