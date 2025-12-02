import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCard from "./ReviewsCard";

const dataPromise = fetch("/reviews.json").then((res) => res.json());

const Reviews = () => {
  const allData = use(dataPromise);

  return (
    <div className="max-w-7xl mx-auto px-5 my-20">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 10,
          stretch: 200,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {allData.map((data) => (
          <SwiperSlide key={data.id}>
            <ReviewsCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
