"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { signout } from "@/lib";
import Button from "../Button";

const SignOutButton = (): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    signout();
    router.push("/signin");
  };

  return (
    <Button size="small" onClick={handleClick}>
      sign out
    </Button>
  );
};

export default SignOutButton;
