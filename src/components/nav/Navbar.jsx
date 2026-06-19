import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import NavLinks from './NavLinks';
import Link from 'next/link';
import { Button } from '@heroui/react';

const Navbar = () => {
    return (
        <div className='bg-[#f5ede0] rounded-b-2xl'>
            <nav className='container mx-auto mt-5 mb-2'>
                <div className="navbar bg-[#005a55] text-white shadow-sm rounded-full px-5">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-[#005a55] text-white">
                                <li><NavLinks href={'/'}>Home</NavLinks></li>
                                <li><NavLinks href={'/all-pets'}>All Pets</NavLinks></li>
                                <li><NavLinks href={'/my-requests'}>My Requests</NavLinks></li>
                                <li><NavLinks href={'/add-pet'}>Add Pet</NavLinks></li>
                            </ul>
                        </div>
                        <Image
                            src={logo}
                            alt='logo'
                            width={200}
                            height={200}
                        ></Image>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLinks href={'/'}>Home</NavLinks></li>
                            <li><NavLinks href={'/all-pets'}>All Pets</NavLinks></li>
                            <li><NavLinks href={'/my-requests'}>My Requests</NavLinks></li>
                            <li><NavLinks href={'/add-pet'}>Add Pet</NavLinks></li>

                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link href={'/login'}>
                            <Button variant='outline' className=" text-[#f69b03] font-bold ">Log in</Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;