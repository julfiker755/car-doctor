import React from 'react';
import Tempcard from './Tempcard';
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'

const Temp = () => {
    const tempgroup=[
        {
            id:1,
            img:img1,
        },{
            id:2,
            img:img2,
        },{
            id:3,
            img:img3
        }
    ]
    return (
        <div className='w-11/12 lg:max-w-5xl m-auto pb-5 lg:pb-10'>
                <div className='text-center'>
                <h1 className='text-xs text-[#FF3811] font-bold'>Team</h1>
                <h1 className='text-3xl font-semibold'>Meet Our Team</h1>
                <p className='text-[#9c9999] capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised<br className='hidden lg:block'/>words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-9 py-5'>
              {tempgroup?.map(d=> <Tempcard key={d.id} d={d}></Tempcard>)}
            </div>
        </div>
    );
};

export default Temp;