"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductImage = () => {
  return (
    <>
      <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          s
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.pexels.com/photos/3210711/pexels-photo-3210711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />

          <img
            className="h-full w-full object-cover object-center"
            src="https://images.pexels.com/photos/5026973/pexels-photo-5026973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.pexels.com/photos/325845/pexels-photo-325845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.pexels.com/photos/3766113/pexels-photo-3766113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.pexels.com/photos/3083461/pexels-photo-3083461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Carousel>
      </div>
    </>
  );
};

export default ProductImage;
