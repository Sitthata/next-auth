"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <section className="mt-[10rem]">
      <div>
        <h2 className="text-2xl font-semibold">Welcome</h2>
        {session ? (
          <>
          <p>Logged in as {session?.user.email}</p>
          <h1>{session?.user.name}</h1>
          <h1>{session?.user.role}</h1>
          <h1>{session?.user.image}</h1>
          </>
        ) : (
          // Prompt to sign in if the user is not logged in
          <p className="text-lg">
            This is a test of the authentication system. Sign in for interesting stuff.
          </p>
        )}
      </div>
    </section>
  );
}
