import Link from 'next/link';
import React from 'react';

const SideBar = ({closeModal}) => {
    return (
        <>
            <div className='flex flex-col gap-4 text-[16px]'>
                <Link href='#home'  className='hover:text-blue-500' onClick={() => closeModal(false)}>
                    Home
                </Link>
                <Link href='#about' className='hover:text-blue-500' onClick={() => closeModal(false)}>
                    About
                </Link>
                <Link href='#resume' className='hover:text-blue-500' onClick={() => closeModal(false)}>
                    Resume
                </Link>
                <Link href='#project' className='hover:text-blue-500' onClick={() => closeModal(false)}>
                    Projects
                </Link>
                <Link href='#contact' className='hover:text-blue-500' onClick={() => closeModal(false)}>
                    Contact Us
                </Link>
            </div>
        </>

    );
}

export default SideBar;
