"use client"; // Ensure it's a client component (if using Next.js)

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Button from './Button';


const Hero = () => {
    return (
        <div className=' h-screen bg-cover bg-center bg-fixed flex items-center relative before:content-[" "] before:block before:w-[100%] before:h-[100%] before:bg-black/50  before:absolute before:-bottom-0 before:-left-2' style={{ backgroundImage: "url('/header.jpg')" }} id='home'>
            <div className='container mx-auto px-4 relative z-30'>

             <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>
              </div>   
              <h1 className='text-5xl text-white'>I&apos;m Uttam Kumar</h1>
              <h4 className='text-2xl mt-3 text-white'>
              <Typewriter words={['Frontend Developer', 'UI Developer']} loop={true} cursor />
              </h4>
              <div className='bg-red-500 h-[2px] w-[40px] my-6'></div>
                <div className='text-white'>
                    <p className='text-2xl'>A Frontend Developer who writes clean, elegant, and efficient code.</p>
                </div>
                <Button  text='Learn More' link='#about'/>
             </div>
            
        </div>
    );
}

export default Hero;
