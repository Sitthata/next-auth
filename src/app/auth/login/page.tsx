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
import SignInWithGithub from "@/components/SignInWithGithub";
import { Separator } from "@/components/ui/separator";

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
          <Button className="w-full" variant="outline">
            Sign in with Email
          </Button>
        </CardContent>
        <Separator />
        <CardFooter className="mt-2 flex flex-col gap-2">
          <CardDescription>
            Or continue with
          </CardDescription>
          <SignInWithGithub />
        </CardFooter>
      </Card>
    </section>
  );
};

export default login;
