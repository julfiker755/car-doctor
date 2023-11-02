import React, { useState } from 'react';
import logo from '../../../assets/logo.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaTimes} from 'react-icons/fa';
import useAuthState from '../../Hooks/useAuthState';
const Header = () => {
    const [phone,setphone]=useState(false)
    const {user,logOut}=useAuthState() || {}
    const navigate=useNavigate()
    return (
       <div className='md:sticky md:left-0 md:top-0 md:z-50 bg-[#2586b4] text-white'>
         <div className='w-11/12 lg:max-w-7xl m-auto flex justify-between items-center'>
           <div className='flex gap-4 items-center'>
           <img className='w-[70px]' src={logo} alt="" />
           <div className='lg:hidden cursor-pointer' onClick={()=>setphone(!phone)}>{phone ? <FaTimes/>:<AiOutlineMenu/>}</div>
           </div>
           <ul className='hidden lg:flex gap-3 space-x-2'>
             <li><NavLink   className={({ isActive}) => isActive ? "text-[#ee4972]" : "text-[white]"} to="/">Home</NavLink></li>
             <li><NavLink className={({ isActive}) => isActive ? "text-[#ee4972]" : "text-[white]"} to="/addservice">Add Service</NavLink></li>
             {user ? <>
              <li><NavLink className={({ isActive}) => isActive ? "text-[#ee4972]" : "text-[white]"} to="/ordereview">Order Review</NavLink></li>
             <button onClick={async()=>{
              await logOut()
              navigate('/')
             }} className='bg-[#40b6ed] px-3 rounded-md'>Sign Out</button>
             </>:<li><NavLink className={({ isActive}) => isActive ? "text-[#ee4972]" : "text-[white]"} to="/login">Login</NavLink></li>}
           </ul>
           <div>
              <ul className='flex gap-4 items-center'>
                <li><AiOutlineShoppingCart/></li>
                <li><AiOutlineSearch/></li>
                <li><button className='text-[#FF3811] border border-[#FF3811] py-2 px-4 rounded-md hover:border-white hover:text-white hover:bg-[#4495d2] transition-all'>Appointment</button></li>
              </ul>
           </div>  
        </div>
         {/* ---------------------Phone menu responsive ----------------- */}
        <div className={`${phone ? 'bg-[#2567ad] z-50 text-white transition-all fixed w-3/5 top-0 left-0 h-full p-3':'bg-[#2567ad] text-white fixed w-3/5 top-0 left-[-100%] duration-500 h-full p-3'}`}>
        <div className={`lg:hidden cursor-pointer fixed top-1 ${phone ? 'left-[53%]':'left-[-100%] duration-500'} border rounded-full p-2`} onClick={()=>setphone(!phone)}>{phone ? <FaTimes/>:<AiOutlineMenu/>}</div>
        <div className='py-2'>
           <img className='w-[70px]' src={logo} alt="" />
           </div>
           <ul className='lg:hidden gap-3 space-y-2'>
           <li><NavLink   className={({ isActive}) => isActive ? "text-[#ee4972]" : "text-[white]"} to="/">Home</NavLink></li>
             <li><NavLink className={({ isActive}) => isActive ? "text-[#ee4972]" : "text-[white]"} to="/addservice">Add Service</NavLink></li>
             {user ? <>
              <li><NavLink className={({ isActive}) => isActive ? "text-[#ee4972]" : "text-[white]"} to="/ordereview">Order Review</NavLink></li>
             <button onClick={async()=>{
              await logOut()
              navigate('/')
             }} className='bg-[#40b6ed] px-3 rounded-md'>Sign Out</button>
             </>:<li><NavLink className={({ isActive}) => isActive ? "text-[#ee4972]" : "text-[white]"} to="/login">Login</NavLink></li>}
           </ul>
           <div>
              <ul className='flex-row-reverse mt-3 space-y-3 items-center'>
                <div className='flex gap-2'>
                <li><AiOutlineShoppingCart/></li>
                <li><AiOutlineSearch/></li>
                </div>
                <li><button className='text-[#FF3811] border border-[#FF3811] py-2 px-4 rounded-md hover:border-white hover:text-white hover:bg-[#4495d2] transition-all'>Appointment</button></li>
              </ul>
           </div> 
        </div>
       </div>
    );
};

export default Header;