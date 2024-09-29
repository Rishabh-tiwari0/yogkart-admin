"use client";

import { useState } from "react";

const SignUp = () => {
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(userDetail);
  const createUser = () => {
    if (userDetail.password != userDetail.confirmPassword) {
      console.log("password do not match");
      return;
    }
    signUp(userDetail.email, userDetail.password);
  };

  return (
    <div
      id="login-popup"
      tabIndex={-1}
      className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
    >
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="p-5">
            <h3 className="text-2xl mb-0.5 font-medium"></h3>
            <p className="mb-4 text-sm font-normal text-gray-800"></p>

            <div className="text-center">
              <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                Create new account{" "}
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-2">
              <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                <img
                  src="https://www.svgrepo.com/show/512317/github-142.svg"
                  alt="GitHub"
                  className="h-[18px] w-[18px] "
                />
                Continue with GitHub
              </button>

              <button
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
                disabled
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-[18px] w-[18px] "
                />
                Continue with Google
              </button>

              <button
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
                disabled
              >
                <img
                  src="https://www.svgrepo.com/show/448234/linkedin.svg"
                  alt="Google"
                  className="h-[18px] w-[18px] "
                />
                Continue with LinkedIn
              </button>
            </div>

            <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
              <div className="h-px w-full bg-slate-200"></div>
              OR
              <div className="h-px w-full bg-slate-200"></div>
            </div>

            <form className="w-full">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Email Address"
                onChange={(e) => {
                  setUserDetail({ ...userDetail, email: e.target.value });
                }}
              />
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Password"
                onChange={(e) => {
                  setUserDetail({ ...userDetail, password: e.target.value });
                }}
              />
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                name="confirm password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-2 mb-4 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                placeholder="Confirm Password"
                onChange={(e) => {
                  setUserDetail({
                    ...userDetail,
                    confirmPassword: e.target.value,
                  });
                }}
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
              >
                Continue
              </button>
            </form>
            <div className="mt-6 text-center text-sm text-slate-600">
              already have an account?
              <a href="/sign-up" className="font-medium text-[#4285f4]">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
