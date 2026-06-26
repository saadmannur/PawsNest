import React from 'react';
import { FaPaw } from 'react-icons/fa';

const loading = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-[#f5ede0]">
            <div className="relative flex items-center justify-center">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#005a55]/20 border-t-[#005a55]" />
                <FaPaw className="absolute text-2xl text-[#005a55]" />
            </div>
        </div>
    );
};

export default loading;