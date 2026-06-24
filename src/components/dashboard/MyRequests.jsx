import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyRequests = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    // console.log(user)
    const res = await fetch(`http://localhost:5000/adapted-pet/email/${user?.email}`);
    const data = await res.json();
    console.log(data) 

    const pendingCount = data.filter(item => item.status === 'pending').length;
    const approvedCount = data.filter(item => item.status === 'approved').length;
    const rejectedCount = data.filter(item => item.status === 'rejected').length;

    

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
                    <p className='text-black text-lg font-bold'>{data.length}</p>
                    <h2 className='text-black text-lg font-bold'>Total</h2>
                </div>

                <div className='bg-[#f5ede0] text-center border border-gray-300 rounded-2xl p-4'>
                    <p className='text-[#f69b30] text-lg font-bold'>{pendingCount}</p>
                    <h2 className='text-[#f69b03] text-lg font-bold'>Pending</h2>
                </div>

                <div className='bg-[#f5ede0] text-center  border border-gray-300 rounded-2xl p-4'>
                    <p className='text-green-700 text-lg font-bold'>{approvedCount}</p>
                    <h2 className='text-green-700 text-lg font-bold'>Approve</h2>
                </div>
                <div className='bg-[#f5ede0] text-center  border border-gray-300 rounded-2xl p-4'>
                    <p className='text-red-700 text-lg font-bold'>{rejectedCount}</p>
                    <h2 className='text-red-700 text-lg font-bold'>Rejected</h2>
                </div>
            </div>
        </div>
    );
};

export default MyRequests;