import React from 'react';
import {
    FaPaw,
    FaHome,
    FaSearch,
    FaStethoscope,
    FaDonate,
    FaDog,
    FaArrowRight,
} from "react-icons/fa";
import HelpingServiceCard from './HelpingServiceCard';

const services = [
    {
        id: 1,
        title: "Adoption Services",
        description:
            "Find loving homes for rescued pets through our safe and caring adoption process.",
        icon: <FaPaw />,
    },
    {
        id: 2,
        title: "Foster Programs",
        description:
            "Become a temporary caregiver and help pets prepare for their forever homes.",
        icon: <FaHome />,
    },
    {
        id: 3,
        title: "Lost & Found",
        description:
            "Reconnect missing pets with their families through our community network.",
        icon: <FaSearch />,
    },
    {
        id: 4,
        title: "Veterinary Care",
        description:
            "Access vaccinations, health checkups, and emergency medical assistance.",
        icon: <FaStethoscope />,
    },
    {
        id: 5,
        title: "Pet Donations",
        description:
            "Support rescued animals by donating food, medicine, and essential supplies.",
        icon: <FaDonate />,
    },
    {
        id: 6,
        title: "Behavioral Training",
        description:
            "Professional training programs to improve obedience and social behavior.",
        icon: <FaDog />,
    },
];


const HelpingAnimals = () => {
    return (
        <div>
            <section className="py-20">
                <div className="container mx-auto px-5">
                    <div className="grid lg:grid-cols-4 gap-6 items-start">
                        <div className="lg:col-span-2 lg:pr-8 pt-6">
                            <p className="text-[#f69b03] font-semibold uppercase tracking-widest mb-3">
                                Our Services
                            </p>

                            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                                Helping Animals,
                                <br />
                                Building Community
                            </h2>

                            <p className="mt-6 text-gray-600 leading-8 max-w-lg">
                                We provide adoption support, veterinary care, foster programs,
                                training, and community services to ensure every rescued pet gets
                                the love and care they deserve.
                            </p>
                        </div>

                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
                            {
                                services.slice(0, 2).map(service => <HelpingServiceCard
                                    key={service.id}
                                    service={service}
                                ></HelpingServiceCard>)
                            }
                        </div>

                        <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {
                                services.slice(2).map(service => <HelpingServiceCard
                                    key={service.id}
                                    service={service}
                                ></HelpingServiceCard>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpingAnimals;