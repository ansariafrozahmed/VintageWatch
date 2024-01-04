"use client";
import { Popover } from "antd";
import { LogOut, Menu, User, UserRound, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [toggleNav, setToggleNav] = useState(true);

  // console.log("HEADER");
  useEffect(() => {
    // Check if window is defined (i.e., if the code is running on the client side)
    if (typeof window !== "undefined") {
      // Retrieve the item from localStorage
      const storedDataString = localStorage.getItem("vwuser");

      // Convert the JSON string to a JavaScript object
      const storedData = JSON.parse(storedDataString);

      // Now you can use the 'storedData' in your component
      //   console.log(storedData);
      setUser(storedData);
    }
  }, []);

  const handleMenu = () => {
    setToggleNav(!toggleNav);
  };

  const handleSignOut = () => {
    // Clear authentication data from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("vwuser");
    }
    toast.success("Sign Out Successfully");
    // Redirect to the home page or any other desired page after sign-out
    setTimeout(() => {
      router.push("/auth/signin");
    }, 1000);
  };

  const content = (
    <div>
      <Link href={"/profile"}>
        <p className="flex items-center gap-2 transition-all ease-in-out px-5 p-2 hover:bg-gray-100">
          <User size={17} className="mt-0.50" />
          My Account
        </p>
      </Link>
      <p
        onClick={handleSignOut}
        className="flex cursor-pointer items-center gap-2 transition-all ease-in-out px-5 p-2 hover:bg-gray-100"
      >
        <LogOut size={17} className="mt-0.5" />
        Sign Out
      </p>
    </div>
  );

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
          {user ? (
            <Popover trigger="click" content={content}>
              <div className="cursor-pointer flex gap-1.5 items-center hover:bg-gray-100 lg:px-5 p-3 rounded-full">
                <UserRound size={25} strokeWidth={1} />
                <h2 className="hidden lg:block text-sm">Profile</h2>
              </div>
            </Popover>
          ) : (
            <Link
              href={"/auth/signin"}
              className="flex gap-1.5 items-center hover:bg-gray-100 lg:px-5 p-3 rounded-full"
            >
              <UserRound size={25} strokeWidth={1} />
              <h2 className="hidden lg:block text-sm">Log In</h2>
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
