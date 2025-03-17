"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthButtons() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="p-2 bg-red-500 text-white"
          >
            Sign Out
          </button>
        </>
      ) : (
        <div className="flex gap-x-4">
          <button
            onClick={() => router.push("/signup-email")}
            className="p-2 bg-blue-500 text-white"
          >
            Sign Up with Email
          </button>
          <button
            onClick={() => signIn()}
            className="p-2 bg-blue-500 text-white"
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}
