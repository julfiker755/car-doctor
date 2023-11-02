import React, { useEffect, useState } from 'react';
import Card from './card';
import useAxiosintercaptor from '../../Hooks/useAxiosintercaptor';

const Service = () => {
    const [service,setservice]=useState([])
    const axiosincaptor=useAxiosintercaptor()
    useEffect(()=>{
        (async()=>{
            const {data}=await axiosincaptor.get("/service")
            setservice(data)
        })()
    },[])

    return (
        <div className='w-11/12 lg:max-w-7xl m-auto py-10'>
            <div className='text-center'>
                <h1 className='text-xs text-[#FF3811] font-bold'>Service</h1>
                <h1 className='text-3xl font-semibold'>Our Service Area</h1>
                <p className='text-[#9c9999]'>the majority have suffered alteration in some form, by injected humour, or randomised<br className='hidden lg:block'/>words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5'>
               {!!service.length && service.map(d=><Card key={d._id} d={d}></Card>)}
            </div>
            <div className='flex justify-center'>
                <button className='bg-[#3694d2] text-white py-2 px-3 rounded-md'>More Services</button>
            </div>
        </div>
    );
};

export default Service;