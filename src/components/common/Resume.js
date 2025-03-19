import React from 'react';
import Heading from './Heading';

const Resume = () => {
    return (
        <div className='container mx-auto py-10 px-4' id="resume">
            <Heading title="Resume" />
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='w-full'>
                    <h2 className='text-2xl mb-3'>My Eduction</h2>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelors of Arts</h3>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2012</time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">I passed my B.A. from the School of Open Learning, University, in 2012.</p>
                            </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Professional Qualification</h3>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2012</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Professional course in ADMEC Multimedia, 2012.</p>
                        </li>
                       
                    </ol>
                </div>

                <div className='w-full'>
                    <h2 className='text-2xl mb-3'>Work Experience</h2>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-yellow-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">UI Developer / Frontend Developer</h3>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">february 2018</time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Collegedekho.com was founded under the aegis of Girnarsoft Education Services Pvt Ltd.</p>
                        </li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900" />
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web Designer</h3>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">08/2016 - 11/2017</time>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Faremart is a global travel agency focused on giving a unique experience to its customers, especially those who prefer to travel within a budget.</p>
                        </li>
                       
                    </ol>
                </div>

            </div>

        </div>
    );
}

export default Resume;
