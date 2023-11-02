import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Addservice = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto py-5'>
            <Helmet>
                <title>Checkout</title>
            </Helmet>
            <div className='pt-3'>
           <div className='relative'>
            <img className='h-[100px] lg:w-full lg:h-full' src="https://i.ibb.co/7Krvscp/checkout.png" alt="" />
            <h1 className='text-xl absolute lg:text-4xl font-bold text-white  top-1/2 [transform:translateY(-50%)] px-4'>Add New Service</h1>
            <div className='absolute bottom-0 left-1/2 [transform:translateX(-50%)]' style={{
                  backgroundColor:'red',
                  width:'250px',
                  height:'200px',
                  clipPath: 'polygon(15% 85%, 87% 85%, 100% 100%, 0% 100%)',
                  
            }}>
            </div>
             <div className='text-white absolute bottom-0 left-1/2 [transform:translateX(-50%)]'>
                <ul className='flex w-[200px] mb-1 justify-center'>
                    <li className='pointer-events-auto'><Link to="/">Home</Link></li>
                    <li><Link>/Service</Link></li>
                </ul>
                </div>
            </div>
           </div>
           <div className='bg-[#F3F3F3] p-3 my-3 rounded-md'>
             <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
              <div className='space-y-5'>
                <input placeholder='First Name' className='focus:outline-none w-full py-2 px-2 rounded-md' type="text" />
                <input placeholder='Your Phone' className='focus:outline-none w-full py-2 px-2 rounded-md' type="text" />
              </div>
              <div className='space-y-5'>
                <input placeholder='Last Name' className='focus:outline-none w-full py-2 px-2 rounded-md' type="text" />
                <input placeholder='Your Email' className='focus:outline-none w-full py-2 px-2 rounded-md' type="text" />
              </div>
              <textarea placeholder='Your Message' className='focus:outline-none w-full col-span-1 md:col-span-2 py-1 px-2 h-fit lg:h-[100px] rounded-md'>

              </textarea>
              <button className='bg-[#FF0000] text-white py-2 px-3 col-span-1 lg:col-span-2 rounded-md'>Submit</button>
             </div>
           </div>
        </div>
    );
};



export default Addservice;