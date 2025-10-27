"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignupPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { email, password };

    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      alert("User already registered!");
    
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");
    router.push("/auth/login");
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-4">

           <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-app_primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-app_primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-app_primary focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-app_primary  text-white font-semibold py-3 rounded-lg transition-all"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/auth/login")}
            className="text-app_primary hover:underline font-medium"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
