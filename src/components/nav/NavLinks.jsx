'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({children, href}) => {

    const pathname = usePathname()

    const isActive = pathname === href ;


    return (
        <Link href={href}
            className={`${isActive && `font-bold border-b-2 pb-1 text-[#f69b03]`}`}
        >
            {children}
        </Link>
    );
};

export default NavLinks;