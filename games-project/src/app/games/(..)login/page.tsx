"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center
         justify-center bg-black/95"
        >
          <div
            className="w-full max-w-md p-6 bg-white
           rounded-lg shadow-md relative"
          >
            <button
              onClick={() => router.push("/games")}
              className="absolute top-3 right-3 text-gray-500
               hover:text-gray-700 font-bold"
            >
              &#10005;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center text-black">Login</h2>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium
                 text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 mt-1 border
                   rounded-lg focus:outline-none focus:ring
                    focus:border-blue-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium
                 text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 mt-1 border
                   rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-gray-900
                 rounded-lg hover:bg-blue-600 focus:outline-none
                  focus:ring focus:ring-blue-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginPage;