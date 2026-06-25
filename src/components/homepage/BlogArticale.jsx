import React from 'react';
import beautiful from '@/assets/beautiful.jpg' 
import happ from '@/assets/happ.jpg' 
import homeless from '@/assets/homeless.jpg' 
import rescue from '@/assets/rescue.jpg' 
import Image from 'next/image';
import { FaRegCalendarAlt } from 'react-icons/fa';


const blogs = [
    {
        id: 1,
        image: beautiful,
        category: "Pet Adoption",
        title: "Why Adopting a Senior Pet Can Be Your Best Decision Ever",
        date: "October 6, 2023",
    },
    {
        id: 2,
        image: happ,
        category: "Pet Health",
        title: "Unraveling the Mystery of Cat Allergies: Causes and Solutions",
        date: "October 6, 2023",
    },
    {
        id: 3,
        image: homeless,
        category: "Rehabilitation",
        title: "Rescue, Rehabilitate, Release: The Journey of Saving Injured Wildlife",
        date: "October 6, 2023",
    },
    {
        id: 4,
        image: rescue,
        category: "Volunteer Stories",
        title: "Heartfelt Stories of Volunteers and the Animals They Serve",
        date: "October 6, 2023",
    },
];

const BlogArticale = () => {
    return (
        <div>
            <section className="py-24 bg-white">
                <div className="container mx-auto px-5">

                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-5xl font-bold text-[#1c2434]">
                            Our Latest Blog & Articles
                        </h2>

                        <p className="text-gray-500 mt-5 leading-8">
                            Discover expert pet care tips, inspiring adoption stories, and
                            practical advice to help you give every furry friend a happier,
                            healthier life.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-x-14 gap-y-12">
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="flex flex-col md:flex-row gap-5 group"
                            >

                                <div className="overflow-hidden rounded-2xl">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-[280px] h-[180px] object-cover rounded-2xl transition duration-500 group-hover:scale-105"
                                    />
                                </div>

 
                                <div className="flex-1">
                                    <span className="inline-block bg-[#075E59] text-white text-xs font-semibold px-4 py-2 rounded-md mb-4">
                                        {blog.category}
                                    </span>

                                    <h3 className="text-3xl font-bold leading-snug text-[#1c2434] hover:text-[#f69b03] transition cursor-pointer">
                                        {blog.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-[#f69b03] mt-5 text-sm">
                                        <FaRegCalendarAlt />
                                        <span>{blog.date}</span>
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

export default BlogArticale;