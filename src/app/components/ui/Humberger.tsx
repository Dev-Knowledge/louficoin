"use client";
import React, { useState } from "react";

function Humberger() {
  const [Isopen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!Isopen)} className=" cursor-pointer z-30 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <nav
        className={
          Isopen
            ? "lg:max-w-4xl xl:max-w-6xl md:max-w-2xl  mx-auto block z-20 absolute top-0 left-0 px-5 shadow-lg shadow-orange-500 rounded-xl  bg-black  py-5 w-full opacity-100 translate-y-0 transition-all ease-in-out duration-500"
            : `lg:max-w-4xl xl:max-w-6xl md:max-w-2xl  mx-auto absolute z-20 opacity-0 -translate-y-full transition-all ease-in-out duration-500 w-full top-2 left-0 bg-black px-5 py-5`
        }
      >
        <ul className="flex flex-col justify-center items-start gap-5 text-lg py-10">
          <li>
            <a className="hover:text-[#ff7a00]" href="#home">
              HOME
            </a>
          </li>

          <li>
            <a className="hover:text-[#ff7a00]" href="#partners">
              PARTNERS
            </a>
          </li>
          <li>
            <a className="hover:text-[#ff7a00]" href="#about">
              ABOUT
            </a>
          </li>
          <li>
            <a className="hover:text-[#ff7a00]" href="#tokenomics">
              TOKENOMICS
            </a>
          </li>
          <li>
            <a className="hover:text-[#ff7a00]" href="#roadmap">
              ROADMAP
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Humberger;
