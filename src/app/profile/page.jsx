"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/auth/signin");
  }

  return <div>{session?.user?.name}</div>;
};

export default Profile;
