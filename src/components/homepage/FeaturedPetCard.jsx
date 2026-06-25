import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { VscDebugBreakpointData } from 'react-icons/vsc';

const FeaturedPetCard = ({ pet }) => {

    const { petName, species, breed, age, gender, petImageUrl, _id } = pet;

    return (
        <div className=' shadow rounded-2xl flex flex-col'>
            <Image
                src={petImageUrl}
                alt={petName}
                width={300}
                height={300}
                className='mx-auto w-full h-[200px] rounded-t-2xl'
            ></Image>
            <div className='text-white border-x border-b border-gray-400 p-2 px-4 rounded-b-2xl flex-1 bg-[#005a55]'>
                <div>
                    <h2 className='text-3xl font-semibold'>{petName}</h2>
                    <h3 className='text-gray-200 text-sm mt-1'>{species}</h3>
                </div>
                <div className=' text-sm text-gray-200 mt-3'>
                    <p className='flex items-center gap-1'><span className='text-[#f69b03]'><VscDebugBreakpointData /></span>{breed}</p>
                    <p className='flex items-center gap-1'><span className='text-[#f69b03]'><VscDebugBreakpointData /></span>{gender}</p>
                    <p className='flex items-center gap-1'><span className='text-[#f69b03]'><VscDebugBreakpointData /></span>{age} Years Old</p>
                </div>
                
                <div className=' mt-1 pb-1 flex items-end justify-end'>
                    <div>
                        <Link href={`/all-pets/${_id}`}><Button variant='outline' className={' text-white'}>View Details</Button></Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FeaturedPetCard;