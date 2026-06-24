'use client'

import Link from 'next/link';
import React from 'react';
import { FiAlertCircle,  FiRefreshCw } from 'react-icons/fi';

const ErrorPage = (error, reset) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5ede0] px-4">
            <div className="w-full max-w-md text-center">

                {/* Error Icon */}
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#f69b03]/10">
                    <FiAlertCircle className="text-5xl text-[#f69b03]" />
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-bold text-gray-800">
                    Something went wrong
                </h1>

                <p className="mt-3 text-gray-600">
                    An unexpected error occurred while loading this page.
                </p>

                {/* Error Message */}
                {error?.message && (
                    <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
                        <p className="text-sm text-red-600 break-words">
                            {error.message}
                        </p>
                    </div>
                )}

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f69b03] px-6 py-3 font-medium text-white transition hover:opacity-90"
                    >
                        <FiRefreshCw />
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                        Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;