"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import ProductCard from "../ProductCard/ProductCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const NewArrivals = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="py-10 lg:py-20 ">
      <div className="flex items-center justify-between mx-5 lg:mx-20 leading-none font-SecondaryFont">
        <div>
          <h3 className="md:text-xl">Check out !</h3>
          <h2 className="text-3xl md:text-5xl">New Arrivals</h2>
        </div>
        <div className="group">
          <Link className="flex items-center gap-1" href={"collections"}>
            <h2 className=" md:text-xl">View All</h2>
            <ChevronRight
              strokeWidth={1}
              className="transition-all ease-in-out group-hover:scale-150"
            />
          </Link>
        </div>
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
