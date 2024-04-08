import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="min-h-96 w-full flex flex-row bg-white px-16 py-10">
      <div className="w-1/2 flex flex-col justify-between items-start">
        <div className="relative w-3/5 h-4/5">
          <Image src={"/assets/logos/bitc.png"} fill={true} alt="" />
        </div>
        <Link href="/?show=true" className="w-1/2">
          <button className="w-full text-3xl text-black border-2 border-black py-2 rounded-xl shadow-xl">
            WORK WITH US
          </button>
        </Link>
      </div>
      <div className="w-1/2 flex flex-col justify-between items-center gap-10">
        <div className="w-1/2 h-1/3 flex flex-col justify-center items-start gap-2">
          <p className="text-black">info@bitcagency.co.za</p>
          <p className="text-black">(+27)82 456 7891</p>
          <p className="text-black">(+27)82 456 7891</p>
        </div>
        <div className="w-1/2 flex gap-x-5">
          <div
            className="w-14 aspect-square bg-cover bg-left-top bg-no-repeat"
            style={{ backgroundImage: "url('/assets/facebook.png')" }}
          ></div>
          <div
            className="w-14 aspect-square bg-cover bg-left-top bg-no-repeat"
            style={{ backgroundImage: "url('/assets/ig.png')" }}
          ></div>
          <div
            className="w-14 aspect-square bg-cover bg-left-top bg-no-repeat"
            style={{ backgroundImage: "url('/assets/x.png')" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
