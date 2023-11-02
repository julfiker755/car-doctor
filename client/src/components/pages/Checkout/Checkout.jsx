import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import useAuthState from '../../Hooks/useAuthState';
import { format } from 'date-fns';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosintercaptor from '../../Hooks/useAxiosintercaptor';

const Checkout = () => {
  const {user}=useAuthState()
  const {id}=useParams()
  const [checout,setcheckout]=useState([])
  const axiosincaptor=useAxiosintercaptor()
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    useEffect(()=>{
      (()=>{
          axiosincaptor.get(`/service/${id}`)
          .then(result=>setcheckout(result.data))
      })()
  },[id])

  const {price,img,_id,title}=checout || {}

  //  handle order
  const handleorder=(e)=>{
    e.preventDefault()
    const name=e.target.name.value
    const email=e.target.email.value
    const date=e.target.date.value
    const cprice=e.target.price.value
    const details=e.target.details.value
    const order={
       Orderid:_id,
       Customarname:name,
       Customaremail:email,
       Orderdate:date,
       serverprice:cprice,
       Customardetails:details,
       Customarimg:img,
       confirm:false,
    }
    // axios post data use
    axiosincaptor.post('/order',order)
    .then(result=>{
      toast.success(`${result?.data?.message}`)
    })
  }
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto py-5'>
            <Helmet>
                <title>Checkout</title>
            </Helmet>
            <div className='pt-3'>
           <div className='relative'>
            <img className='h-[100px] lg:w-full lg:h-full' src="https://i.ibb.co/7Krvscp/checkout.png" alt="" />
            <h1 className='text-xl absolute lg:text-4xl font-bold text-white  top-1/2 [transform:translateY(-50%)] px-4'>Check Out</h1>
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
                    <li><Link>/Checkout</Link></li>
                </ul>
                </div>
            </div>
           </div>
           <div className='bg-[#F3F3F3] p-3 my-3 rounded-md'>
            <h1 className='text-xs text-center text-[#9b2f87] my-2 font-bold'>{title}</h1>
             <form onSubmit={handleorder}>
             <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
              <div className='space-y-5'>
                <input placeholder='Customar Name' name="name" defaultValue={user?.displayName} className='focus:outline-none w-full py-2 px-2 rounded-md' type="text" readOnly />
                <input placeholder='Your Email' name="email" defaultValue={user?.email} className='focus:outline-none w-full py-2 px-2 rounded-md' type="text" readOnly/>
              </div>
              <div className='space-y-5'>
                <input placeholder='Date' name="date" defaultValue={format(new Date(), 'PP')} className='focus:outline-none w-full py-2 px-2 rounded-md' type="text" readOnly/>
                <input placeholder='price' name="price" defaultValue={price} className='focus:outline-none w-full py-2 px-2 rounded-md' type="text" readOnly/>
              </div>
              <input name="details" placeholder='Your contact Number/address type'  className='focus:outline-none w-full py-2 px-2 rounded-md col-span-1 lg:col-span-2' type="text" required/>
              <button className='bg-[#FF0000] text-white py-2 px-3 col-span-1 lg:col-span-2 rounded-md'>Order Confirm</button>
             </div>
             </form>
           </div>
           {/* React host tost */}
        <Toaster
          position="top-right"
          reverseOrder={true}
        />
        </div>
    );
};

export default Checkout;