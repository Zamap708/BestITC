"use client";
import Image from "next/image";
import React from "react";
import { Rubik_Mono_One } from "next/font/google";
import Link from "next/link";

const rubikMono = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  return (
    <div className="sticky z-50 top-0 w-full h-20 px-6 py-2 flex justify-between items-center bg-white shadow-lg">
      <div className="relative h-full w-56">
        <Image src="/assets/logos/Bitc logo white.png" alt="BITC" fill />
      </div>
      <ul
        style={rubikMono.style}
        className="h-full flex justify-center items-end gap-4 text-black text-3xl"
      >
        <Link href="/">
          <li className=" hover:border-b-2 border-black hover:cursor-pointer">
            Home
          </li>
        </Link>
        <Link href="/about">
          <li className=" hover:border-b-2 border-black hover:cursor-pointer">
            About
          </li>
        </Link>
        <Link href="/">
          <li className=" hover:border-b-2 border-black hover:cursor-pointer">
            Shop
          </li>
        </Link>
        <Link href="/?show=true">
          <li className=" hover:border-b-2 border-black hover:cursor-pointer">
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
}
