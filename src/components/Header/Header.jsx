"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div>
            <div className='flex items-center justify-between p-3 shadow-md'>
                <Link href="/">
                    <Image
                        onClick={() => {
                            window.location.href = '/';
                        }}
                        src="/images/logo.png"
                        alt='MeetSync Logo'
                        height={100}
                        width={100}
                        className='w-[100px] md:w-[100px]'
                    />
                </Link>

                <nav className="hidden lg:flex items-center justify-center flex-1 space-x-14">
                    <Link href="/" className="text-lg hover:text-primary transition-all duration-300 cursor-pointer font-semibold">Home</Link>
                    <Link href="/product" className="text-lg hover:text-primary transition-all duration-300 cursor-pointer font-semibold">Product</Link>
                    <Link href="/aboutUs" className="text-lg hover:text-primary transition-all duration-300 cursor-pointer font-semibold">About Us</Link>
                    <Link href="/contactUs" className="text-lg hover:text-primary transition-all duration-300 cursor-pointer font-semibold">Contact Us</Link>
                </nav>

                <div className='hidden lg:flex gap-5'>
                    <Button className="text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300">Login</Button>
                    <Button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300">
                        Get Started
                    </Button>
                </div>

                <div className="flex lg:hidden ml-auto">
                    <Button
                        type="button"
                        onClick={toggleSidebar}
                        className="focus:outline-none text-white font-semibold"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </Button>
                </div>
            </div>

            {isSidebarOpen && (
                <div className="fixed inset-0 z-40 flex">
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        onClick={toggleSidebar}
                    ></div>

                    <div className="ml-auto w-64 bg-gray-900 h-full shadow-lg p-6 relative">
                        <Button
                            type="button"
                            onClick={toggleSidebar}
                            className="text-white mb-6 absolute top-4 right-4 focus:outline-none"
                            aria-label="Close sidebar"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </Button>

                        <nav className="space-y-4">
                            <Link href="/" className="block text-lg font-medium text-white hover:text-primary transition duration-300">Home</Link>
                            <Link href="/product" className="block text-lg font-medium text-white hover:text-primary transition duration-300">Product</Link>
                            <Link href="/aboutUs" className="block text-lg font-medium text-white hover:text-primary transition duration-300">About Us</Link>
                            <Link href="/contactUs" className="block text-lg font-medium text-white hover:text-primary transition duration-300">Contact Us</Link>

                            <div className="mt-4">
                                <Button className="w-full text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300 mb-3">
                                    Login
                                </Button>
                                <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300">
                                    Get Started
                                </Button>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
}