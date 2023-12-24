"use client";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <p className="py-3 text-sm text-center font-medium text-gray-500">
        © {currentYear} VintageWatch. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
