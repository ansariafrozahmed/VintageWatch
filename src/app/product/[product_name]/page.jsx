import ProductImage from "@/components/ProductPage/ProductImage";
import RelatedProducts from "@/components/ProductPage/RelatedProducts";
import { Heart } from "lucide-react";
import React from "react";

const ProductDetails = () => {
  return (
    <>
      <div className="w-full md:px-20 md:py-10">
        {/* <Wrapper> */}
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left col start */}
          <div className="w-full md:w-auto flex-[1] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductImage />
          </div>
          {/* left col end */}

          {/* right col start */}

          <div className="flex-[1] py-3">
            {/* Product title */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              Jordan Retro 6
            </div>
            {/* Product title end */}

            {/* subtitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Wear
            </div>
            {/* subtitle */}

            {/* Price */}
            <div className="text-lg font-semibold">MRP :$ 197.00</div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>

            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 9
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 9.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 10
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  Uk 10.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.5] opacity-50">
                  Uk 11
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.5] opacity-50">
                  Uk 12
                </div>
              </div>

              {/* {Size End} */}

              {/* SHOW ERROR START */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>

              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE End */}

            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>

            {/* ADD TO CART BUTTON End */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <Heart />
            </button>
            {/* WHISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              {/* Description of product */}
              <div className="text-md mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio dolor in maxime corrupti? Quas assumenda temporibus
                nulla laborum ipsum mollitia. Soluta rem magnam ab sit,
                veritatis maiores adipisci necessitatibus natus quam dolores non
                ut perspiciatis quia explicabo culpa minus ipsa sequi quae cum
                fugit. Doloribus repellendus sit illum suscipit corporis!
              </div>
              <div className="text-md mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio dolor in maxime corrupti? Quas assumenda temporibus
                nulla laborum ipsum mollitia. Soluta rem magnam ab sit,
                veritatis maiores adipisci necessitatibus natus quam dolores non
                ut perspiciatis quia explicabo culpa minus ipsa sequi quae cum
                fugit. Doloribus repellendus sit illum suscipit corporis!
              </div>
              <div className="text-md mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio dolor in maxime corrupti? Quas assumenda temporibus
                nulla laborum ipsum mollitia. Soluta rem magnam ab sit,
                veritatis maiores adipisci necessitatibus natus quam dolores non
                ut perspiciatis quia explicabo culpa minus ipsa sequi quae cum
                fugit. Doloribus repellendus sit illum suscipit corporis!
              </div>
              <div className="text-md mb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio dolor in maxime corrupti? Quas assumenda temporibus
                nulla laborum ipsum mollitia. Soluta rem magnam ab sit,
                veritatis maiores adipisci necessitatibus natus quam dolores non
                ut perspiciatis quia explicabo culpa minus ipsa sequi quae cum
                fugit. Doloribus repellendus sit illum suscipit corporis!
              </div>
            </div>
          </div>
          {/* right col end */}
        </div>

        <RelatedProducts />
        {/* </Wrapper> */}
      </div>
    </>
  );
};

export default ProductDetails;
