import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import slide1 from '../assets/images/rick.jpg'
import slide2 from '../assets/images/admin.jpg'
import slide3 from '../assets/images/chair.jpg'
import slide4 from '../assets/images/black.jpg'
import Available_jobs from '../components/Available_jobs';
import Recruit from '../components/Recruit';

const home_content = [
    {
        id: 1,
        image: slide1,
        title: "Delta",
        description: "Asset Management, Hedge Funds and related industries providing a full-service offering including specialized headhunting and general recruitment.",
        btn: "Get Started"
    },
    {
        id: 2,
        image: slide2,
        title: "Recruitment specialists for the Stockbroking",
        description: "Asset Management, Hedge Funds and related industries providing a full-service offering including specialized headhunting and general recruitment.",
        btn: "Get Started"
    },
    {
        id: 3,
        image: slide3,
        title: "Looking for a career change?",
        description: "Asset Management, Hedge Funds and related industries providing a full-service offering including specialized headhunting and general recruitment.",
        btn: "Get Started"
    },
    {
        id: 4,
        image: slide4,
        title: " Browse our job listings now!",
        description: "Asset Management, Hedge Funds and related industries providing a full-service offering including specialized headhunting and general recruitment.",
        btn: "Get Started"
    },
]

const Home = () => {
  return (
    <div>
      <div className="home">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {home_content.map((item)=>(
                <SwiperSlide key={item.id} className='home_slide'>
                    <img src={item.image} alt="" />
                    <div className="container">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <button className='btn'>{item.btn}</button>
                    </div>
                </SwiperSlide>
            ))}
      </Swiper>
      </div>
      <Recruit />
      <Available_jobs />
    </div>
  )
}

export default Home
