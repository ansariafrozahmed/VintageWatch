import { Package, Plus } from "lucide-react";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Link from "next/link";
import { Tooltip } from "antd";

const SellerOptions = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2 className="text-3xl lg:text-4xl font-SecondaryFont">
            Your Products
          </h2>
          <Package />
        </div>
        <Link href={"#"} className="">
          <div className="flex gap-2 transition-all shadow-lg ease-in-out items-center hover:scale-105 active:scale-95 bg-[#077E7D] text-white p-2 lg:p-3 rounded-full">
            {/* <h2 className="text-xl font-SecondaryFont">Upload</h2> */}
            <Tooltip title="Upload Product" placement="leftTop" color="#077E7D">
              <Plus size={30} />
            </Tooltip>
          </div>
        </Link>
      </div>
      {/* <div className="border mt-5 border-black"></div> */}
      {/* -------------------- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-5 py-5">
        {Array(20)
          .fill()
          .map((_, index) => (
            <div className="">
              <ProductCard />
            </div>
          ))}
      </div>
    </>
  );
};

export default SellerOptions;
