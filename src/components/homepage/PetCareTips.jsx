import React from 'react';
import { FaPaw, FaHeart, FaShieldDog, FaBone } from "react-icons/fa6";

const tips = [
    {
        id: 1,
        title: "Healthy Nutrition",
        description:
            "Provide balanced meals, clean drinking water, and avoid foods that are harmful to pets.",
        icon: <FaBone className="text-4xl text-[#f69b03]" />,
    },
    {
        id: 2,
        title: "Regular Exercise",
        description:
            "Daily walks, playtime, and mental stimulation help pets stay active and reduce stress.",
        icon: <FaPaw className="text-4xl text-[#f69b03]" />,
    },
    {
        id: 3,
        title: "Routine Vet Checkups",
        description:
            "Schedule vaccinations and regular health checkups to detect problems early.",
        icon: <FaShieldDog className="text-4xl text-[#f69b03]" />,
    },
    {
        id: 4,
        title: "Love & Attention",
        description:
            "Spend quality time with your pet every day to build trust and keep them emotionally happy.",
        icon: <FaHeart className="text-4xl text-[#f69b03]" />,
    },
];

const PetCareTips = () => {
    return (
        <div>
            <section className="bg-[#f5ede0] py-20 rounded-4xl">
                <div className="container mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-2xl mx-auto text-center mb-14">
                        <span className="text-[#f69b03] font-semibold uppercase tracking-widest">
                            Pet Care Tips
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                            Keep Your Pet Happy & Healthy
                        </h2>

                        <p className="text-gray-600 mt-5">
                            Every pet deserves proper care, nutrition, exercise, and lots of
                            love. Follow these essential tips to ensure your furry friend enjoys
                            a long, healthy, and joyful life.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {tips.map((tip) => (
                            <div
                                key={tip.id}
                                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#fff3df] flex items-center justify-center mb-6 group-hover:bg-[#f69b03] transition">
                                    <div className="group-hover:text-white transition">
                                        {tip.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                    {tip.title}
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    {tip.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PetCareTips;