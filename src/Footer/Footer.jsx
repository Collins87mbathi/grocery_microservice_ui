import React from "react";
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-[#16162E] text-[#F7F7F7] footer">
      <div className="flex flex-col justify-between py-5 px-2 mx-auto max-w-4xl md:flex-row xl:max-w-6xl xl:px-0">
        <div className="flex flex-col">
          <p className="font-semibold text-white mb-2 text-lg">PEREZ GRABS</p>
          <div className="flex gap-2 text-[20px] footer-icons">
            <CiFacebook />
            <CiTwitter />
            <CiInstagram />
            <CiLinkedin />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="text-[18px] font-semibold">About</h2>
          <p className="text-gray-500">How it Work</p>
          <p className="text-gray-500">Our Packages</p>
          <p className="text-gray-500">Promotions</p>
          <p className="text-gray-500">Refer A Friend</p>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="text-[18px] font-semibold">Delivery</h2>
          <p className="text-gray-500">Cast of Delivery</p>
          <p className="text-gray-500">Payment Method</p>
          <p className="text-gray-500">Delivery Areas</p>
          <p className="text-gray-500">Returns</p>
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="text-[18px] font-semibold">Contact</h2>
          <p className="text-gray-500">+254791686851</p>
          <p className="text-gray-500">Nairobi,Kenya</p>
          <p className="text-gray-500">perezcollins87@gmail.com</p>
          <p className="text-gray-500">&#169; All right and reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
