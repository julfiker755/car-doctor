import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter} from 'react-icons/bs';
import { BiLogoInstagram} from 'react-icons/bi';
import { BiLogoGoogle} from 'react-icons/bi';


const Tempcard = ({d}) => {
    const {img}=d
    return (
        <div className='p-4 border rounded-md'>
           <img className='rounded-md' src={img} alt="" />
           <div className='text-center py-3'>
             <h1 className='text-xl'>Car Engine Plug</h1>
             <h1 className='text-[#868585]'>Engine Expert</h1>
             <ul className='flex justify-center cursor-pointer gap-2 py-1 lg:py-2'>
                <li className='bg-[#395185] p-2 rounded-full'><FaFacebookF color='white'/></li>
                <li className='bg-[#55ACEE] p-2 rounded-full'><BsTwitter color='white'/></li>
                <li className='bg-[#DE4474] p-2 rounded-full'><BiLogoInstagram color='white'/></li>
                <li className='bg-[#E43E2B] p-2 rounded-full'><BiLogoGoogle color='white'/></li>
             </ul>
           </div>
        </div>
    );
};

export default Tempcard;