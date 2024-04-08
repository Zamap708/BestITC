"use client";
import React from "react";
import { Rubik_Mono_One } from "next/font/google";
import Link from "next/link";

const rubikMono = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen overflow-hidden flex items-center bg-cover bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:block after:bg-white after:opacity-50"
      style={{ backgroundImage: "url('/assets/hero-bg1.jpg')" }}
    >
      <div className="relative flex flex-col mx-20 w-1/2 z-10">
        <div
          className="w-full h-80 bg-contain bg-no-repeat"
          style={{ backgroundImage: "url('assets/logos/bitc.png')" }}
        />
        <div className="w-4/5 h-2 mx-4 bg-black opacity-90" />
        {/* <h2 className="w-4/5 text-3xl mx-4 text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2> */}
        <button
          className={`w-fit h-16 m-4 p-5 flex justify-between items-center gap-4 bg-black rounded-3xl`}
          style={rubikMono.style}
        >
          <Link href="/#gallery">
            <p className=" text-white text-3xl">EXPLORE</p>
          </Link>
          <div
            className="w-7 h-5 bg-contain bg-no-repeat"
            style={{ backgroundImage: "url('assets/arrow.png')" }}
          />
        </button>
      </div>
    </div>
  );
}
