import React from 'react';
import { Link } from 'react-router-dom';
import orderimg from '../../../assets/order.png'
import Tablerow from './Tablerow';
import toast, { Toaster } from 'react-hot-toast';
import useOrdereview from '../../Hooks/useOrdereview';
import useAxiosintercaptor from '../../Hooks/useAxiosintercaptor';

const Ordereview = () => {
    const {orderdata,refetch}=useOrdereview()
    const axiosincaptor=useAxiosintercaptor()

    const handledelete=async(did)=>{
     const {data}=await axiosincaptor.delete(`/order/${did}`)
     if(data.deletedCount > 0){
        toast.success('Deleted Successfully')
     }
    refetch() 
    }
    // update for data
    const Updateconfirm=async(uid)=>{
    const {data}=await axiosincaptor.patch(`/order/${uid}`,{confirm:true})
    if(data.modifiedCount > 0){
        toast.success('Approved Successfully')
        refetch()
    }
    }
    
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto py-5'>
            <div className='relative'>
            <img className='h-[100px] lg:w-full lg:h-full blur-[0.5px]' src={orderimg} alt="orderimg"/>
            <div className='absolute top-1/2 [transform:translateY(-50%)] px-4'>
               <h1 className='text-xl  lg:text-4xl font-bold text-white'>Order Review</h1>
               <ul className='flex gap-2 text-[#FF3811]'>
                <li><Link to="/">Home</Link></li>
                <li>/Product Details</li>
               </ul>
            </div>
            </div>
            {/* responsive table */}
            <div className="overflow-x-auto py-5">
  <table className="table">
    {/* head */}
    <thead className='text-base text-black'>
      <tr>
        <th>Delete</th>
        <th>Photo</th>
        <th>Gmail</th>
        <th>Price</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       {!!orderdata?.length ? (orderdata.map(d=><Tablerow key={d._id} d={d} handledelete={handledelete} Updateconfirm={Updateconfirm}></Tablerow>)):(<tr><td>No Order Review data please checkout</td></tr>)}
    </tbody>
  </table>
</div>
{/* tost  */}
<Toaster
  position="top-right"
  reverseOrder={false}
/>
        </div>
    );
};

export default Ordereview;