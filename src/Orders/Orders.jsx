/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
import dateFormat from "dateformat";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { BASE_URL } from "../config/config";
import { useSelector } from "react-redux";

const OrdersUser = () => {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state?.user.user);

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

  // orders.map((orde)=>{
  //   console.log(orde);
  //  orde.products.map((ord)=>{
  //  ord.map((or)=>{
  // console.log(or._id);
  // })
  // })
  // })

  return (
    <div>
      <Navbar />
      <div className="max-w-[1640px] mx-auto px-4">
        <h1 className="font-semibold text-[24px]">My Orders</h1>
        <div className="mt-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {orders?.map((order) => (
              <div
                className="border p-4 shadow-lg rounded-lg hover:scale-105 duration-300 flex flex-col gap-1"
                key={order._id}
              >
                <p>
                  <span className="font-semibold">OrderID :</span>{" "}
                  {order.orderId}{" "}
                </p>
                <p>
                  <span className="font-semibold">Date of Order :</span>{" "}
                  {dateFormat(order.date, "dddd, mmmm dS, yyyy")}
                </p>
                <p>
                  <span className="font-semibold">Amount :</span> $
                  {order.amount}
                </p>
                <p>
                  <span className="font-semibold">Payment Time :</span>{" "}
                  {order.paymentMethod}
                </p>
                <p>
                  <span className="font-semibold">Status :</span>{" "}
                  <span
                    className={`${
                      order.isDelivered
                        ? "bg-[#40AA54] px-2 rounded-md text-[#F7F7F7]"
                        : "bg-red-500 px-2 rounded-md text-[#F7F7F7]"
                    }`}
                  >
                    {order.isDelivered ? "Delivered" : "not Delivered"}
                  </span>
                </p>
                <ul className="-my-6 divide-y mt-1 divide-gray-200">
                  {order.products.map((prod) =>
                    prod.map((prods) => (
                      <li key={prods._id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={prods.img}
                            alt="pic"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href="/">{prods.title}</a>
                              </h3>
                              <p className="ml-4">${prods.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {prods.category}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">{prods.quantity} kg</p>
                          </div>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersUser;
