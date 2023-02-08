import React, { useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { createImageFromInitials } from "../Utils/getInitials";
import { getRandomColor } from "../Utils/getRandomColor";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import { logout } from "../Redux/slices/UserSlice";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const user = useSelector((state) => state?.user.user);
  const cart = useSelector((state) => state?.cart);
  const dispatch = useDispatch();
  const handleNav = () => {
    setNav(!nav);
  };
  const Logout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) return dispatch(logout());
  };

  const navLinks = [{ name: "Home" }, { name: "Products" }, { name: "Orders" }];
  return (
    <div className="mx-auto flex justify-between items-center max-w-4xl xl:max-w-6xl">
      <Link to="/">
        <img className=" h-20 w-auto " src={Logo} alt="company" />
      </Link>
      <div className="flex flex-row items-center space-x-16">
        <ul className="hidden items-center flex-row md:flex">
          {navLinks.map((navLink, i) => (
            <li
              className="p-4 text-lg font-semibold hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54]"
              key={i}
            >
              <Link
                to={
                  navLink.name === "Home"
                    ? `/`
                    : `${
                        navLink.name.charAt(0).toLowerCase() +
                        navLink.name.slice(1)
                      }`
                }
              >
                {navLink.name}
              </Link>
            </li>
          ))}

          {user === null ? (
            <>
              <li>
                <Link
                  to="/register"
                  className="flex justify-center bg-[#40AA54] p-1 rounded-md  hover:bg-[#F7F7F7] border-2 gap-4 m-2 transition duration-500 active:text-neutral-500 text-center"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="bg-[#40AA54] p-1 flex justify-center rounded-md hover:bg-[#F7F7F7] border-2 transition duration-500  text-neutral-900 active:text-neutral-500  gap-4 m-2"
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            <div className="relative h-max flex flex-row items-center">
              <li className="text-[18px] font-semibold cursor-pointer flex items-center">
                <img
                  className="h-7 w-7 rounded-full object-cover"
                  src={createImageFromInitials(
                    500,
                    user?.fullname,
                    getRandomColor()
                  )}
                  alt="img"
                />
              </li>
              <li className="p-4 hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54]">
                <AiOutlineLogout
                  onClick={() => {
                    Logout();
                  }}
                  className="cursor-pointer text-xl"
                />
              </li>
            </div>
          )}
        </ul>
        <Link to="/cart" role="button" className="relative flex">
          <svg className="flex-1 w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
          </svg>
          <span className="absolute right-0 top-0 rounded-full bg-[#40AA54] w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
            {cart.cartTotalQuantity}
          </span>
        </Link>
      </div>

      {/* Mobile Nav Bar */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose className="cursor-pointer" size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
      <ul
        className={
          nav
            ? " flex flex-col items-center fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <Link to="/">
          <img className=" h-20 w-auto" src={Logo} alt="company" />
        </Link>
        {navLinks.map((navLink, i) => (
          <li
            className="p-4 hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54]"
            key={i}
          >
            <Link
              to={
                navLink.name === "Home"
                  ? `/`
                  : `${
                      navLink.name.charAt(0).toLowerCase() +
                      navLink.name.slice(1)
                    }`
              }
            >
              {navLink.name}
            </Link>
          </li>
        ))}
        {user === null ? (
          <>
            <li>
              <Link
                to="/register"
                className="flex justify-center bg-[#40AA54] p-1 rounded-md  hover:bg-[#F7F7F7] border-2 gap-4 m-2 transition duration-500 active:text-neutral-500 text-center"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-[#40AA54] p-1 flex justify-center rounded-md hover:bg-[#F7F7F7] border-2 transition duration-500  text-neutral-900 active:text-neutral-500  gap-4 m-2"
              >
                Login
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="text-[18px] font-semibold cursor-pointer flex items-center">
              <img
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
                src={createImageFromInitials(
                  500,
                  user?.fullname,
                  getRandomColor()
                )}
                alt="img"
              />
            </li>
            <li className="p-4 hover:text-[#40AA54] text-[#16162E] active:text-[#40AA54] transition duration-500 focus:text-[#40AA54]">
              <AiOutlineLogout
                onClick={() => {
                  Logout();
                }}
                className="cursor-pointer text-[30px]"
              />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
