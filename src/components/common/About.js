import React from 'react';
import Heading from './Heading';
import Image from 'next/image';
import { FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from './Button';


const About = () => {
    return (
        <section className='container mx-auto pt-10 pb-20 px-4' id='about'>
            <Heading title='About Me'/>
            <div className='flex gap-10 '>
                <div className='relative w-[400px] h-[w-[400px] hidden md:block'>
                    <Image src='/about.jpg' alt="about me" width={400} height={400} className='rounded-[4px]' />
                </div>
                <div className='flex flex-col mr-3'>
                <h3 className='font-bold text-red-500 mt-0 mb-2 text-1xl'>Who am i?</h3>
                        <h2 className='font-bold text-2xl mb-3'>I&apos;m frontend Developer</h2>

                        <p>Hi! My name is Uttam Kumar. I am a frontend developer with a solid understanding of React, Next.js, and Tailwind CSS. I specialize in creating clean, accessible, and efficient user interfaces. Currently, I am looking for new opportunities to combine my passion for technology with my love for design.
                        </p>
                    <div className='flex flex-col mt-4'>
                        <div className='w-full gap-2 md:w-[500px] grid grid-cols-2  font-medium'>
                            <span className='flex gap-4 items-center'> <FaLocationArrow className='text-red-500' />New Delhi</span>
                            <span className='flex gap-4 items-center'> <BsFillTelephoneFill className='text-red-500'/>+91 9560305437</span>
                            <span className='flex gap-4 items-center'><FaBook className='text-red-500 ' />Bachelor Degree</span>
                            <span className='flex gap-4 items-center'> <MdEmail className='text-red-500'/>uttamdesigner@gmail
                            </span>
                        </div>
                       
                        <div className='w-[150px]'>
                            <Button link='#contact' text='Hire Me'/>
                        </div>

                    </div>
                </div>
            </div>
        </section>




    );
}

export default About;
