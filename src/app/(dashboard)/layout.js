import LeftSideBar from '@/components/dashboard/LeftSideBar';
import Navbar from '@/components/nav/Navbar';
import React from 'react';

export const metadata = {
    title: "Dashboard",
    description: "This a pet adoption platform",
};

const DashboardLayout = ({ children }) => {

    return (
        <>

            <Navbar></Navbar>
            <div className='container mx-auto lg:grid grid-cols-14 gap-4'>
                <div className='col-span-3'><LeftSideBar></LeftSideBar></div>
                <div className='col-span-11'>{children}</div>
            </div>


        </>
    );
};

export default DashboardLayout;