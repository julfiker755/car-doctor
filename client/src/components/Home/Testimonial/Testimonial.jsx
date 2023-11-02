import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import Ellipse from '../../../assets/Ellipse 2.png'
import Ellipse2 from '../../../assets/Ellipse 2 (1).png'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay,Navigation } from 'swiper/modules';



const Testimonial = () => {
    return (
        <div className='mb-5 lg:mb-10 w-11/12 lg:max-w-7xl m-auto'>
            <div className='text-center pb-3'>
                <h1 className='text-xs text-[#FF3811] font-bold'>Testimonial</h1>
                <h1 className='text-3xl font-semibold'>What Customer Says</h1>
                <p className='text-[#9c9999] capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden lg:block' />words which don't look even slightly believable.</p>
            </div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='border rounded-md p-3'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <img src={Ellipse} alt="" />
                            <div>
                                <h1 className='text-xl font-semibold'>Awlad Hossain</h1>
                                <h1 className='text-xs text-[#7b7a7a]'>Businessman</h1>
                            </div>
                        </div>
                        <img className='w-10' src={quote} alt="" />
                    </div>
                    <p className='py-3 text-[#a4a3a3]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"/>
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                </div>
                <div className='border rounded-md p-3'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <img src={Ellipse2} alt="" />
                            <div>
                                <h1 className='text-xl font-semibold'>Awlad Hossain</h1>
                                <h1 className='text-xs text-[#7b7a7a]'>Businessman</h1>
                            </div>
                        </div>
                        <img className='w-10' src={quote} alt="" />
                    </div>
                    <p className='py-3 text-[#a4a3a3]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='border rounded-md p-3'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <img src={Ellipse} alt="" />
                            <div>
                                <h1 className='text-xl font-semibold'>Awlad Hossain</h1>
                                <h1 className='text-xs text-[#7b7a7a]'>Businessman</h1>
                            </div>
                        </div>
                        <img className='w-10' src={quote} alt="" />
                    </div>
                    <p className='py-3 text-[#a4a3a3]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"/>
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                </div>
                <div className='border rounded-md p-3'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <img src={Ellipse2} alt="" />
                            <div>
                                <h1 className='text-xl font-semibold'>Awlad Hossain</h1>
                                <h1 className='text-xs text-[#7b7a7a]'>Businessman</h1>
                            </div>
                        </div>
                        <img className='w-10' src={quote} alt="" />
                    </div>
                    <p className='py-3 text-[#a4a3a3]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='border rounded-md p-3'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <img src={Ellipse} alt="" />
                            <div>
                                <h1 className='text-xl font-semibold'>Awlad Hossain</h1>
                                <h1 className='text-xs text-[#7b7a7a]'>Businessman</h1>
                            </div>
                        </div>
                        <img className='w-10' src={quote} alt="" />
                    </div>
                    <p className='py-3 text-[#a4a3a3]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"/>
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                </div>
                <div className='border rounded-md p-3'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2 items-center'>
                            <img src={Ellipse2} alt="" />
                            <div>
                                <h1 className='text-xl font-semibold'>Awlad Hossain</h1>
                                <h1 className='text-xs text-[#7b7a7a]'>Businessman</h1>
                            </div>
                        </div>
                        <img className='w-10' src={quote} alt="" />
                    </div>
                    <p className='py-3 text-[#a4a3a3]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                </div>
            </div></SwiperSlide>

      </Swiper>
        </div>
    );
};

export default Testimonial;