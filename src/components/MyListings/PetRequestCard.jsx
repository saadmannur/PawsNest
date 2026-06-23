import { Button } from '@heroui/react';
import React from 'react';
import { CiCircleInfo } from 'react-icons/ci';

const PetRequestCard = ({ petRequest }) => {
    // console.log(petRequest);

    const {
        adapterName, status, adapterEmail, date, requestDate } = petRequest;

    return (
        <div className='border border-gray-300 text-black bg-[#f5ede0] rounded-xl p-2 mb-4'>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-bold'>{adapterName}</h2>
                <p className='border px-3 rounded-full font-bold bg-orange-100 text-[#f69b03] flex items-center gap-1'><CiCircleInfo></CiCircleInfo> {status}</p>
            </div>
            <p>{adapterEmail}</p>
            <div>
                <p>Pickup Date: {date}</p>
                <p>Request Date:{requestDate}</p>
            </div>
            <div className='flex justify-end items-end'>
                <div className='flex justify-center items-center gap-3  mt-4'>
                    <Button variant='outline' className={'text-red-700'}>Reject</Button>
                    <Button variant='outline' className={'text-green-700'}>Approve</Button>
                </div>
            </div>
        </div>
    );
};

export default PetRequestCard;