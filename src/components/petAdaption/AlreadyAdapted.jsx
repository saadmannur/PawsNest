import { Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { SiTicktick } from 'react-icons/si';

const AlreadyAdapted = ({ petName }) => {
    return (
        <div className='ml-10 mr-5'>
            <Card className="rounded-2xl border border-gray-200 shadow-sm max-w-md mx-auto">
                <div className="flex flex-col items-center text-center p-10 space-y-5">
                    <div className="w-18 h-18 rounded-full bg-green-100 flex items-center justify-center">
                        <SiTicktick className="text-green-700 w-9 h-9" strokeWidth={1} />
                    </div>
                    <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full tracking-wide">
                        Adopted
                    </span>
                    <div className="space-y-1">
                        <h2 className="text-xl font-medium text-gray-900">
                            {petName} is Already Adopted 
                        </h2>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Your can choose adopt others. Click choose others for getting collects
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href={'/all-pets'}>
                            <Button variant='outline' className={'bg-[#f69b03] text-white'}>
                                Choose Others
                            </Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default AlreadyAdapted;