import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Carousel = () => {
    return (
     <div className='w-11/12 lg:max-w-7xl m-auto py-2'>
         <div className="carousel w-full h-fit md:h-[500px] rounded-md">
  <div id="slide1" className="carousel-item w-full relative">
    <img src={img1} className="w-full" />
    <div className='absolute top-0 text-white bg-gradient-to-r from-[#09b48c] to-transparent w-full h-full'>
        <div className='absolute left-5 top-1/2 transform -translate-y-1/2'>
        <h1 className='text-2xl lg:text-3xl font-bold w-full lg:w-[200px]'>Affordable Price For Car Servicing</h1>
        <p className='mb-2'>There are many variations of passages of  available, but <br className='hidden lg:block'></br>the majority have suffered alteration in some form</p>
        <div className='flex gap-4'>
            <button className='bg-[#2a809d] text-white py-2 px-3 rounded-md'>Discover More</button>
            <button className='border-2 border-[#4befbb] text-white py-2 px-3 rounded-md'>Latest Project</button>
        </div>
        </div>
    </div>
    <div className="absolute hidden lg:flex gap-3  bottom-3 right-3">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className='absolute top-0 text-white bg-gradient-to-r from-[#09b48c] to-transparent w-full h-full'>
        <div className='absolute left-5 top-1/2 transform -translate-y-1/2'>
        <h1 className='text-2xl lg:text-3xl  font-bold w-full lg:w-[200px]'>Affordable Price For Car Servicing</h1>
        <p className='mb-2'>There are many variations of passages of  available, but <br className='hidden lg:block'></br>the majority have suffered alteration in some form</p>
        <div className='flex gap-4'>
            <button className='bg-[#2a809d] text-white py-2 px-3 rounded-md'>Discover More</button>
            <button className='border-2 border-[#4befbb] text-white py-2 px-3 rounded-md'>Latest Project</button>
        </div>
        </div>
    </div>
    <div className="absolute hidden lg:flex gap-3  bottom-3 right-3">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full z-[-1]">
    <img src={img3} className="w-full" />
    <div className='absolute top-0 text-white bg-gradient-to-r from-[#09b48c] to-transparent w-full h-full'>
        <div className='absolute left-5 top-1/2 transform -translate-y-1/2'>
        <h1 className='text-2xl lg:text-3xl  font-bold w-full lg:w-[200px]'>Affordable Price For Car Servicing</h1>
        <p className='mb-2'>There are many variations of passages of  available, but <br className='hidden lg:block'></br>the majority have suffered alteration in some form</p>
        <div className='flex gap-4'>
            <button className='bg-[#2a809d] text-white py-2 px-3 rounded-md'>Discover More</button>
            <button className='border-2 border-[#4befbb] text-white py-2 px-3 rounded-md'>Latest Project</button>
        </div>
        </div>
    </div>
    <div className="absolute hidden lg:flex gap-3  bottom-3 right-3">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className='absolute top-0 text-white bg-gradient-to-r from-[#09b48c] to-transparent w-full h-full'>
        <div className='absolute left-5 top-1/2 transform -translate-y-1/2'>
        <h1 className='text-2xl lg:text-3xl  font-bold w-full lg:w-[200px]'>Affordable Price For Car Servicing</h1>
        <p className='mb-2'>There are many variations of passages of  available, but <br className='hidden lg:block'></br>the majority have suffered alteration in some form</p>
        <div className='flex gap-4'>
            <button className='bg-[#2a809d] text-white py-2 px-3 rounded-md'>Discover More</button>
            <button className='border-2 border-[#4befbb] text-white py-2 px-3 rounded-md'>Latest Project</button>
        </div>
        </div>
    </div>
    <div className="absolute hidden lg:flex gap-3  bottom-3 right-3">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src={img5} className="w-full" />
    <div className='absolute top-0 text-white bg-gradient-to-r from-[#09b48c] to-transparent w-full h-full'>
        <div className='absolute left-5 top-1/2 transform -translate-y-1/2'>
        <h1 className='text-2xl lg:text-3xl  font-bold w-full lg:w-[200px]'>Affordable Price For Car Servicing</h1>
        <p className='mb-2'>There are many variations of passages of  available, but <br className='hidden lg:block'></br>the majority have suffered alteration in some form</p>
        <div className='flex gap-4'>
            <button className='bg-[#2a809d] text-white py-2 px-3 rounded-md'>Discover More</button>
            <button className='border-2 border-[#4befbb] text-white py-2 px-3 rounded-md'>Latest Project</button>
        </div>
        </div>
    </div>
    <div className="absolute hidden lg:flex gap-3  bottom-3 right-3">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src={img6} className="w-full" />
    <div className='absolute top-0 text-white bg-gradient-to-r from-[#09b48c] to-transparent w-full h-full'>
        <div className='absolute left-5 top-1/2 transform -translate-y-1/2'>
        <h1 className='text-2xl lg:text-3xl  font-bold w-full lg:w-[200px]'>Affordable Price For Car Servicing</h1>
        <p className='mb-2'>There are many variations of passages of  available, but <br className='hidden lg:block'></br>the majority have suffered alteration in some form</p>
        <div className='flex gap-4'>
            <button className='bg-[#2a809d] text-white py-2 px-3 rounded-md'>Discover More</button>
            <button className='border-2 border-[#4befbb] text-white py-2 px-3 rounded-md'>Latest Project</button>
        </div>
        </div>
    </div>
    <div className="absolute hidden lg:flex gap-3  bottom-3 right-3">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
     </div>
    );
};

export default Carousel;