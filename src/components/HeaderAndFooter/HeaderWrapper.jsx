"use client";
import React from "react";
import Header from "./Header";
import { usePathname } from "next/navigation";

const HeaderWrapper = () => {
  const path = usePathname();
  //   console.log(path, "WRAPPER");
  return (
    <>{path !== "/auth/signin" && path !== "/auth/signup" && <Header />}</>
  );
};

export default HeaderWrapper;
