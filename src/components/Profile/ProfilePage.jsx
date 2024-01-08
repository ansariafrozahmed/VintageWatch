"use client";
import { MapPin, UserRound } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SellerOptions from "./SellerOptions";

const renderLoginFirst = () => {
  return (
    <div className="bg-white py-16 rounded-t-2xl flex flex-col items-center justify-center">
      <Link
        href={"/auth/signin"}
        className="flex gap-1.5 items-center hover:bg-gray-100 lg:px-5 p-3 rounded-full"
      >
        <UserRound size={25} strokeWidth={1} />
        <h2 className="text-sm">Please Login First</h2>
      </Link>
    </div>
  );
};

const ProfilePage = () => {
  const [user, setUser] = useState(null);

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

  return (
    <>
      <div>
        <div
          style={{
            backgroundImage: "url(profile-bg.webp)",
            backgroundAttachment: "scroll",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
          className="h-[30svh] px-5 lg:px-10 mb-20 py-28"
        >
          {!user ? (
            <>{renderLoginFirst()}</>
          ) : (
            <div className="bg-white py-10 rounded-t-2xl flex flex-col items-center justify-center">
              <div className="h-32 w-32 bg-white pt-1 -mt-28 rounded-full overflow-hidden">
                {/* <img src="avatar-placseholder.jpg" alt="" /> */}
                <img
                  src={`https://api.dicebear.com/7.x/micah/svg?seed=${user?.name}`}
                  alt={user?.name}
                />
              </div>
              <div className="py-5">
                <h2 className="text-center text-3xl font-medium font-SecondaryFont">
                  {user?.name}
                </h2>
                <h3 className="text-center text-gray-700 py-1">
                  {user?.email}
                </h3>
                <div className="flex gap-1 items-center justify-center py-1 text-gray-700">
                  <MapPin size={20} />
                  <span>Mumbai</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-5 lg:py-10 lg:px-20">
        <SellerOptions />
      </div>
    </>
  );
};

export default ProfilePage;
