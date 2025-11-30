import React, { use } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
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
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
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
