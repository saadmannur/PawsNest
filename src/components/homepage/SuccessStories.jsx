import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import manWithDog from '@/assets/man-and-his-dog.jpg'
import pleasant from '@/assets/pleasant.jpg'
import young from '@/assets/young.jpg'

const SuccessStories = () => {

    const stories = [
        {
            id: 1,
            name: 'Bella',
            owner: 'Sarah Ahmed',
            image: pleasant,
            story: 
                'Bella spent months waiting for a family. Today, she enjoys long walks, endless cuddles, and a loving home that she truly deserves.',
        },
        {
            id: 2,
            name: 'Max',
            owner: 'John Smith',
            image: manWithDog,
            story:
                'Max was rescued from a difficult situation and found his forever family through adoption. He is now happy, healthy, and loved.',
        },
        {
            id: 3,
            name: 'Jimmy',
            owner: 'Emily Johnson',
            image: young,
            story: 
                'Jimmy quickly became the heart of her new family. Her playful personality brings joy and laughter to everyone around her.',
        },
    ];

    return (
        <div>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <span className="text-[#f69b03] font-semibold uppercase tracking-wider">
                            Happy Tails
                        </span>

                        <h2 className="text-4xl font-bold text-[#005a55] mt-3 mb-4">
                            Success Stories
                        </h2>

                        <p className="text-gray-600 text-lg">
                            Every adoption creates a beautiful story. Meet some of
                            the pets who found their forever homes and the families
                            whose lives they changed.
                        </p>
                    </div>

                    {/* Stories Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {stories.map((story) => (
                            <div
                                key={story.id}
                                className="bg-[#f5ede0] rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="relative  overflow-hidden">
                                    <Image
                                        src={story.image}
                                        alt={story.name}
                                        width={300}
                                        height={600}
                                        className=" w-full group-hover:scale-110 transition h-[500] duration-500"
                                    />
                                </div>

                                <div className="p-8">
                                    <FaQuoteLeft className="text-[#f69b03] text-3xl mb-4" />

                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {story.story}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#005a55]">
                                                {story.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                Adopted by {story.owner}
                                            </p>
                                        </div>

                                        <div className="flex text-[#f69b03] gap-1">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SuccessStories;