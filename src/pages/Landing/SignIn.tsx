import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="">
          <img
            className="w-auto h-8 mx-auto"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg"
            alt=""
          />
        </div>

        <div className="grid max-w-lg grid-cols-1 mx-auto mt-8 gap-y-12 lg:mt-24 lg:max-w-none lg:grid-cols-2">
          <div className="lg:px-12 xl:px-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                Use CodeHive
              </h1>

              <div className="flex justify-center flex-shrink-0 mt-8 -space-x-4 overflow-hidden">
                <img
                  className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-male-1.png"
                  alt=""
                />
                <img
                  className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-female-1.png"
                  alt=""
                />
                <img
                  className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-female-2.png"
                  alt=""
                />
                <img
                  className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-female-3.png"
                  alt=""
                />
                <img
                  className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-male-2.png"
                  alt=""
                />
                <img
                  className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-female-4.png"
                  alt=""
                />
                <img
                  className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/avatar-female-5.png"
                  alt=""
                />
              </div>

              <p className="px-4 mt-5 text-lg font-normal text-gray-900 sm:px-0 font-pj">
                See what other{" "}
                <span className="font-bold">4600+ Developers</span> are doing
              </p>
            </div>

            <form action="#" method="POST" className="mt-10">
              <div className="space-y-3">
                <div>
                  <label className="sr-only"> Email address </label>
                  <div>
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Email address"
                      className="
                                        block
                                        w-full
                                        px-4
                                        py-4
                                        overflow-hidden
                                        text-base
                                        font-normal
                                        text-gray-900
                                        placeholder-gray-600
                                        transition-all
                                        duration-200
                                        border border-gray-300
                                        caret-gray-900
                                        rounded-xl
                                        bg-gray-50
                                        focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-gray-900
                                        font-pj
                                    "
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only"> Password </label>
                  <div>
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Password (min. 8 characters)"
                      className="
                                        block
                                        w-full
                                        px-4
                                        py-4
                                        overflow-hidden
                                        text-base
                                        font-normal
                                        text-gray-900
                                        placeholder-gray-600
                                        transition-all
                                        duration-200
                                        border border-gray-300
                                        caret-gray-900
                                        rounded-xl
                                        bg-gray-50
                                        focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-gray-900
                                        font-pj
                                    "
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      className="w-5 h-5 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                    />
                  </div>

                  <div className="ml-3 text-base">
                    <label className="font-normal text-gray-900 font-pj">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <a
                  href="#"
                  title=""
                  className="text-base font-medium text-gray-500 rounded hover:text-gray-900 font-pj hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Forgot Password?{" "}
                </a>
              </div>

              <div className="relative mt-8">
                <div className="absolute -inset-2">
                  <div className="w-full h-full mx-auto opacity-30 blur-lg filter x"></div>
                </div>

                <button
                  type="submit"
                  className="relative flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="mt-4 text-base text-center text-gray-900 font-pj">
              Don’t have an account?{" "}
              <Link
                to="/"
                title=""
                className="font-bold rounded hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Create for Free
              </Link>
            </p>
          </div>

          <div className="lg:px-12 xl:px-16">
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pj">
              Grow your business fast with Rareblocks UI Kit.
            </h3>

            <svg
              className="w-auto h-4 mt-8 text-gray-300 lg:mt-12"
              viewBox="0 0 172 16"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
              />
            </svg>

            <ul className="mt-8 space-y-6 lg:mt-12 md:space-y-9">
              <li className="flex items-startt">
                <img
                  className="flex-shrink-0 w-10 h-10"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/icon-thumb.png"
                  alt=""
                />
                <span className="ml-6 text-xl font-normal leading-relaxed text-gray-900 font-pj">
                  {" "}
                  <span className="font-bold">Proven success rate.</span> Consec
                  tetur adipis cing elit. Sit ornare adipiscing nunc, est nec,
                  neque aliquet maecenas mi.{" "}
                </span>
              </li>

              <li className="flex items-startt">
                <img
                  className="flex-shrink-0 w-10 h-10"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/icon-mailbox.png"
                  alt=""
                />
                <span className="ml-6 text-xl font-normal leading-relaxed text-gray-900 font-pj">
                  {" "}
                  <span className="font-bold">
                    Get reports every week.
                  </span>{" "}
                  Tetur adipis cing elit. Sit ornare adipiscing nunc, est nec,
                  neque aliquet maecenas mi.{" "}
                </span>
              </li>

              <li className="flex items-startt">
                <img
                  className="flex-shrink-0 w-10 h-10"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/1/icon-sand-clock.png"
                  alt=""
                />
                <span className="ml-6 text-xl font-normal leading-relaxed text-gray-900 font-pj">
                  {" "}
                  <span className="font-bold">Task manager.</span> Tetur adipis
                  cing elit. Sit ornare adipiscing nunc, est nec, neque aliquet
                  maecenas mi.{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignIn;
