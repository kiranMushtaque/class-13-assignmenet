"use client";

import dynamic from "next/dynamic";

// Dynamically import SignInButton and UserButton for client-side rendering
const SignInButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignInButton),
  { ssr: false }
);
const UserButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.UserButton),
  { ssr: false }
);
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col justify-center items-center min-h-screen p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Welcome to My App
          </h1>

          <SignedOut>
            <p className="text-lg text-gray-600 mb-4">
              You are not signed in. Please sign in to continue.
            </p>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">
                Welcome back! You are signed in.
              </p>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
