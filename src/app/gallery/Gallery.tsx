// "use client";
import React from "react";
import GalleryGrid from "./GalleryGrid";
import { Rubik_Mono_One } from "next/font/google";

const rubikMono = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });

export default function Gallery() {
  return (
    <div id="gallery" className="w-full h-screen flex flex-col justify-center items-start bg-white py-10">
      <div className="flex flex-col items-start justify-center w-3/5 gap-4 px-20">
        <h1 style={rubikMono.style} className="text-5xl text-black">
          OUR WORK
        </h1>
        <h2 className="text-3xl text-black">Explore Our Projects</h2>
      </div>

      <div className="w-full h-5/6 p-10">
        <GalleryGrid />
      </div>
    </div>
  );
}
