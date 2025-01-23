import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function Hero() {
    return (
        <div className='flex flex-col justify-center items-center my-20'>
            <div className='hidden lg:block'>
                <Image 
                    src='/images/googleMeet.png' 
                    alt="profile1" 
                    width={100} 
                    height={100}
                    className='h-[100px] object-cover rounded-full absolute right-36'
                />
                <Image 
                    src='/images/zoom.png' 
                    alt="profile2" 
                    width={100} 
                    height={100}
                    className='h-[100px] object-cover rounded-full absolute top-48 left-16'
                />
                <Image 
                    src='/images/teams.png' 
                    alt="profile3 " 
                    width={150} 
                    height={150}
                    className='h-[100px] object-cover rounded-full absolute bottom-20 left-36'
                />
                <Image 
                    src='/images/phoneCall.png' 
                    alt="profile4" 
                    width={100} 
                    height={100}
                    className='h-[100px] object-cover rounded-full absolute right-16 bottom-32' 
                />
            </div>
            <div className='text-center max-w-3xl'>
                <h2 className='font-bold text-[50px] sm:text-[60px] text-slate-700'>Organize Your Meetings Like Never Before</h2>
                <p className='text-xl mt-5 text-slate-500'>
                    MeetSync simplifies meeting management by bringing all your scheduling needs into one platform—keeping all 
                    your Zoom, Google Meet, and phone call details in one convenient place.
                </p>
                <div className='flex gap-4 flex-col mt-5'>
                    <h3 className='text-md font-semibold'>Sign Up Free with your Email or Google</h3>
                    <div className='flex justify-center gap-4'>
                        <Button className="flex justify-center items-center w-[200px] h-[50px] bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300">
                            Get Started
                        </Button>
                        <Button className="flex justify-center items-center gap-2 w-[200px] h-[50px] font-semibold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300">
                            <Image src='/images/google.png' alt='google' width={24} height={24}/>
                            Sign up with Google
                        </Button> 
                    </div>
                    <hr></hr>
                    <h2 className='font-semibold'><span className='text-primary'>Sign up Free with Email.</span> Start organizing your meetings today, absolutely free.</h2>
                </div>
            </div>
        </div>
    )
}