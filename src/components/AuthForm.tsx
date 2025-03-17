"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  //   signInWithEmailAndPassword,
} from "firebase/auth";

import { useRouter } from "next/navigation";

export default function AuthForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setLoading(true);
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  //   const handleLogin = async () => {
  //     setLoading(true);
  //     setError("");
  //     try {
  //       await signInWithEmailAndPassword(auth, email, password);
  //       alert("Login successful!");
  //     } catch (err: any) {
  //       setError(err.message);
  //     }
  //     setLoading(false);
  //   };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="email"
        placeholder="Email"
        className="p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSignup}
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Sign Up
      </button>
      {/* <button
        onClick={handleLogin}
        disabled={loading}
        className="bg-green-500 text-white p-2 rounded"
      >
        Log In
      </button> */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
