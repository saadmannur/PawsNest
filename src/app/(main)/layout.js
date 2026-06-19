import Navbar from '@/components/nav/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>

            <Navbar></Navbar>
            {children}


        </>
    );
};

export default MainLayout;