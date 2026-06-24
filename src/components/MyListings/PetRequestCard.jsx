'use client'

import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import { RxCrossCircled } from 'react-icons/rx';
import { SiTicktick } from 'react-icons/si';

const PetRequestCard = ({ petRequest, petStatus, petStatus_id }) => {
    // console.log(petRequest);
    const router = useRouter();

    const { adapterName, status, adapterEmail, date, requestDate, _id } = petRequest;

    const [currentStatus, setCurrentStatus] = useState(status);

    const handleUpdateStatus = async (newStatus) => {
        const res = await fetch(`http://localhost:5000/adapted-pet/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                status: newStatus,
            })
        });
        const data = await res.json();
        // console.log(data)

        if (data.modifiedCount > 0) {
            setCurrentStatus(newStatus);
            router.refresh()
        }

        if (newStatus === 'approved'){
            const res = await fetch(`http://localhost:5000/pet/${petStatus_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    petStatus: 'Adapted',
                })
            });
            const data = await res.json()
            console.log(data)
        }
    }

    const statusConfig = {
        pending : {
            icon: <CiCircleInfo/>,
            className: " bg-orange-100 text-[#f69b03]",
        },
        approved : {
            icon: <SiTicktick />,
            className: " bg-green-100 text-green-700",
        },
        rejected : {
            icon: <RxCrossCircled />,
            className: " bg-red-100 text-red-700",
        }
    }

    return (
        <div className='border border-gray-300 text-black bg-[#f5ede0] rounded-xl p-2 mb-4'>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-bold'>{adapterName}</h2>
                <p className={`border px-3 rounded-full font-bold flex items-center gap-1 
                ${ statusConfig[currentStatus]?.className }`}>

                    {statusConfig[currentStatus]?.icon}
                    {currentStatus}</p>

            </div>
            <p>{adapterEmail}</p>
            <div>
                <p>Pickup Date: {date}</p>
                <p>Request Date:{requestDate}</p>
            </div>
            {
                currentStatus === 'pending' ?
                    <div className='flex justify-end items-end'>
                        <div className='flex justify-center items-center gap-3  mt-4'>
                            <Button onPress={() => handleUpdateStatus('rejected')} variant='outline' className={'text-red-700'}><RxCrossCircled />Reject</Button>

                            <Button onPress={() => handleUpdateStatus('approved')} variant='outline' className={'text-green-700'}><SiTicktick />Approve</Button>
                        </div>
                    </div> : <div></div>
            }
        </div>
    );
};

export default PetRequestCard;