import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {
	faAdd,
	faBoxOpen,
	faCartShopping,
	faReorder,
	faDashboard
} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from "react-redux";
import Logo from "../images/logo.png";

const Dashboard = () => {
const user = useSelector((state) => state.user.user)

    const sidebar = [
        {
            name: 'Dashboard',
            icon: faDashboard,
            path: '/dashboard'
        },
        {
            name: 'Categories',
            icon: faBoxOpen,
            path: '/dashboard/category-list'
        },
        {
            name: 'Products',
            icon: faCartShopping,
            path: '/dashboard/product-list'
        },
        {
            name: 'Add Product',
            icon: faAdd,
            path: '/dashboard/add-product'
        },
        {
            name: 'Add Category',
            icon: faAdd,
            path: '/dashboard/add-category'
        },
        {
            name: 'Orders',
            icon: faReorder,
            path: '/dashboard/order'
        }
    ];

    
  return (
    <div className="flex w-full">
    <div className="flex flex-col justify-between gap-4 border-r border-primary text-black px-4 w-fit">
        <div className="flex flex-col gap-2 justify-between">
            <div>
                <Link to="/">
                    <img
                        src={Logo}
                        alt="alt"
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full m-auto"
                    />
                </Link>
                <div>
                    <h1 className="text-2xl text-center">Admin</h1>
                </div>
            </div>
            <hr className="h-[2px] bg-slate-300" />
            <div className="flex flex-col gap-4">
                {sidebar.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center">
                        <FontAwesomeIcon
                            icon={item.icon}
                            className="text-xl md:text-2xl p-1"
                        />
                        <Link to={item.path}>{item.name}</Link>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        // const confirmed = confirm('Are you sure you want to logout?');
                        // if (confirmed) return
                    }}
                    className="w-full p-2 rounded  bg-slate-300"
                >
                    Logout
                </button>
            </div>
        </div>
    </div>
    <div className="flex-1 flex flex-col gap-3 p-4 overflow-x-auto">
        <div className="border-b py-2 flex justify-between border-primary">
            <h1>Welcome back {user?.fullname}</h1> <div>{user?.email}</div>
        </div> 
        <div className="min-w-screen">

            <Outlet/>
        </div>
    </div>
</div>
  )
}

export default Dashboard