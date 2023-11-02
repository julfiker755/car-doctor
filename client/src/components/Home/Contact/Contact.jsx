import React from 'react';
import img1 from '../../../assets/images/contact/001.png'
import img2 from '../../../assets/images/contact/002.png'
import img3 from '../../../assets/images/contact/003.png'

const Contact = () => {
    return (
        <div className='p-5 w-11/12 lg:max-w-7xl m-auto bg-[#151515] text-white rounded-md'>
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {/* col 1 */}
            <div className='flex gap-2 items-center'>
              <img className='w-fit h-fit' src={img1} alt="" />
              <div>
                <h1>We are open monday-friday</h1>
                <h1 className='text-xl font-bold'>7:00 am - 9:00 pm</h1>
              </div>
            </div>
            {/* col 2 */}
            <div className='flex gap-2 items-center'>
              <img className='w-fit h-fit' src={img2} alt="" />
              <div>
                <h1>Have a question?</h1>
                <h1 className='text-xl font-bold'>+2546 251 2658</h1>
              </div>
            </div>
            {/* col 3 */}
            <div className='flex gap-2 items-center'>
              <img className='w-fit h-fit' src={img3} alt="" />
              <div>
                <h1>Need a repair? our address</h1>
                <h1 className='text-xl font-bold'>Liza Street, New York</h1>
              </div>
            </div>
           </div>
        </div>
    );
};

export default Contact;