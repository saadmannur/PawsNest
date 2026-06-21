'use client'

import { usePathname } from "next/navigation";

const NavColor = ({children}) => {

    const pathname = usePathname()
    const isColored = pathname === '/'

    return (
        <div className={`${isColored ? 'bg-[#f5ede0]' : ''}`}>
            {children}
        </div>
    );
};

export default NavColor;