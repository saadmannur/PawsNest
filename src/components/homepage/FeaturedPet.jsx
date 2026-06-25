import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { SiTicktick } from 'react-icons/si';
import FeaturedPetCard from './FeaturedPetCard';
import Image from 'next/image';
import arrow from '@/assets/Arrow.png';

const FeaturedPet = async () => {

    const res = await fetch("http://localhost:5000/featured-pet")
    const featuredPets = await res.json()

    // console.log(featuredPets);


    return (
        <div className='container mx-auto my-10 mt-20 px-2'>
            <h2 className='text-4xl font-bold text-center mt-10 text-[#005a55] my-10'>Featured Pets</h2>
            <div className='relative lg:grid grid-cols-11'>
                <div className='space-y-4 lg:sticky top-20 self-start col-span-4 '>
                    <h2 className='text-3xl font-bold'>Meet Our Adorable Pets <br /> Looking for Forever Homes</h2>
                    <p className='text-gray-500 text-sm'>These wonderful pets are ready to bring joy, companionship, and unconditional love into your life.</p>
                    <div className='flex items-center gap-4 text-gray-500'>
                        <div className='flex items-center gap-1 text-sm'>
                            <span className='text-[#f69b03]'><SiTicktick /></span>
                            <p>Vaccinated</p>
                        </div>
                        <div className='flex items-center gap-1 text-sm'>
                            <span className='text-[#f69b03]'><SiTicktick /></span>
                            <p>Microchipped</p>
                        </div>
                        <div className='flex items-center gap-1 text-sm'>
                            <span className='text-[#f69b03]'><SiTicktick /></span>
                            <p>Spayed/Neutered</p>
                        </div>
                    </div>
                    <Link href={'/all-pets'}>
                        <Button variant='outline' className={'bg-[#f69b03] text-white mt-2'}>View All Pets</Button>
                    </Link>
                    <div>
                        <Image
                            src={arrow}
                            alt='arrow'
                            width={200}
                            height={200}
                        ></Image>
                    </div>
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 col-span-7'>
                    {
                        featuredPets.map(item => <FeaturedPetCard
                            key={item._id}
                            pet={item}
                        ></FeaturedPetCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedPet;