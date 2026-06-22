import PetAdaption from '@/components/petAdaption/PetAdaption';
import { auth } from '@/lib/auth';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiCircleInfo } from 'react-icons/ci';
import { FaCalendarAlt, FaRegHeart } from 'react-icons/fa';
import { FaLocationDot, FaUserLarge } from 'react-icons/fa6';
import { GiHealthCapsule } from 'react-icons/gi';
import { ImBlocked } from 'react-icons/im';
import { MdOutlinePets } from 'react-icons/md';

const PetDetailsPage = async ({ params }) => {
    const { petId } = await params;

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const sessionUser = session?.user?.email;

    const res = await fetch(`http://localhost:5000/pet/${petId}`);
    const data = await res.json()
    const { petName, vaccinationStatus, species, petImageUrl, ownerEmail, location, healthStatus, gender, description, age, adaptionFee, breed, } = data;

    return (
        <div className='container mx-auto grid grid-cols-5 gap-5 p-2'>
            {/* details */}
            <div className='col-span-3'>
                <div className=''>
                    <Image
                        src={petImageUrl}
                        alt={petName}
                        width={300}
                        height={300}
                        className='w-full h-[450] rounded-2xl'
                    ></Image>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <div>
                        <h2 className='text-3xl font-bold'>{petName}</h2>
                        <small>
                            <div className='flex gap-1 mt-1'>
                                <p className='border px-3 rounded-full font-bold bg-orange-100 text-[#f69b03]'>{species}</p>
                                <h3 className='border px-3 rounded-full font-bold bg-orange-100 text-[#f69b03]'>{breed}</h3>
                                <p className='border px-3 rounded-full font-bold bg-orange-100 text-[#f69b03]'>{gender}</p>
                            </div>
                        </small>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-500'>Adaption Fee</h3>
                        <p className='text-3xl font-bold text-[#f69b03]'>${adaptionFee}</p>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-2 mt-5'>
                    <div className='bg-[#005a55] rounded-2xl text-white p-2'>
                        <div className='flex justify-baseline items-baseline gap-1 '>
                            <span className='text-[#f69b03] text-sm'><MdOutlinePets /></span>
                            <div>
                                <p className='text-sm text-gray-300'>Species</p>
                                <h3 className='text-lg font-semibold'>{species}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#005a55] rounded-2xl text-white p-2'>
                        <div className='flex justify-baseline items-baseline gap-1 '>
                            <span className='text-[#f69b03] text-sm'><MdOutlinePets /></span>
                            <div>
                                <p className='text-sm text-gray-300'>Breed</p>
                                <h3 className='text-lg font-semibold'>{breed}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#005a55] rounded-2xl text-white p-2'>
                        <div className='flex justify-baseline items-baseline gap-1 '>
                            <span className='text-[#f69b03] text-sm'><FaCalendarAlt /></span>
                            <div>
                                <p className='text-sm text-gray-300'>Age</p>
                                <h3 className='text-lg font-semibold'>{age}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#005a55] rounded-2xl text-white p-2'>
                        <div className='flex justify-baseline items-baseline gap-1 '>
                            <span className='text-[#f69b03] text-sm'><FaUserLarge /></span>
                            <div>
                                <p className='text-sm text-gray-300'>Gender</p>
                                <h3 className='text-lg font-semibold'>{gender}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#005a55] rounded-2xl text-white p-2'>
                        <div className='flex justify-baseline items-baseline gap-1 '>
                            <span className='text-[#f69b03] text-sm'><FaLocationDot /></span>
                            <div>
                                <p className='text-sm text-gray-300'>Location</p>
                                <h3 className='text-lg font-semibold'>{location}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#005a55] rounded-2xl text-white p-2'>
                        <div className='flex justify-baseline items-baseline gap-1 '>
                            <span className='text-[#f69b03] text-sm'><BsCurrencyDollar /></span>
                            <div>
                                <p className='text-sm text-gray-300'>Adaption Fee</p>
                                <h3 className='text-lg font-semibold'>${adaptionFee}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#005a55] rounded-2xl text-white p-2'>
                        <div className='flex justify-baseline items-baseline gap-1 '>
                            <span className='text-[#f69b03] text-sm'><FaRegHeart /></span>
                            <div>
                                <p className='text-sm text-gray-300'>Health Status</p>
                                <h3 className='text-lg font-semibold'>{healthStatus}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#005a55] rounded-2xl text-white p-2'>
                        <div className='flex justify-baseline items-baseline gap-1 '>
                            <span className='text-[#f69b03] text-sm'><GiHealthCapsule /></span>
                            <div>
                                <p className='text-sm text-gray-300'>Vaccination Status</p>
                                <h3 className='text-lg font-semibold'>{vaccinationStatus}</h3>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='space-y-2 mt-3'>
                    <h2 className='text-2xl font-bold'>About {petName}</h2>
                    <p className='text-gray-500'>{description}</p>
                </div>
            </div>

            {/* adaption */}
            <div className='col-span-2'>
                {
                    ownerEmail === sessionUser ?
                    
                        <div className='ml-10 mr-5'>
                            <Card className="rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto">
                                <div className="flex flex-col items-center text-center p-10 space-y-5">
                                    <div className="w-18 h-18 rounded-full bg-red-50 flex items-center justify-center">
                                        <ImBlocked className="text-red-700 w-9 h-9" strokeWidth={1} />
                                    </div>
                                    <span className="text-xs font-medium bg-red-50 text-red-700 px-3 py-1 rounded-full tracking-wide">
                                        Not available
                                    </span>
                                    <div className="space-y-1">
                                        <h2 className="text-xl font-medium text-gray-900">
                                            You cannot adopt {petName}
                                        </h2>
                                        <p className="text-sm text-gray-500 leading-relaxed">
                                            <span className="font-medium text-gray-700">{petName}</span> is listed
                                            under your account. You are not eligible to adopt your own listing.
                                        </p>
                                    </div>
                                    <div className="w-full flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-left">
                                        <CiCircleInfo className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                                        <p className="text-xs text-gray-500 leading-relaxed">
                                            If you had like to transfer or remove this listing, you can manage it
                                            from your dashboard.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>  :

                        <PetAdaption petInfo={data}></PetAdaption>
                }
            </div>
        </div>
    );
};

export default PetDetailsPage;