import React from 'react';

const Heading = ({title}) => {
    return (
        <div className='text-[#232940] text-[32px] font-medium flex items-center gap-4 py-10'>
            {title}
            <div className='bg-[#ff4d41] h-[2px] w-[40px] translate-y-1'></div>
        </div>
    );
}

export default Heading;
