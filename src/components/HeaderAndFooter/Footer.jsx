"use client";

import Link from "next/link";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <p className="py-3 text-sm text-center font-medium text-gray-700">
        © {currentYear}{" "}
        <Link className="text-black" href={"/"}>
          VintageWatch
        </Link>
        . All rights reserved.
      </p>
    </>
  );
};

export default Footer;
