import React from 'react';
import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'

const Brower = () => {
    const product=[
        {
            id:1,
            img:img1,
            title:'Cools Led Light',
            price:'55.00'
        },{
            id:2,
            img:img2,
            title:'Cools Led Light',
            price:'19.00'
        },{
            id:3,
            img:img3,
            title:'Car Air Filte',
            price:'20.00'
        },{
            id:4,
            img:img4,
            title:'Car Air Filte',
            price:'18.00'
        },{
            id:5,
            img:img5,
            title:'Car Air Filte',
            price:'18.00'
        },{
            id:6,
            img:img6,
            title:'Car Engine Plug',
            price:'22.00'
        }
    ]
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto py-10'>
              <div className='text-center'>
                <h1 className='text-xs text-[#FF3811] font-bold'>Popular Products</h1>
                <h1 className='text-3xl font-semibold'>Browse Our Products</h1>
                <p className='text-[#9c9999] capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden lg:block'/>words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5'>
                {!!product.length && product.map(d=>{
                     const {img,id,title,price}=d
                    return (
                        <div key={id} className='border p-4 rounded-md'>
           <img src={img} className='rounded-md h-[150px] w-fit m-auto md:w-full' alt="" />
          <div className='text-center py-2'>
          <div className="rating flex justify-center">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-[20px]" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-[20px]"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-[20px]" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-[20px]" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-[20px]" />
</div>
          <h1 className='text-xl font-bold'>{title}</h1>
          <h1 className='text-[#FF3811]'>Price : ${price}</h1>
          </div>
        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Brower;