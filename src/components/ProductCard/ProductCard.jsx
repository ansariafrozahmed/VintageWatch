import React from "react";

const ProductCard = () => {
  return (
    <div className="border shadow-md rounded-lg ">
      <div className="aspect-[3/4]">
        <img
          className="object-contain h-full w-full"
          src="https://images.secondmovement.com/media/catalog/product/cache/740f07c2874873cb81dfd99f3cb159d1/o/r/oris-aquis-01-733-7730-4135-powg21d.jpg"
          alt=""
        />
      </div>
      <div className="p-5 space-y-1 text-center">
        <h2 className="text-gray-700 text-sm">Rolex</h2>
        <h3 className="line-clamp-1">Vintage watch and many more watches</h3>
      </div>
    </div>
  );
};

export default ProductCard;
