import React from "react";

const SellerRegistration = () => {
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
        {/* ------------------ */}
        {/* ------------------ */}
      </div>
    </div>
  );
};

export default SellerRegistration;
