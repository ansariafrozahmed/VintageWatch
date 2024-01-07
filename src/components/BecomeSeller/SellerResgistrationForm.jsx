import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const SellerResgistrationForm = () => {
  return (
    <div className="px-20 py-10">
      <h2 className="text-4xl font-SecondaryFont">Welcome to Vintage Watch</h2>
      <h3 className="text-gray-700">Create your account to start selling</h3>
      <div>
        <form
          // onSubmit={handleSubmit}
          className="mt-8"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                {" "}
                Email address{" "}
              </label>
              <div className="mt-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  // value={email}
                  required
                  placeholder="Email"
                ></input>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Password{" "}
                </label>
                <Link
                  href={"/forgotpassword"}
                  title=""
                  className="text-sm font-semibold text-black hover:underline"
                >
                  {" "}
                  Forgot password?{" "}
                </Link>
              </div>
              <div className="mt-2 flex gap-1">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  //   type={showPassword ? "text" : "password"}
                  //   onChange={(e) => setPassword(e.target.value)}
                  //   value={password}
                  type="password"
                  required
                  placeholder="Password"
                ></input>
                <button
                  type="button"
                  //   onClick={handleTogglePassword}
                  className="ml-2 text-gray-500 focus:outline-none"
                >
                  {/* {showPassword ? (
                    <EyeOff className="h-6 w-6" />
                  ) : (
                    <Eye className="h-6 w-6" />
                  )} */}
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-[#077e7d] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Log In <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerResgistrationForm;
