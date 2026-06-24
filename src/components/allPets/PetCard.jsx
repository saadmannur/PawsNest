import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlinePets } from 'react-icons/md';

const PetCard = ({ pet }) => {

    const { petName, petImageUrl, breed, adaptionFee, age, gender, location, species, _id } = pet;

    return (
        <div className=' shadow rounded-2xl flex flex-col'>
            <Image
                src={petImageUrl}
                alt={petName}
                width={300}
                height={300}
                className='mx-auto w-full h-[200px] rounded-t-2xl'
            ></Image>
            <div className='text-white border-x border-b border-gray-400 p-2 rounded-b-2xl flex-1 bg-[#005a55]'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl font-semibold'>{petName}</h2>
                    <p className=' text-sm text-gray-300'>{gender}</p>
                </div>
                
                <div className='flex justify-between items-center text-sm text-gray-300'>
                    <h3>{breed}</h3>
                    <p>{age} Years Old</p>
                </div>
                <div className='flex items-center gap-1 mt-2'>
                    <span className='text-[#f69b03] text-sm font-bold'><MdOutlinePets /></span>
                    <h3 className='text-sm text-gray-300 '>{species}</h3>
                </div>
                <div className='flex items-center gap-1'>
                    <span className='text-[#f69b03] text-sm font-bold'><FaLocationDot /></span>
                    <h3 className='text-sm text-gray-300'>{location}</h3>
                </div>

                <div className='mt-2 pb-3 border-b'>
                    <div>
                        <p className='text-3xl font-semibold'>${adaptionFee} <span className='text-sm text-gray-300'>Adoption Fee</span></p>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-3 pb-1'>
                    <div>
                        <Link href={`/all-pets/${_id}`}><Button variant='outline' className={' text-white'}>View Details</Button></Link>
                    </div>
                    <div>
                        <Link href={`/all-pets/${_id}`}>
                            <Button variant='outline' className={'bg-[#f69b03] text-white border-[#f69b03]'}>Adopt Now</Button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PetCard;