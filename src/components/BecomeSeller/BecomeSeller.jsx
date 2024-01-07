import { StepForward } from "lucide-react";
import Link from "next/link";
import React from "react";

const BecomeSeller = () => {
  const data = [
    {
      heading: "Register your account as a seller",
      description: "Fill out the seller registration form",
    },
    {
      heading: "Get approved by the admin",
      description: "Admin will review you details and approved your account",
    },
    {
      heading: "listing your products",
      description: "After getting approval you can start listing the products",
    },
  ];

  return (
    <div className="p-5 lg:p-10 grid place-content-center">
      <h2 className="text-4xl lg:text-5xl text-center font-SecondaryFont">
        How to sell on VintageWatch.in
      </h2>
      <div className="w-full grid place-content-center space-y-12 py-14">
        {data?.map((item, index) => (
          <div key={index} className="flex gap-3 items-center">
            {/* <StepForward size={60} color="#077E7D" /> */}
            <span className="text-5xl lg:text-7xl font-bold text-[#077E7D]">
              0{index + 1}
            </span>
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold">
                {item.heading}
              </h2>
              <h3 className="text-[1rem]">{item.description}</h3>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="text-center"> */}
      <Link href={"/seller-registration"}>
        <p className="bg-[#077E7D] text-center shadow-xl hover:scale-105 active:scale-95 transition-all ease-in-out text-white text-lg py-3 px-8 rounded-full">
          Start Selling
        </p>
      </Link>
      {/* </div> */}
    </div>
  );
};

export default BecomeSeller;
