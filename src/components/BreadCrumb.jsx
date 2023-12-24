import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const BreadCrumb = ({ page }) => {
  return (
    <div className="px-5 py-3 lg:px-10 lg:py-4">
      <ul className="flex gap-[0.2rem] font-medium text-sm items-center justify-start">
        <li className=" text-gray-700 font-semibold">
          <Link href={"/"}>Home</Link>
        </li>
        <ChevronRight size={20} strokeWidth={1} />
        <li>{page}</li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
