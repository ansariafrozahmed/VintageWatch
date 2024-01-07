import { BecomeSellerAccordion } from "@/components/BecomeSeller/Accordion";
import BecomeSeller from "@/components/BecomeSeller/BecomeSeller";
import Link from "next/link";
import React from "react";

const Seller = () => {
  return (
    <div>
      <div className="py-10 px-5 lg:py-10 lg:px-28 w-full lg:flex relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://m.media-amazon.com/images/G/01/sell/images/illustration/pf-wave-horizon-1.svg)",
            backgroundAttachment: "scroll",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            transform: "rotate(180deg)", // Rotate the image 180 degrees (upside down)
            zIndex: -1, // Set a lower z-index for the background layer
          }}
        ></div>

        <div className="lg:w-1/2 my-auto space-y-3 md:space-y-5 text-center lg:text-left z-10">
          <h2 className="text-[2.5rem] md:text-6xl font-SecondaryFont">
            Become A Seller
          </h2>
          <p className="md:text-lg">
            Sell on vintagewatch.in, India's most visited vintage watch
            destination
          </p>
          <div>
            <Link href={"/seller-registration"}>
              <p className="bg-[#077E7D] inline-block shadow-xl hover:scale-105 active:scale-95 transition-all ease-in-out text-white text-lg py-3 px-8 rounded-full">
                Start Selling
              </p>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 grid place-content-center">
          <img
            className="h-full md:h-[400px] w-full md:w-[400px] object-contain"
            src="https://m.media-amazon.com/images/G/31/amazonservices/PR-Sell.webp"
            alt=""
          />
        </div>
      </div>

      <BecomeSeller />
      <BecomeSellerAccordion />
    </div>
  );
};

export default Seller;
