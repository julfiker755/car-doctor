import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import imgbb from '../../../assets/images/banner/2.jpg'
import { BsChevronRight } from 'react-icons/bs';
import { AiFillFileImage } from 'react-icons/ai';
import logo from '../../../assets/logo.svg'
import { Helmet } from 'react-helmet-async';
import useAxiosintercaptor from '../../Hooks/useAxiosintercaptor';


const SingleDetails = () => {
    const navigate=useNavigate()
    const [singledetails,setsingledetails]=useState([])
    const {id}=useParams()
    const axiosincaptor=useAxiosintercaptor()
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    useEffect(()=>{
        (()=>{
            axiosincaptor.get(`/service/${id}`)
            .then(result=>setsingledetails(result.data))
        })()
    },[])
    const {img,price} = singledetails || {}
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto'>
            <Helmet>
                <title>Details</title>
            </Helmet>
            
           <div className='pt-3'>
           <div className='relative'>
            <img className='h-[100px] lg:w-full lg:h-full' src="https://i.ibb.co/7Krvscp/checkout.png" alt="" />
            <h1 className='text-xl absolute lg:text-4xl font-bold text-white  top-1/2 [transform:translateY(-50%)] px-4'>Service Details</h1>
            <div className='absolute bottom-0 left-1/2 [transform:translateX(-50%)]' style={{
                  backgroundColor:'red',
                  width:'250px',
                  height:'200px',
                  clipPath: 'polygon(15% 85%, 87% 85%, 100% 100%, 0% 100%)',
                  
            }}>
            </div>
             <div className='text-white absolute bottom-0 left-1/2 [transform:translateX(-50%)]'>
                <ul className='flex w-[200px] mb-1 justify-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link>/Service Details</Link></li>
                </ul>
                </div>
            </div>
           </div>
          
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 py-10'>
                {/* col left */}
              <div className='col-span-3'>
                <img className='m-auto rounded-md w-full h-fit lg:h-[500px]' src={img} alt="" />
                <div className='my-5'>
                    <h1 className='text-3xl font-bold py-2 lg:py-4'>Unique Car Engine Service</h1>
                    <p className='text-[#949393]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </div>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 py-5'>
                    <div className='border p-4 rounded-md bg-[#F3F3F3]'>
                        <h1 className='text-2xl pb-2'>Instant Car Services</h1>
                        <p className='text-[#868585]'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                    <div className='border p-4 rounded-md bg-[#F3F3F3]'>
                        <h1 className='text-2xl pb-2'>Instant Car Services</h1>
                        <p className='text-[#868585]'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                    <div className='border p-4 rounded-md bg-[#F3F3F3]'>
                        <h1 className='text-2xl pb-2'>Instant Car Services</h1>
                        <p className='text-[#868585]'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                </div>
                <p className='text-[#949393]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                <div className='py-10'>
                    <h1 className='text-3xl font-bold my-3'>3 Simple Steps to Process</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                       <div className='border p-4 rounded-md  text-center'>
                          <div className='bg-[#FF3811] w-[60px] h-[60px] rounded-full m-auto'><span className='flex justify-center items-center w-full h-full text-3xl font-bold text-white'>01</span></div>
                          <h1 className='text-2x lg:text-3xl font-bold'>Step One</h1>
                          <p>It uses a dictionary of over 200</p>
                       </div>
                       <div className='border p-4 rounded-md  text-center'>
                          <div className='bg-[#FF3811] w-[60px] h-[60px] rounded-full m-auto'><span className='flex justify-center items-center w-full h-full text-3xl font-bold text-white'>02</span></div>
                          <h1 className='text-2x lg:text-3xl font-bold'>Step Two</h1>
                          <p>It uses a dictionary of over 200</p>
                       </div>
                       <div className='border p-4 rounded-md  text-center'>
                          <div className='bg-[#FF3811] w-[60px] h-[60px] rounded-full m-auto'><span className='flex justify-center items-center w-full h-full text-3xl font-bold text-white'>03</span></div>
                          <h1 className='text-2x lg:text-3xl font-bold'>Step There</h1>
                          <p>It uses a dictionary of over 200</p>
                       </div>
                    </div>
                    <div className='py-5'>
                        <img className='rounded-md' src={imgbb} alt="" />
                    </div>
                </div>
              </div>
              {/* col right */}
              <div className='ml-5 lg:ml-0'>
                <ul className='bg-[#F3F3F3] p-3 rounded-md space-y-2'>
                    <li className='text-2xl font-bold py-[2px]'> Services</li>
                    <li className='flex justify-between  p-2 items-center rounded-md bg-[#FF0000] text-white transition-all cursor-pointer'>Full Car Repair<BsChevronRight/></li>
                    <li className='flex justify-between bg-[white] p-2 items-center rounded-md hover:bg-[#FF0000] hover:text-white transition-all cursor-pointer'>Engine Repair<BsChevronRight/></li>
                    <li className='flex justify-between bg-[white] p-2 items-center rounded-md hover:bg-[#FF0000] hover:text-white transition-all cursor-pointer'>Automatic Services<BsChevronRight/></li>
                    <li className='flex justify-between bg-[white] p-2 items-center rounded-md hover:bg-[#FF0000] hover:text-white transition-all cursor-pointer'>Engine Oil Change<BsChevronRight/></li>
                    <li className='flex justify-between bg-[white] p-2 items-center rounded-md hover:bg-[#FF0000] hover:text-white transition-all cursor-pointer'>Battery Charge<BsChevronRight/></li>
                </ul>
               <div className='bg-[#151515] text-white rounded-md p-3'>
                 <h1 className='text-2xl font-bold py-2'>Download</h1>
                 <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <AiFillFileImage size={25}/>
                        <ul>
                            <li className='text-xs'>Our Brochure</li>
                            <li className='text-xs'>Download</li>
                        </ul>
                    </div>
                    <h1 className='bg-[#FF3811] p-2 rounded-md cursor-pointer'><BsChevronRight/></h1>
                 </div>
                 <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center gap-2'>
                        <AiFillFileImage size={25}/>
                        <ul>
                            <li className='text-xs'>Company Details</li>
                            <li className='text-xs'>Download</li>
                        </ul>
                    </div>
                    <h1 className='bg-[#FF3811] p-2 rounded-md cursor-pointer'><BsChevronRight/></h1>
                 </div>
               </div>
               <div className='bg-[#151515] py-10 mt-3 p-3 rounded-md'>
                  <img className='m-auto py-2' src={logo} alt="" />
                  <h1 className='text-2xl text-white py-2 font-semibold text-center'>Need Help? We Are Here<br className='hidden md:block'/>To Help You</h1>
                  <div className='text-center bg-[white] rounded-md py-3 relative'>
                    <h1 className='font-bold text-[black]'><span className='text-[#FF3811]'>Car Doctor</span> Special</h1>
                    <h1 className='font-bold text-[black]'>Save up to <span className='text-[#FF3811]'>60% off</span></h1>
                    <button className='bg-[#FF3811] py-2 px-4 text-white absolute -bottom-6 left-1/2 [transform:translateX(-50%)] rounded-md'>Get A Quote</button>
                  </div>
               </div>
               <h1 className='text-3xl text-black font-bold text-center py-3'>Price ${price}</h1>
               <div className='flex justify-center'>
               <button onClick={()=>navigate(`/checkout/${id}`)} className='bg-[#FF3811] py-2 px-4 text-white w-full rounded-md'>Proceed Checkout</button>
               </div>
              </div>
            </div>

        </div>
    );
};

export default SingleDetails;