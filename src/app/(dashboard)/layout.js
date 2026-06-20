import LeftSideBar from '@/components/dashboard/LeftSideBar';
import Navbar from '@/components/nav/Navbar';
import React from 'react';

const DashboardLayout = ({ children }) => {

    return (
        <>

            <Navbar></Navbar>
            <div className='container mx-auto lg:flex gap-10'>
                <LeftSideBar></LeftSideBar>
                {children}
            </div>


        </>
    );
};

export default DashboardLayout;