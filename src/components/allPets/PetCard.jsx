import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
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
                <div className='flex items-end gap-1'>
                    <h2 className='text-3xl font-semibold'>{petName}</h2>
                    <div className='flex justify-between items-center text-sm text-gray-300'>
                        <h3>({breed})</h3>
                    </div>
                </div>
                
                
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='flex items-center gap-1 mt-2'>
                            <span className='text-[#f69b03] text-sm font-bold'><MdOutlinePets /></span>
                            <h3 className='text-sm text-gray-300 '>{species}</h3>
                        </div>

                        <div className='flex items-center gap-1'>
                            <span className='text-[#f69b03] text-sm font-bold'><FaLocationDot /></span>
                            <h3 className='text-sm text-gray-300'>{location}</h3>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center gap-1'>
                            <span className='text-[#f69b03] text-sm font-bold'><FaUser /></span>
                            <h3 className='text-sm text-gray-300'>{gender}</h3>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='text-[#f69b03] text-sm font-bold'><FaCalendarAlt /></span>
                            <h3 className='text-sm text-gray-300'>{age} Years Old</h3>
                        </div>
                    </div>
                </div>
                
                <div className='mt-2 flex items-end gap-1'>  
                    <p className='text-3xl font-semibold'>${adaptionFee}</p>
                    <h3 className='text-sm mb-1 text-gray-300'> Adoption Fee</h3>
                </div>
            

                <div className=' mt-3 pb-1'>
                    {/* <div>
                        <Link href={`/all-pets/${_id}`}><Button variant='outline' className={' text-white'}>View Details</Button></Link>
                    </div> */}
                    
                    <div>
                        <Link href={`/all-pets/${_id}`}>
                            <Button variant='outline' className={'bg-[#f69b03] w-full text-white border-[#f69b03] h-8'}>Adopt Now</Button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PetCard;