import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {addToCart} from "../Redux/slices/CartSlice"
import {toast} from "react-toastify";

const Product = ({ product }) => {
  // eslint-disable-next-line no-unused-vars
  const handleClick = (product) => {
    dispatch(addToCart(product));
    toast.success("Product added to cart", {
      position: "top-center",
    });
  };
 
  const dispatch = useDispatch();
  const { img, title, price, size } = product;
  return (
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
      <div className="h-40">
        <img
          src={img}
          className="w-full h-full object-contain"
          alt="png"
        />
      </div>

      <div className="flex gap-1 flex-col p-2">
        <h3 className="font-bold">{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
        <p className="text-gray-500">{size} kg</p>
        <h3>${price}.00</h3>
        <div className="flex items-center justify-between mb-2">
          <div
            className="bg-[#40AA54] text-[#F7F7F7] p-1 rounded-lg gap-2 cursor-pointer flex flex-row items-center"
            onClick={() => handleClick(product)}
          >
            <p>Shop</p>
            <HiOutlineShoppingBag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
