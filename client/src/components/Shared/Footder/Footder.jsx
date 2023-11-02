import React from 'react';
import fotderimg from '../../../assets/logo.svg'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter} from 'react-icons/bs';
import { BiLogoInstagram} from 'react-icons/bi';
import { BiLogoGoogle} from 'react-icons/bi';;

const Footder = () => {
    return (
        <div className='bg-[#2586B4]'>
        <footer className="footer w-11/12 lg:max-w-7xl m-auto p-10  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div>
         <img className='w-[60px]' src={fotderimg} alt="" />
         <p className='text-white'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
         <ul className='flex justify-center cursor-pointer gap-2 py-1 lg:py-2'>
                <li className='bg-[#395185] p-2 rounded-full'><FaFacebookF color='white'/></li>
                <li className='bg-[#55ACEE] p-2 rounded-full'><BsTwitter color='white'/></li>
                <li className='bg-[#DE4474] p-2 rounded-full'><BiLogoInstagram color='white'/></li>
                <li className='bg-[#E43E2B] p-2 rounded-full'><BiLogoGoogle color='white'/></li>
             </ul>
       </div>
       <div className='text-white'>
         <span className="capitalize text-white text-base font-bold">About</span> 
         <a className="link link-hover"> Home</a>
         <a className="link link-hover">Service</a>
         <a className="link link-hover">Contact</a>
         <a className="link link-hover">Advertisement</a>
       </div> 
       <div className='text-white'>
         <span className="capitalize text-white text-base font-bold">Company</span> 
         <a className="link link-hover">About us</a>
         <a className="link link-hover">Contact</a>
         <a className="link link-hover">Jobs</a>
         <a className="link link-hover">Press kit</a>
       </div> 
       <div className='text-white'>
         <span className="capitalize text-white text-base font-bold">Legal</span> 
         <a className="link link-hover">Terms of use</a>
         <a className="link link-hover">Privacy policy</a>
         <a className="link link-hover">Cookie policy</a>
       </div>
     </footer>
      </div>
    );
};



export default Footder;