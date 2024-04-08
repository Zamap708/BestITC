"use client";
import React from "react";
import { Rubik_Mono_One } from "next/font/google";

const rubikMono = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });

export default function Services() {
  return (
    <div
      className="relative w-full h-screen flex flex-col justify-between items-start p-20 bg-cover bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:block after:bg-black after:opacity-90"
      style={{ backgroundImage: "url('/assets/services-bg.jpg')" }}
    >
      <div className="flex flex-col items-start justify-center w-3/5 gap-10 z-10">
        <h1 style={rubikMono.style} className="text-5xl">
          WHAT WE DO
        </h1>
        <h2 className="text-3xl">Elevate your brand and make your mark </h2>
      </div>
      <div className="w-full grid grid-cols-3 grid-rows-2 gap-6 z-10">
        <div className="h-16 flex flex-row justify-between items-center px-4 bg-white text-black text-xl rounded-xl">
          <p className="text-left">Mall stands/Exhibitions</p>
        </div>
        <div className="h-16 flex flex-row justify-between items-center px-4 bg-white text-black text-xl rounded-xl">
          <p className="text-left">3D Design</p>
        </div>
        <div className="h-16 flex flex-row justify-between items-center px-4 bg-white text-black text-xl rounded-xl">
          <p className="text-left">Event Management</p>
        </div>
        <div className="h-16 flex flex-row justify-between items-center px-4 bg-white text-black text-xl rounded-xl">
          <p className="text-left">Media Procurement</p>
        </div>
        <div className="h-16 flex flex-row justify-between items-center px-4 bg-white text-black text-xl rounded-xl">
          <p className="text-left">Digital Marketing</p>
        </div>
        <div className="h-16 flex flex-row justify-between items-center px-4 bg-white text-black text-xl rounded-xl">
          <p className="text-left">Brand Development and Management</p>
        </div>
        <div className="h-16 flex flex-row justify-between items-center px-4 bg-white text-black text-xl rounded-xl">
          <p className="text-left">Pop Up Stores</p>
        </div>
        <div className="h-16 flex flex-row justify-between items-center px-4 bg-white text-black text-xl rounded-xl">
          <p className="text-left">Out-Of-Home Advertising</p>
        </div>
        <div className="h-16 flex flex-row justify-between items-center px-4 bg-white text-black text-xl rounded-xl">
          <p className="text-left">Billboards & Digital Displays</p>
        </div>
        <div className="h-16 flex flex-row justify-between items-center px-4 bg-white text-black text-xl rounded-xl">
          <p className="text-left">Web Design & Development</p>
        </div>
        <div className="h-16 flex flex-row justify-between items-center px-4 bg-white text-black text-xl rounded-xl">
          <p className="text-left">Graphic and Motion Design</p>
        </div>
      </div>
    </div>
  );
}
