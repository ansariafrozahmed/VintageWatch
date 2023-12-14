"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import ProductCard from "../ProductCard/ProductCard";

const NewArrivals = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="py-10 lg:py-20 ">
      <div className="inline-block mx-5 lg:mx-20 leading-none font-SecondaryFont">
        <h3 className="md:text-xl">Check out !</h3>
        <h2 className="text-4xl md:text-5xl">New Arrivals</h2>
        {/* <h2 className="text-right md:text-xl">for this month...</h2> */}
      </div>
      <div>
        <Swiper
          className="!py-10"
          spaceBetween={10}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={6}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            // when window width is >= 1200px (desktop)
            1200: {
              slidesPerView: 6,
            },
            1000: {
              slidesPerView: 5.5,
            },
            800: {
              slidesPerView: 4.5,
            },
            600: {
              slidesPerView: 3.2,
            },
            400: {
              slidesPerView: 2.1,
            },
            300: {
              slidesPerView: 2,
            },
          }}
        >
          {data.map((index) => (
            <SwiperSlide key={index}>
              <ProductCard />
            </SwiperSlide>
          ))}
          {/* <div className="swiper-button-next text-white"></div>
          <div className="swiper-button-prev text-white"></div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
