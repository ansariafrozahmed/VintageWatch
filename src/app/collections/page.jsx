import BreadCrumb from "@/components/BreadCrumb";
import AllProducts from "@/components/Collections/AllProducts";
import React from "react";

const Collections = () => {
  return (
    <div>
      <BreadCrumb page={"Our Collections"} />
      <AllProducts />
    </div>
  );
};

export default Collections;
