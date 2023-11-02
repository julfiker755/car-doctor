import React, { useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import About from './About/About';
import Service from './Service/Service';
import Contact from './Contact/Contact';
import Brower from './Brower/Brower';
import Temp from './Temp/Temp';
import Chouse from './Chouse/Chouse';
import Testimonial from './Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
           <Carousel></Carousel>
           <About></About>
           <Service></Service>
           <Contact></Contact>
           <Brower></Brower>
           <Temp></Temp>
           <Chouse></Chouse>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;