import React from 'react';
import happy from '@/assets/happy.jpg'
import dachshund from '@/assets/dachshund.jpg'
import scottish from '@/assets/scottish.jpg'
import adapt from '@/assets/Adop.png'
import hi from '@/assets/Highligh.png'
import heart from '@/assets/Heart.png'
import Image from 'next/image';
import { Button } from '@heroui/react';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='bg-[#f5ede0] rounded-b-4xl'>
            <div className='container mx-auto py-10 lg:flex justify-between items-center p-2 space-y-5'>
                <div className='space-y-6'>
                    <h2 className='text-7xl font-semibold'>Every Paw <br /> Deserves a <br /> <span className='text-[#02a25f]'>Loving</span> Home</h2>
                    <p className='text-gray-500'>Every adoption creates a new beginning. Discover adorable pets <br /> ready to fill your home with unconditional love, loyalty, and joy.</p>
                    <Link href={'/all-pets'}>
                        <Button variant='outline' className={'bg-[#f69b03] text-white'}>Adopt Now</Button>
                    </Link>
                </div>
                <div className='flex justify-center items-center gap-10'>
                    <div className=''>
                        <div className="relative w-[250px] h-[250px] group overflow-hidden rounded-full">
                            <Image
                                src={scottish}
                                alt="cat"
                                fill
                                className="object-cover"
                                sizes=''
                            />

                            {/* Green Overlay */}
                            <div className="absolute inset-0 bg-[#005a55]/70 opacity-0 m-3 rounded-full group-hover:opacity-100 transition-all duration-500 flex items-end justify-center">
                                <h3 className="text-white text-xl text-center mb-5 italic">
                                    Dumbo <br /><span className='text-[#f69b03]  text-sm'>Munchkin Cat</span>
                                </h3>
                            </div>
                        </div>
                        <Image
                            src={heart}
                            alt='heart'
                            width={50}
                            height={50}
                            sizes=''
                            className='w-12 h-auto'
                        ></Image>
                        <div className="relative w-[250px] h-[250px] group overflow-hidden rounded-4xl">
                            <Image
                                src={dachshund}
                                alt="cat"
                                fill
                                className="object-cover"
                                sizes=''
                            />

                            {/* Green Overlay */}
                            <div className="absolute inset-0 bg-[#005a55]/70 opacity-0 m-3 rounded-4xl group-hover:opacity-100 transition-all duration-500 flex items-end justify-center">
                                <h3 className="text-white text-xl text-center mb-5 italic">
                                    Snickers <br /><span className='text-[#f69b03]  text-sm'>Dachshund Dog</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={hi}
                            alt='highlight'
                            width={100}
                            height={100}
                            className='w-24 h-auto'
                        ></Image>
                        <div className="relative  group overflow-hidden">
                            <Image
                                src={happy}
                                alt="cat"
                                
                                width={300}
                                height={200}
                                className="object-cover rounded-full w-72 h-auto"
                            />

                            {/* Green Overlay */}
                            <div className="absolute inset-0 bg-[#005a55]/70 opacity-0 m-3 rounded-full group-hover:opacity-100 transition-all duration-300 flex items-end justify-center">
                                <h3 className="text-white text-xl text-center mb-5 italic">
                                    Muffin <br /><span className='text-[#f69b03]  text-sm'>Irish Wolfhound</span>
                                </h3>
                            </div>
                        </div>
                        <Image
                            src={adapt}
                            alt='dog adapt'
                            width={200}
                            height={100}
                            className='w-48 h-auto'
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;