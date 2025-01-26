import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="md:flex-1 mb-4 md:mb-0 md:text-left">
                    <h2 className="text-lg font-semibold mb-2">About Us</h2>
                    <p className="text-sm text-gray-400 text-justify">
                        MeetSync is an innovative  
                        <b><span className='text-orange-400'> Meetings Organizer and Scheduling Solution </span></b>
                        designed to streamline collaboration and productivity. Simplifies meeting management by bringing 
                        all your scheduling needs into one convenient place.
                    </p>
                </div>

                <div className="md:flex-1 flex flex-col items-center mb-4 md:mb-0">
                    <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                    <ul className="space-y-2 text-sm text-center font-semibold">
                        <li>
                            <Link href="/" className="text-purple-400 hover:text-orange-400 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/product" className="text-purple-400 hover:text-orange-400 transition">
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link href="/aboutUs" className="text-purple-400 hover:text-orange-400 transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contactUs" className="text-purple-400 hover:text-orange-400 transition">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="md:flex-1 md:text-right">
                    <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                    <p className="text-sm text-gray-400">
                        Email:{" "}
                        <Link href="mailto:sakshammaggu80@gmail.com" className="hover:text-purple-300 transition">
                            sakshammaggu80@gmail.com
                        </Link>
                    </p>
                </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500 border-t border-gray-700 pt-4 font-semibold">
                &copy; {new Date().getFullYear()} <span className='text-blue-600'>MeetSync-Meetings Organizer and Scheduling Solution.</span> All rights reserved.
            </div>
        </footer>
    )
}