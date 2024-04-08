"use client";
import React from "react";
import { data } from "../../../public/assets/clients/clientData";
import Image from "next/image";
import { Rubik_Mono_One } from "next/font/google";

const rubikMono = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });


export default function Clients() {
  const contentArray = data.images;

  const content = contentArray.map((image) => {
    return (
      <li
        key={image.key}
        className="w-28 flex justify-center items-center aspect-square overflow-hidden z-10"
      >
        <Image src={image.img} alt="" className="" />
      </li>
    );
  });
  return (
    <div className="w-full min-h-[calc(50dvh)] flex flex-col justify-between items-start bg-white p-20">
      <div className="flex flex-col items-start justify-center w-4/5 gap-10">
        <div className="pb-5 border-b-4 border-black">
          <h1 className="text-5xl text-black" style={rubikMono.style}>
            CLIENTS WE{`'`}VE MADE <br /> THE BEST IN THE CITY
          </h1>
        </div>
      </div>
      <ul className="relative w-full overflow-hidden grid grid-rows-2 grid-flow-col gap-8 py-10">
        {content}
      </ul>
    </div>
  );
}
