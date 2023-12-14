import HeroSlider from "@/components/HeroSection/HeroSlider";
import MostPopular from "@/components/MostPopular/MostPopular";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import HomeProductSection from "@/components/ProductCard/HomeProductSection";
import Summary from "@/components/Summary";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSlider />
      <NewArrivals />
      <Summary />
      <MostPopular />
      <HomeProductSection />
    </div>
  );
};

export default page;
