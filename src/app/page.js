import HeroSlider from "@/components/HeroSection/HeroSlider";
import MostPopular from "@/components/MostPopular/MostPopular";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import HomeProductSection from "@/components/ProductCard/HomeProductSection";
import Summary from "@/components/Summary";
import React from "react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";

const page = async () => {
  // const data = await getServerSession(authOptions);

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

export default page;
