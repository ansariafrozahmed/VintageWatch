import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <div className="border border-gray-600 shadow-md ">
      <Link href={"/product/productname?id=106"}>
        <div className="aspect-[3/4]">
          <img
            className="object-cover object-center h-full w-full"
            src="https://images.pexels.com/photos/47856/rolex-wrist-watch-clock-gmt-47856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="px-5 py-2 space-y-1 text-center">
          <h2 className="text-gray-700 text-sm">Rolex</h2>
          <h3 className="line-clamp-1">Vintage watch and many more watches</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
