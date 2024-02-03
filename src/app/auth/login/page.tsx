import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const login = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      
      <Card className="min-w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter email below to sign in to our application
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Input placeholder="name@example.com" type="email" />
          <Button className="w-full" variant="outline">Sign in with Email</Button>
        </CardContent>
        <hr className="mx-5" />
        <CardFooter className="mt-2">
          <Button className="w-full flex gap-3">
            <FaGithub />
            Sign in with github
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default login;
