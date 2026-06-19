import Image from 'next/image';
import logo from '@/assets/logo.png'
import React from 'react';
import { Button, Input, Label } from '@heroui/react';
import { FiYoutube } from 'react-icons/fi';
import { CiTwitter } from 'react-icons/ci';
import { LiaFacebook } from 'react-icons/lia';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#002523] rounded-t-4xl'>
            <div className='container mx-auto p-2'>
                <div className='lg:flex justify-between items-center py-6 lg:py-20 border-b border-dotted border-gray-400 space-y-6 lg:space-y-0'>
                    <div>
                        <Image
                            src={logo}
                            alt='logo'
                            width={300}
                            height={300}
                            className='mx-auto lg:mx-0'
                        ></Image>
                    </div>
                    <div className='space-y-5'>
                        <h2 className='text-2xl text-white font-semibold'>Stay Informed With Our Newsletter</h2>
                        <div className='relative'>
                            <Input className="w-full h-15" id="name" placeholder="Your Email Address" type="text" />
                            <Button variant='outline' className={'bg-[#f69b03] text-white absolute right-1 top-3'}>Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className='lg:flex justify-between items-center py-6 lg:py-20 space-y-6 lg:space-y-0'>
                    <div className='space-y-10'>
                        <div>
                            <h3 className='text-xl font-semibold text-white mb-2'>Our Location</h3>
                            <h2 className='text-3xl font-semibold text-[#f69b03]'>2/2 Road, Agrabad, Chattogram</h2>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-white mb-2'>Emergency Hotline</h3>
                            <h2 className='text-3xl font-semibold text-[#f69b03]'>01648502726</h2>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold text-white mb-2'>Social</h3>
                            <div className='text-4xl text-[#f69b03] flex justify-baseline items-center gap-4'>
                                <FaInstagram />
                                <LiaFacebook />
                                <CiTwitter />
                                <FiYoutube />
                            </div>
                        </div> 
                    </div>
                    <div className='flex justify-center items-center gap-28'>
                        <div className='space-y-5'>
                            <h2 className='text-3xl font-semibold text-white'>Quick Link</h2>
                            <p className=' text-gray-400'>About us</p>
                            <p className=' text-gray-400'>Services</p>
                            <p className=' text-gray-400'>Adaptions</p>
                            <p className=' text-gray-400'>Donations</p>
                            <p className=' text-gray-400'>Our Team</p>
                        </div>
                        <div className='space-y-5'>
                            <h2 className='text-3xl font-semibold text-white'>Help & Support</h2>
                            <p className=' text-gray-400'>Contract us</p>
                            <p className=' text-gray-400'>Terms & Conditions</p>
                            <p className=' text-gray-400'>Privacy Policy</p>
                            <p className=' text-gray-400'>Support</p>
                            <p className=' text-gray-400'>FAQs</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#011c1a] text-center'>
                <div className='container mx-auto p-2 text-gray-400 lg:flex justify-between items-center'>
                    <p><small>Animal Shelter & Pet Rescue Template Kit</small></p>
                    <p><small> Copyright © 2023 Jegtheme. All rights reserved.</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;