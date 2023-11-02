import React from 'react';
import check from '../../../assets/icons/check.svg'
import deliveryt from '../../../assets/icons/deliveryt.svg'
import Group from '../../../assets/icons/group.svg'
import person from '../../../assets/icons/person.svg'
import Wrench from '../../../assets/icons/Wrench.svg'

const Chouse = () => {
    const chouseall=[
        {
            id:1,
            icons:check,
            title:'100% Guranty'
        }, {
            id:2,
            icons:deliveryt,
            title:'Timely Delivery'
        },{
            id:3,
            icons:Wrench,
            title:'Best Equipment'
        },{
            id:4,
            icons:Group,
            title:'Expert Team'
        },{
            id:5,
            icons:person,
            title:'24/7 Support'
        },{
            id:6,
            icons:Wrench,
            title:'Best Equipment'
        },
    ]
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto pb-5 lg:pb-10'>
           <div className='text-center'>
                <h1 className='text-xs text-[#FF3811] font-bold'>Core Features</h1>
                <h1 className='text-3xl font-semibold'>Why Choose Us</h1>
                <p className='text-[#9c9999] capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden lg:block'/>words which don't look even slightly believable.</p>
            </div> 
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-5 xl:grid-cols-6 py-2'>
              {chouseall?.map(d=>{
                const {id,icons,title}=d
                return (
                    <div className='border group m-auto rounded-md p-3 hover:bg-[#ff0000af] cursor-pointer' key={id}>
                        <img className='text-[black] m-auto  group-hover:text-white' src={icons} alt="" />
                        <h1 className='group-hover:text-white text-xs lg:text-base'>{title}</h1>
                    </div>
                )
              })}
            </div>
        </div>
    );
};

export default Chouse;