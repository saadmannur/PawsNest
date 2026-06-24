'use client'

import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5ede0] px-6">
            <div className="text-center max-w-lg">
                {/* 404 Number */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-[#f69b03]">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-600 text-lg">
                    The page you are looking for does not exist or has been moved.
                    Lets get you back on track.
                </p>

                {/* Illustration */}
                <div className="my-8">
                    <span className="text-7xl">🐾</span>
                </div>

                {/* Button */}
                <Link href="/">
                    <button className="bg-[#f69b03] hover:opacity-90 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;