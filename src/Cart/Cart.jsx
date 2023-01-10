/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="max-w-[1640px]">
      <Navbar />
      <ProgressBar current={1} completeB={false} />
      <div className="max-w-[1640px] px-4 py-4 mx-auto">
        <h1 className="py-8 font-semibold text-[20px]">Shopping Cart</h1>
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="lg:w-[400px] border-t border-gray-200 p-4">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cart?.products.map((product) => (
                <li key={product._id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.img}
                      alt="pic"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.title}</a>
                        </h3>
                        <p className="ml-4">$ {product.price}</p>
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
          <div>
            <div className=" lg:w-[400px] border-t border-gray-200 py-8 px-8 sm:px-6">
              <h2 className="pb-4 font-bold"> Order summary</h2>
              <div className="flex justify-between text-base font-medium text-gray-900 py-4 border-b">
                <p className="text-[13px] text-gray-500">Subtotal</p>
                <p>${cart?.total}.00</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 py-4 border-b">
                <p className="text-[13px] text-gray-500">shipping estimate</p>
                <p>$0.00</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 py-4 border-b">
                <p className="text-[13px] text-gray-500">tax estimate</p>
                <p>$0.00</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p className="text-[13px] text-gray-500">Order total</p>
                <p>${cart?.total}.00</p>
              </div>
              <div className="mt-6">
                <Link
                  to="/shipping"
                  className="flex items-center justify-center rounded-md border border-transparent bg-[#40AA54] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#40AA54]-700"
                >
                  Checkout
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or {""}
                  <button
                    type="button"
                    className="font-medium text-[#40AA54] hover:text-[#40AA54]"
                  >
                    <Link to="/products">
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
