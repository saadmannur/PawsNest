'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DashboardLinks = ({ children, href }) => {

    const pathname = usePathname()
    // console.log(pathname)

    const isActive = pathname === href;

    return (
        <Link href={href}
            className={`flex justify-baseline items-center gap-2 font-semibold rounded-full px-6 py-1 hover:bg-[#f69b03] ${isActive ? 'font-bold bg-[#f69b03]' : ''}`}
        >
            {children}
        </Link>
    );
};

export default DashboardLinks;