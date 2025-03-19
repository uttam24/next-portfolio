
import React from 'react';
import Heading from './Heading';
import ProgressBar from './ProgressBar';

const Skills = () => {

  return (
    <div className='bg-gray-100'>
      <div className='container mx-auto pt-10 pb-20 px-4'>
        <Heading title="Skills" />
        <div className='grid grid-cols-1 md:grid md:grid-cols-2 gap-6'>
          <ProgressBar title="React Js / Next Js" ranking={70} color="bg-red-500"/>
          <ProgressBar title="HTML5 / CSS" ranking={80} color="bg-yellow-500"/>
          <ProgressBar title="Jquery / JavaScript" ranking={65} color="bg-green-500"/>
          <ProgressBar title="Tailwind Css / Booststrap Css" ranking={70} color="bg-black"/>
          <ProgressBar title="Responsive Design" ranking={80} color="bg-blue-500"/>
          <ProgressBar title="Web Design" ranking={80} color="bg-cyan-500"/>

        </div>


      </div>
    </div>
  );
}

export default Skills;
