import React from "react";
import { Button } from "./button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between px-3 py-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <Link href="/">
        <h1 className="text-3xl font-bold cursor-pointer">Auth Test</h1>
      </Link>

      <div className="flex gap-2">
        <Link href="/auth/login">
          <Button>Login</Button>
        </Link>
        <Button variant="outline">Sign up</Button>
      </div>
    </div>
  );
};

export default Navbar;
