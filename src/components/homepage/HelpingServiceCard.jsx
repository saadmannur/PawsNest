import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HelpingServiceCard = ({ service }) => {
    return (
        <div className="bg-[#075E59] rounded-2xl p-7 text-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#f69b03] flex items-center justify-center text-white text-lg mb-5">
                {service.icon}
            </div>

            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

            <p className="text-gray-200 leading-7 text-sm">
                {service.description}
            </p>

            <button className="mt-6 flex items-center gap-2 text-[#f69b03] font-semibold hover:gap-3 transition-all">
                Learn More
                <FaArrowRight />
            </button>
        </div>
    );
};

export default HelpingServiceCard;