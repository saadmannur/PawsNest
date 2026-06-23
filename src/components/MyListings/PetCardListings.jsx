import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiUsers } from 'react-icons/hi';
import {  MdOutlineRemoveRedEye } from 'react-icons/md';
import EditWithModal from './EditWithModal';
import DeleteAlert from './DeleteAlart';



const PetCardListings = ({ petInfo }) => {

    const { petName, petImageUrl, breed, adaptionFee, age, gender, location, species, _id } = petInfo;

    return (
        <div className=' shadow rounded-2xl flex flex-col'>
            <Image
                src={petImageUrl}
                alt={petName}
                width={300}
                height={300}
                className='mx-auto w-full h-[150px] rounded-t-2xl'
            ></Image>
            <div className=' border-x border-b border-gray-300 p-2 rounded-b-2xl flex-1 bg-[#f5ede0]'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl font-semibold'>{petName}</h2>
                    <p className='text-2xl font-semibold text-[#f69b03]'>${adaptionFee}</p>
                </div>

                <div className='flex justify-between items-center text-sm text-gray-500'>
                    <h3>{species}</h3>
                    <p><span>0</span> Request</p>
                </div>
                
                <div className='grid grid-cols-2 gap-2 lg:gap-3 py-2'>
                    <div className='col-span-1'>
                        <Link href={`/all-pets/${_id}`}>
                            <Button variant='outline' className={' w-full'}><MdOutlineRemoveRedEye />View</Button>
                        </Link>
                    </div>
                    <div className='col-span-1'>
                        <EditWithModal petInfo={petInfo}></EditWithModal>
                    </div>
                    <div className='col-span-1'>
                        <Button variant='outline' className={'w-full'}><HiUsers />Request</Button>
                    </div>
                    <div className='col-span-1'>
                        <DeleteAlert petInfo={petInfo}></DeleteAlert>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default PetCardListings;