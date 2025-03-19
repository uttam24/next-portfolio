'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FiDownload } from "react-icons/fi";
import { TfiMenu } from "react-icons/tfi";
import SideBar from './SideBar';
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
    const [isOpen, setIsopen] = useState(false);

    const toggleSidebar=()=>{
        setIsopen(!isOpen)
    }

    return (
      <>
        <div className='bg-white fixed top-0 w-[100%] z-50 shadow-2xs'>
            <div className='container mx-auto flex justify-between items-center py-4 px-4'>
                <div className='text-2xl font-bold italic'>
                    uttam kumar
                 </div>

                <div className='hidden md:flex gap-6'>
                    <Link href='#home' className='hover:text-blue-500'>
                        Home
                    </Link>
                    <Link href='#about' className='hover:text-blue-500'>
                        About
                    </Link>
                    <Link href='#resume' className='hover:text-blue-500'>
                        Resume
                    </Link>
                    <Link href='#project' className='hover:text-blue-500'>
                        Projects
                    </Link>
                    <Link href='#contact' className='hover:text-blue-500'>
                        Contact Us
                    </Link>
                </div>

                <Link href='/Resume02.pdf' className='hidden md:flex border  border-blue-600 px-4 py-2 text-blue-600 rounded-[5px] gap-2 items-center hover:bg-blue-600 hover:text-white transition duration-200'>
                 Download CV
                 <FiDownload />
                </Link>

                <div className='md:hidden text-[24px]'>
                    <TfiMenu onClick={toggleSidebar} />
                    <div className={`w-screen h-screen ${isOpen ? "fixed" : "hidden"} top-0 left-0 bg-gray-800 z-20 text-white grid place-items-center`}>
                        <div className='absolute top-0 right-0 mr-[20px] mt-[20px] text-[24px] hover:cursor-pointer' onClick={toggleSidebar}>
                        <IoCloseSharp />
                        </div>
                    <SideBar closeModal={setIsopen}/>
                    </div>

                </div>
            </div>
        </div></>
    );
}

export default Header;
