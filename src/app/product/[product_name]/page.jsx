import ProductImage from "@/components/ProductPage/ProductImage";
import RelatedProducts from "@/components/ProductPage/RelatedProducts";
import { Heart } from "lucide-react";
import React from "react";

const ProductDetails = () => {
  return (
    <>
      <div className="w-full px-5 md:px-20 md:py-10">
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
              Product Name
            </div>
            {/* Product title end */}

            {/* BRAND */}
            <div className="text-lg font-semibold mb-5">Brand</div>
            {/* BRAND */}

            <div></div>

            <div>
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
            </div>

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
      </div>
      <RelatedProducts />
    </>
  );
};

export default ProductDetails;
