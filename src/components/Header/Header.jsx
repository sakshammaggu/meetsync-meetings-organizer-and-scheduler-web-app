import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

export default function Header() {
    return (
        <div>
            <div className='flex items-center justify-between p-5 shadow-md'>
                <Image 
                    src="/images/logo.png"
                    alt='Logo'
                    height={100}
                    width={100}
                    className='w-[100px] md:w-[100px]'
                />

                <ul className='hidden md:flex gap-14 font-medium text-lg'>
                    <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Home</li>
                    <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Product</li>
                    <li className='hover:text-primary transition-all duration-300 cursor-pointer'>About Us</li>
                    <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Contact Us</li>
                </ul>

                <div className='flex gap-5'>
                    <Button variant="ghost">Login</Button>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    )
}