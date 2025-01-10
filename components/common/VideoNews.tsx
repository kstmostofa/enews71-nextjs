'use client";'
import React from "react";
import Separator from "../Separator";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const VideoNews = () => {
  return (
    <div>
      <Separator text="ভিডিও সংবাদ" />
      <Swiper
        // spaceBetween={50}
        // slidesPerView={4.2}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="">
                <div className="w-full h-40 bg-gray-300"></div>
              </div>
            </SwiperSlide>
          );
        })} */}
      </Swiper>
    </div>
  );
};

export default VideoNews;
