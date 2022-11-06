import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FaHome, FaProductHunt, FaShoppingBag } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-gray-600 text-white border-b border-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-600 text-white rounded-box w-52">
                            <li><Link className='hover:text-orange-600' to='/'><FaHome />Home</Link></li>
                            <li><Link className='hover:text-orange-600' to='/about'>About</Link></li>
                            <li><Link className='hover:text-orange-600' to='/products'><FaProductHunt />Products</Link></li>
                            <li><Link className='hover:text-orange-600' to='/order'><FaShoppingBag />Order</Link></li>
                        </ul>
                    </div>
                    {/* Project Logo Section  */}
                    <div className='flex justify-center items-center'>
                        <Link className='w-28' to='/'>
                            <img src={logo} alt="" />
                        </Link>
                        <Link to='/'><h1 className='text-3xl font-semibold'>Wheelevices</h1></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link className='hover:text-orange-600' to='/'><FaHome />Home</Link></li>
                        <li><Link className='hover:text-orange-600' to='/about'>About</Link></li>
                        <li><Link className='hover:text-orange-600' to='/products'><FaProductHunt />Products</Link></li>
                        <li><Link className='hover:text-orange-600' to='/order'><FaShoppingBag />Order</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* This section will change after authentication is done */}
                    <div className='p-2'>
                        <Link className='hover:text-orange-600 p-2' to='/auth/login'>Login</Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        {/* Profile Picture Section */}
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-600 text-white rounded-box w-52">
                            <li><Link className='hover:text-orange-600' to='/profile'>Profile</Link></li>
                            <li><button className='hover:text-orange-600'><FiLogOut />Logout</button></li>
                        </ul>
                    </div>
                    {/* This section will change after authentication is done */}
                </div>
            </div>
        </div>
    );
};

export default Header;