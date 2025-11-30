import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import amazon from "../../../assets/brands/amazon.png"
import amazon_vector from "../../../assets/brands/amazon_vector.png"
import casio from "../../../assets/brands/casio.png"
import moonstar from "../../../assets/brands/moonstar.png"
import randstad from "../../../assets/brands/randstad.png"
import star from "../../../assets/brands/star.png"
import start_people from "../../../assets/brands/start_people.png"

const SalesTeams = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 my-20">
      <h2 className="text-2xl font-bold text-secondary text-center">
        We've helped thousands of sales teams
      </h2>
      <Swiper
        className="mt-10"
        slidesPerView={5}
         loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide><img src={amazon} alt="" /></SwiperSlide>
        <SwiperSlide><img src={amazon_vector} alt="" /></SwiperSlide>
        <SwiperSlide><img src={casio} alt="" /></SwiperSlide>
        <SwiperSlide><img src={moonstar} alt="" /></SwiperSlide>
        <SwiperSlide><img src={randstad} alt="" /></SwiperSlide>
        <SwiperSlide><img src={star} alt="" /></SwiperSlide>
        <SwiperSlide><img src={start_people} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SalesTeams;
