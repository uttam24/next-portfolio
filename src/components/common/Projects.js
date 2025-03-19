import React from 'react';
import Heading from './Heading';
import Image from 'next/image';
import collegedekho from '@/../public/collegedekho.webp'
import finflow from '@/../public/finflow.webp'
import lms from '@/../public/lms.webp'
import getmyuni from '@/../public/getmyuni.webp'
import telugu from '@/../public/telugu.png'
import consult from '@/../public/consultpage.png'
import Link from 'next/link';




const Projects = () => {
    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto pt-10 pb-20 px-4' id="project">
                <Heading title="Projects" />
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <div className='bg-white px-4 py-4'>
                        <h3 className='text-2xl text-blue-900 mb-3 font-bold'><Link href='https://www.collegedekho.com'>Collegedekho</Link></h3>
                        <div className='relative'>
                        <Image src={collegedekho} alt='project' width={800}     height={600}    className="w-full"   style={{objectFit: 'cover'}}/>
                        </div>
                        <p className='pt-3 pb-3'>CollegeDekho.com is an extensive online platform that provides detailed and comprehensive information on college admissions. It serves as a one-stop destination for students seeking information about exams, courses, fees, cutoff scores, placements, and the latest news related to colleges and universities.</p>
                        <ul className='flex gap-2'>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Next Js</span></li>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Sass</span></li>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Booststrap</span></li>
                        </ul>
                    </div>


                    <div className='bg-white px-4 py-4'>
                        <h3 className='text-2xl text-blue-900 mb-3 font-bold'>Finflow</h3>
                        <div className='relative'>
                        <Image src={finflow} alt='project' width={800}     height={600}    className="w-full"   style={{objectFit: 'cover'}}/>
                        </div>
                        <p className='pt-3 pb-3'>FinFillow is software specific to financial management, it may offer additional functionalities related to financial tracking, invoicing, payment management, or integration with accounting systems.</p>
                        <ul className='flex gap-2'>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Next Js</span></li>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Css</span></li>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Ant Design</span></li>
                        </ul>
                    </div>


                    <div className='bg-white px-4 py-4'>
                        <h3 className='text-2xl text-blue-900 mb-3 font-bold'>Lead Management System </h3>
                        <div className='relative'>
                        <Image src={lms} alt='project' width={800}     height={600}    className="w-full"   style={{objectFit: 'cover'}}/>
                        </div>
                        <p className='pt-3 pb-3'>A lead management CRM system is a software tool designed to help businesses effectively manage their leads and automate their marketing efforts. It provides a centralized platform where employees can track and nurture leads throughout the sales cycle.</p>
                        <ul className='flex gap-2'>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>React Js</span></li>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Sass</span></li>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Css</span></li>
                        </ul>
                    </div>


                    <div className='bg-white px-4 py-4'>
                        <h3 className='text-2xl text-blue-900 mb-3 font-bold'>Getmyuni </h3>
                        <div className='relative'>
                        <Image src={getmyuni} alt='project' width={800}     height={600}    className="w-full"   style={{objectFit: 'cover'}}/>
                        </div>
                        <p className='pt-3 pb-3'>GetMyUni is an all-in-one online platform that caters to the needs of students, schools, and educational institutions. It offers a range of features and services to facilitate student interaction, provide educational guidance, and assist schools with recruitment, marketing, and communication efforts.</p>
                        <ul className='flex gap-2'>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Next Js</span></li>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Css</span></li>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Js</span></li>
                        </ul>
                    </div>

                    <div className='bg-white px-4 py-4'>
                        <h3 className='text-2xl text-blue-900 mb-3 font-bold'><Link href='https://telugunews.collegedekho.com/'>Telugu News</Link> </h3>
                        <div className='relative'>
                        <Image src={telugu} alt='project' width={800}     height={600}    className="w-full"   style={{objectFit: 'cover'}} />
                        </div>
                        <p className='pt-3 pb-3'>Telugu News by CollegeDekho is a platform where students can ﬁnd the latest news in the Telugu language.</p>
                        <ul className='flex gap-2'>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Next Js</span></li>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Sass</span></li>
                        </ul>
                    </div>

                    <div className='bg-white px-4 py-4'>
                        <h3 className='text-2xl text-blue-900 mb-3 font-bold'><Link href='https://www.collegedekho.com/college-admission-form'>Consultant Landing Page</Link> </h3>
                        <div className='relative'>
                        <Image src={consult} alt='project' width={800}     height={600}    className="w-full"   style={{objectFit: 'cover'}}/>
                        </div>
                        <p className='pt-3 pb-3'>The CollegeDekho consultant landing page is designed to encourage individuals to become partners and earn by helping students with admissions.</p>
                        <ul className='flex gap-2'>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>HTML</span></li>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Css</span></li>
                            <li><span className='inline-block bg-gray-300 rounded-[25px] px-4 py-1 text-[12px] w-auto'>Jquery</span></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;
