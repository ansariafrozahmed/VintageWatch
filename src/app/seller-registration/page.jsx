import SellerResgistrationForm from "@/components/BecomeSeller/SellerResgistrationForm";
import Link from "next/link";
import React from "react";

const SellerRegistration = () => {
  return (
    <div>
      <header className="py-4 h-[12svh] px-4 md:py-5 md:px-20 flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h2 className="font-logoFont select-none text-[2rem] md:text-4xl">
              VintageWatch
            </h2>
          </Link>
        </div>
        <div className="md:flex text-center space-y-1 items-center gap-3">
          <h3 className="text-xs md:text-[0.9rem]">Already a seller ?</h3>
          <Link href={"/"}>
            <h3 className="bg-[#077E7D] inline-block active:scale-95 transition-all ease-in-out md:text-[0.9rem] text-white tracking-wider py-2 px-6 text rounded-full">
              Login
            </h3>
          </Link>
        </div>
      </header>
      <SellerResgistrationForm />
    </div>
  );
};

export default SellerRegistration;
