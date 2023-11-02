import React from 'react';
import img1 from '../../../assets/images/about_us/group.png'

const About = () => {
    return (
        <div className='w-11/12 lg:max-w-7xl py-10 m-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <img className='w-[400px] m-auto order-2 lg:order-1' src={img1} alt="" />
                <div className='self-center  order-1 lg:order-2 py-5 lg:py-0'>
                 <h1 className='text-[#FF3811]'>About Us</h1>
                 <h1 className='w-full lg:w-[230px] text-2xl lg:text-3xl font-semibold'>We are qualified & of experience in this field</h1>
                 <p className='py-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                 <p className='py-2'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                 <button className='bg-[#FF3811] text-white py-2 px-4 rounded-md'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;