"use client";
import React, { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInComp = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result.ok) {
        // Redirect to the desired page on successful login
        // toast.success("Successfully toasted!");
        // console.log(result, "RESULT");
        router.push("/profile");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      // Handle the error as needed, e.g., display an error message to the user
    }
  };

  if (session) {
    // router.push("/profile"); // Change "/dashboard" to your desired authenticated route
    return null; // Return null to prevent rendering the sign-in form
  }

  return (
    <div>
      <section>
        <Toaster position="top-center" reverseOrder={true} />
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-16">
          <div className="w-full md:max-w-md px-3">
            {/* <div className="mb-5 flex justify-center">
              <Link href={"/"}>
                <h1 className="font-logoFont text-5xl">VintageWatch</h1>
              </Link>
            </div> */}
            <h2 className=" text-4xl font-semibold leading-tight text-black">
              Sign In
            </h2>
            <p className="mt-2 text-sm text-gray-600 ">
              Don&apos;t have an account?{" "}
              <Link
                href={"/auth/signup"}
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Sign Up
              </Link>
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
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
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      // value={}
                      required
                      placeholder="Password"
                    ></input>
                    <button
                      type="button"
                      onClick={handleTogglePassword}
                      className="ml-2 text-gray-500 focus:outline-none"
                    >
                      {showPassword ? (
                        <EyeOff className="h-6 w-6" />
                      ) : (
                        <Eye className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Log In <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            {/* <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-[#2563EB]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </span>
                Sign in with Facebook
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignInComp;
