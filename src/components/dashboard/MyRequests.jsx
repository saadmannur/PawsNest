import React from 'react';

const MyRequests = () => {
    return (
        <div className='container mx-auto'>
            <div className=' text-center p-5 mb-2 border border-gray-300 bg-white rounded-xl mr-1 m-1 lg:m-0'>
                <div className='text-3xl font-bold flex justify-center items-center gap-2'>
                    <h2>My Adaption Request</h2>
                </div>
                <p className='text-gray-500 mt-1'>Track the status off all your adaption request is here.</p>
            </div>
            <div className=' grid grid-cols-4 gap-3 mr-1 m-1 lg:m-0 lg:pt-5'>
                <div className='bg-[#f5ede0] text-center border border-gray-300  rounded-2xl p-4'>
                    <p>0</p>
                    <h2>Total</h2>
                </div>

                <div className='bg-[#f5ede0] text-center border border-gray-300 rounded-2xl p-4'>
                    <p>0</p>
                    <h2>Pending</h2>
                </div>

                <div className='bg-[#f5ede0] text-center  border border-gray-300 rounded-2xl p-4'>
                    <p>0</p>
                    <h2>Approve</h2>
                </div>
                <div className='bg-[#f5ede0] text-center  border border-gray-300 rounded-2xl p-4'>
                    <p>0</p>
                    <h2>Rejected</h2>
                </div>
            </div>
        </div>
    );
};

export default MyRequests;