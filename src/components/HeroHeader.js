import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import webSlide from '../images/Header/web-development.png';
import uiuxSlide from '../images/Header/UI&UX.png';
import awsSlide from '../images/Header/AWS Slide.png';
import iosSlide from '../images/Header/WebDev Slide.png';
import crmSlide from '../images/Header/CRM Slide.png';

import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const HeroHeader = () => {
  return (
    <div className='Hero-Section'>
        <Swiper navigation={true} modules={[Navigation]} className="HeroSwiper">

        <SwiperSlide ><img className='uiux-Slide' src={uiuxSlide} alt="" />
            <div className='uiuxSlide'>
                <h1>UI & UX Designing </h1>
                <a href="#contact" className="btn-main-offer">contact us</a>
            </div>
        </SwiperSlide>
        <SwiperSlide ><img className='web-Slide' src={webSlide} alt="" />
            <div className='webSlide'>
                <h1>Web Application Development</h1>
                <a href="#contact" className="btn-main-offer">contact us</a>
            </div>
        </SwiperSlide>
        <SwiperSlide  ><img className='aws-Slide' src={awsSlide} alt="" /> 
            <div className='awsSlide'>
                <h1>AWS Cloud Services </h1>
                <a href="#contact" className="btn-main-offer">contact us</a>
            </div>
        </SwiperSlide>
        <SwiperSlide ><img className='ios-Slide' src={iosSlide} alt="" />
            <div className='iosSlide'>
                <h1>IOS Application Development</h1>
                <a href="#contact" className="btn-main-offer">contact us</a>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>< img className='crm-Slide' src={crmSlide} alt="" />
            <div className='crmSlide'>
                <h1> Dynamics 365</h1>
                <a href="#contact" className="btn-main-offer">contact us</a>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide><img className='user-photo' src={webSlide} alt="" /></SwiperSlide> */}
        
      </Swiper>
      
    </div>
  )
}

export default HeroHeader