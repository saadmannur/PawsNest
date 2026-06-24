
import PetCardListings from '@/components/MyListings/PetCardListings';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { ImBlocked } from 'react-icons/im';

const MyListingPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    const res = await fetch(`http://localhost:5000/pet/email/${user?.email}`);
    const data = await res.json()
    console.log(data)

    const availableStatus = data.filter(item => item.petStatus === 'Available').length;
    const adaptedStatus = data.filter(item => item.petStatus === 'Adapted').length;


    return (
        <div className='container mx-auto '>
            <div className=' text-center p-5 mb-2 border border-gray-300 bg-white rounded-xl mr-1 m-1 lg:m-0'>
                <div className='text-3xl font-bold flex justify-center items-center gap-2'>
                    <h2>My Listing</h2>
                </div>
                <p className='text-gray-500 mt-1'>Manage your pet listing and adoption request</p>
                <Link href={'/add-pet'}>
                    <Button variant='outline' className={'bg-[#f69b03] mt-2 text-white'}>+ Add Now</Button>
                </Link>
            </div>
            <div className=' grid grid-cols-3 gap-3 mr-1 m-1 lg:m-0 lg:pt-5'>
                <div className='bg-[#f5ede0] text-center border border-gray-300  rounded-2xl p-4'>
                    <p className='text-black text-lg font-bold'>{data.length}</p>
                    <h2 className='text-black text-lg font-bold'>Total Listings</h2>
                </div>

                <div className='bg-[#f5ede0] text-center border border-gray-300 rounded-2xl p-4'>
                    <p className='text-green-700 text-lg font-bold'>{availableStatus}</p>
                    <h2 className='text-green-700 text-lg font-bold'>Available</h2>
                </div>

                <div className='bg-[#f5ede0] text-center  border border-gray-300 rounded-2xl p-4'>
                    <p className='text-[#f69b03] text-lg font-bold'>{adaptedStatus}</p>
                    <h2 className='text-[#f69b03] text-lg font-bold'>Adopted</h2>
                </div>
            </div>

            <div className=' mt-5  mr-1'>
                {
                    data.length === 0 ?

                        <div className=' mb-2 border border-gray-300 bg-white rounded-xl mr-1 m-1 lg:m-0 flex flex-col items-center text-center p-10 space-y-5'>
                            <div className='text-3xl text-gray-500 font-bold flex justify-center items-center gap-2'>
                                <h2>Your Listing is Empty</h2>
                            </div>
                            <div className="w-18 h-18 rounded-full bg-gray-200 flex items-center justify-center">
                                <ImBlocked className="text-gray-700 w-9 h-9" strokeWidth={1} />
                            </div>
                            <span className="text-xs font-medium bg-gray-200 text-gray-700 px-3 py-1 rounded-full tracking-wide">
                                Unavailable
                            </span>
                            <p className='text-gray-400'>Add pet for adaption</p>

                        </div> :

                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 m-1 lg:m-0'>
                            {
                                data.map(pet => <PetCardListings
                                    key={pet._id}
                                    petInfo={pet}
                                ></PetCardListings>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default MyListingPage;