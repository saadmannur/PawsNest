import React from 'react';
import { FaPaw } from 'react-icons/fa';

const loading = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-[#FFFFFF]">
            <div className="relative flex items-center justify-center">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#f69b03]/20 border-t-[#f69b03]" />
                <FaPaw className="absolute text-2xl text-[#f69b03]" />
            </div>
        </div>
    );
};

export default loading;