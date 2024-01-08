import HeroSlider from "@/components/HeroSection/HeroSlider";
import MostPopular from "@/components/MostPopular/MostPopular";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import HomeProductSection from "@/components/ProductCard/HomeProductSection";
import Summary from "@/components/Summary";
import React from "react";

const Home = async () => {
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      <HeroSlider />
      <Summary />
      <NewArrivals />
      <MostPopular />
      <HomeProductSection />
    </div>
  );
};

// export const BACKENDURL = "http://localhost:4000/";
export const BACKENDURL = "https://vw-backend.onrender.com/";
export default Home;
