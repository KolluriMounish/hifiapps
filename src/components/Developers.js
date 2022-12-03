import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import userImg from '../images/user.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const data = [
    {
        id:1,
        username : "Manoj",
        testimonial : "Python Developer"
    },
    {
        id:2,
        username : "Ashok",
        testimonial : "AWS Admin"
    },
    {
        id:3,
        username : "Raj Kumar",
        testimonial : "React Developer"
    },
    {
        id:4,
        username : "Sai Kumar",
        testimonial : "Salesforce Developer"
    },
    {
        id:5,
        username : "Dinesh",
        testimonial : "CRM Developer"
    },
    {
        id:6,
        username : "Vinay",
        testimonial : "Python Developer"
    },
    {
        id:7,
        username : "Venkat",
        testimonial : "IOS Developer"
    },
    {
        id:8,
        username : "Hemant",
        testimonial : "React Developer"
    },
    {
        id:9,
        username : "Mounika",
        testimonial : "Salesforce CRM Admin"
    },
    {
        id:10,
        username : "Pavani",
        testimonial : "Python Developer"
    },
    {
        id:11,
        username : "Aswani",
        testimonial : "Ios Developer"
    }
]

const Developers = () => {
  return (
    <div id='team' className='h-100'>
        <div className="container py-5">
            <h1 className='text-center'>Meet Our Team</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true,
                }}
                scrollbar={{ draggable: true}}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    data.map( user => (
                        <SwiperSlide key={user.id} className="slide">
                            <div className='slide-content'>
                                <div className='user-image'></div>
                                <img className='user-photo' src={userImg} alt="" />
                            </div>
                            <h5>{user.username}</h5>
                            <p>{user.testimonial}</p>
                        </SwiperSlide>       
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Developers