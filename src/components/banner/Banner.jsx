import React from 'react';
import happy from '@/assets/happy.jpg'
import dachshund from '@/assets/dachshund.jpg'
import scottish from '@/assets/scottish.jpg'
import adapt from '@/assets/Adop.png'
import hi from '@/assets/Highligh.png'
import heart from '@/assets/Heart.png'
import Image from 'next/image';
import { Button } from '@heroui/react';

const Banner = () => {
    return (
        <div className='bg-[#f5ede0] rounded-b-4xl'>
            <div className='container mx-auto py-10 lg:flex justify-between items-center p-2 space-y-5'>
                <div className='space-y-6'>
                    <h2 className='text-7xl font-semibold'>Every Paw <br /> Deserves a <br /> <span className='text-[#02a25f]'>Loving</span> Home</h2>
                    <p className='text-gray-500'>Every adoption creates a new beginning. Discover adorable pets <br /> ready to fill your home with unconditional love, loyalty, and joy.</p>
                    <div>
                        <Button variant='outline' className={'bg-[#f69b03] text-white p-5'}>Adapt Now</Button>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-10'>
                    <div className=''>
                        <Image
                            src={scottish}
                            alt='cat'
                            width={300}
                            height={200}
                            className='rounded-full'
                        ></Image>
                        <Image
                            src={heart}
                            alt='heart'
                            width={50}
                            height={50}
                        ></Image>
                        <Image
                            src={dachshund}
                            alt='dog'
                            width={300}
                            height={100}
                            className='rounded-4xl'
                        ></Image>
                    </div>
                    <div>
                        <Image
                            src={hi}
                            alt='highlight'
                            width={100}
                            height={100}
                        ></Image>
                        <Image
                            src={happy}
                            alt='happy dog'
                            width={300}
                            height={200}
                            className='rounded-full'
                        ></Image>
                        <Image
                            src={adapt}
                            alt='dog adapt'
                            width={200}
                            height={100}
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;