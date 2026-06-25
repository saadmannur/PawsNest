import React from 'react';
import { FaHeart, FaHome, FaPaw, FaShieldAlt } from 'react-icons/fa';

const WhyAdoptPet = () => {

    const reasons = [
        {
            icon: <FaHeart />,
            title: 'Save a Life',
            description:
                'By adopting a pet, you give an animal a second chance at a happy and loving life.',
        },
        {
            icon: <FaHome />,
            title: 'Find a Loyal Companion',
            description:
                'Pets provide unconditional love, emotional support, and lifelong companionship.',
        },
        {
            icon: <FaShieldAlt />,
            title: 'Support Animal Welfare',
            description:
                'Adoption helps reduce overcrowding in shelters and supports responsible pet care.',
        },
        {
            icon: <FaPaw />,
            title: 'Bring Joy to Your Family',
            description:
                'A pet can bring happiness, laughter, and unforgettable memories to your home.',
        },
    ];

    return (
        <div>
            <section className="bg-[#f5ede0] py-20 rounded-4xl">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-4xl font-bold text-[#005a55] mb-4">
                            Why Adopt a Pet?
                        </h2>

                        <p className="text-gray-600 text-lg">
                            Pet adoption is more than bringing home an animal—it’s
                            about creating a lifelong bond and giving a deserving pet
                            the loving home they deserve.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-full bg-[#f69b03]/10 flex items-center justify-center text-[#f69b03] text-2xl mb-5">
                                    {reason.icon}
                                </div>

                                <h3 className="text-xl font-bold text-[#005a55] mb-3">
                                    {reason.title}
                                </h3>

                                <p className="text-gray-600">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyAdoptPet;