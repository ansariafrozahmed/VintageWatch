"use client";
import { Menu, UserRound, X } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const { data: session } = useSession();
  const [toggleNav, setToggleNav] = useState(true);

  useEffect(() => {
    console.log(session, "DDDDDDDDDDDDDDDDD");
  }, [session]);

  const handleMenu = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <div className="h-[11svh] shadow px-5 xl:px-20 flex items-center w-full">
      <div className="w-full flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="font-logoFont text-[2rem] lg:text-[2.2rem]">
              VintageWatch
            </h1>
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-5 xl:gap-10 items-center justify-center">
            <Link href={"/collections"}>
              <li>Buy a watch</li>
            </Link>
            <Link href={"/become-a-seller"}>
              <li>Sell a watch</li>
            </Link>
            <Link href={"/about-us"}>
              <li>About us</li>
            </Link>
            <Link href={"/contact-us"}>
              <li>Contact us</li>
            </Link>
            <Link href={"/faqs"}>
              <li>FAQs</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-2">
          {session ? (
            <Link
              href={"/profile"}
              className="flex gap-1.5 items-center hover:bg-gray-100 lg:px-5 p-3 rounded-full"
            >
              <UserRound size={25} strokeWidth={1} />
              <h2 className="hidden lg:block text-sm">Profile</h2>
            </Link>
          ) : (
            <Link
              href={"/auth/signin"}
              className="flex gap-1.5 items-center hover:bg-gray-100 lg:px-5 p-3 rounded-full"
            >
              <UserRound size={25} strokeWidth={1} />
              <h2 className="hidden lg:block text-sm">Log in or register</h2>
            </Link>
          )}
          <div className="lg:hidden">
            {toggleNav ? (
              <Menu size={30} onClick={handleMenu} className="cursor-pointer" />
            ) : (
              <X size={30} onClick={handleMenu} className="cursor-pointer" />
            )}
            <div
              className={`absolute top-[15vh] left-0 w-full p-3 bg-white z-50 transition-all ease-in-out ${
                toggleNav ? "scale-0" : "scale-100"
              }`}
            >
              <ul className="text-center">
                <li>Buy a watch</li>
                <li>Sell a watch</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
