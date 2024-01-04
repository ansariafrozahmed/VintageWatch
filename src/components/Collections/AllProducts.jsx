import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const AllProducts = () => {
  return (
    <div className="px-10 py-3 grid grid-cols-5 gap-5">
      {Array(20)
        .fill()
        .map((_, index) => (
          <ProductCard />
        ))}
    </div>
  );
};

export default AllProducts;
