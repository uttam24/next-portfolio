'use client'
import React, { useState } from 'react';
import Heading from './Heading';


const Contact = () => {
    const [user, setUser]=useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('https://create-portfolio-zeta.vercel.app/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
          });
      
          const result = await response.json();
          if (result.success) {
            alert('Message sent successfully!');
            setUser({ name: '', email: '', message: '' });
          } else {
            alert(`Error: ${result.error}`);
          }
        } catch (error) {
          console.error('Request Error:', error);
          alert('An error occurred. Please try again later.');
        }
      };
      
    return (
        <div className='container mx-auto pt-10 pb-20 px-4' id="contact">
            <Heading title="Send a message" />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="w-full mb-4">
                            <input type='text' name='name' value={user.name} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-400 hover:border-slate-300 shadow-sm focus:shadow" onChange={handleChange} required placeholder="Name *" />
                        </div>

                        <div className="w-full mb-4">
                            <input type='email' name='email' value={user.email} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-400 hover:border-slate-300 shadow-sm focus:shadow" onChange={handleChange} required placeholder="Email *" />
                        </div>

                        <div className="w-full mb-4">
                              <textarea name='message' value={user.message} className="w-full bg-transparent h-[200px] placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-400 hover:border-slate-300 shadow-sm focus:shadow"  required placeholder=" send a message" onChange={handleChange} />
                        </div>
                        <div className="w-full">

                            <button type="submit" className="focus:outline-none w-full cursor-pointer text-white bg-red-400 hover:bg-red-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Send a message</button>
                        </div>
                    </form>
                </div>

                <div className='border-gray-400 border rounded-[4px]'>
                <iframe className='rounded-[4px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.25887558317!2d77.05309473142225!3d28.52726321507435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1741954189201!5m2!1sen!2sin" width="100%" height="380"  loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
