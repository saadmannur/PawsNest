
import React from 'react';
import { FaPlus, FaRegHeart } from 'react-icons/fa';
import { LuClipboardList } from 'react-icons/lu';
import { MdMenu } from 'react-icons/md';
import DashboardLinks from './DashboardLinks';

const LeftSideBar = () => {
    return (
        <div className='bg-[#005a55] lg:h-screen text-white rounded-tl-4xl rounded-tr-4xl lg:rounded-tr-lg px-10 pt-5 sticky pb-2 ml-1'>
            <div className='flex justify-baseline items-center gap-1 lg:mb-6'>
                <MdMenu />
                <p>MENU</p>
            </div>
            <div className='lg:space-y-3'>
                <div>
                    <DashboardLinks href={'/dashboard'}>
                        <LuClipboardList />
                        My Request
                    </DashboardLinks>
                </div>
                <div>
                    <DashboardLinks href={'/add-pet'}>
                        <FaPlus />
                        Add Pet
                    </DashboardLinks>
                </div>
                <div>
                    <DashboardLinks href={'/my-listing'}>
                            <FaRegHeart />
                            My Listings
                    </DashboardLinks>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;