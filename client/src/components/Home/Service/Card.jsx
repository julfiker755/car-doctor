import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Card = ({d}) => {
  const navigate=useNavigate()
    const {img,title,price,_id}=d
    return (
        <div className='border p-4 rounded-md'>
           <img src={img} className='rounded-md h-[150px] w-fit m-auto md:w-full' alt="" />
           <h1 className='text-xl py-1'>{title}</h1>
           <div className='flex justify-between items-center py-[1px]'>
             <h1 className='text-[#FF3811]'>Price : ${price}</h1>
             <h1 onClick={()=>navigate(`/service/${_id}`)}  className='cursor-pointer'><BsChevronRight color="#FF3811"/></h1>
           </div>
        </div>
    );
};

export default Card;