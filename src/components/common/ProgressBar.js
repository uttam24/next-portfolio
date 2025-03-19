'use client'

import React, { useEffect, useState } from 'react';

const ProgressBar = ({title, ranking, color}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < ranking) {
                    return prevProgress + 1;
                }
                return ranking;
            });
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [ranking]); // Include `ranking` as a dependency

    return (
        <div className='text-[13px]'>
            <div className='flex justify-between mb-3'>
                <span>{title}</span> <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-300 relative h-2">
                <div className={`${color} h-2 transition-width duration-500 ease-in-out`} style={{ width: `${progress}%` }} />
            </div>
        </div>
    );
}

export default ProgressBar;
