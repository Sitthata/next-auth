"use client";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const SignInWithGithub = () => {
  const handleOnClick = () => {
    signIn("github", {
      callbackUrl: `${window.location.origin}`,
    });
  };
  return (
    <Button onClick={handleOnClick} className="w-full flex gap-3">
      <FaGithub />
      Sign in with github
    </Button>
  );
};

export default SignInWithGithub;
