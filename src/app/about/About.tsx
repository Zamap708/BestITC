import React from "react";
import { rubikMono } from "../layout";

export default function About() {
  return (
    <div
      id="about"
      className="w-full h-screen flex flex-row justify-center items-center bg-black"
    >
      <div className="w-4/6 h-full flex flex-col justify-center items-center px-10">
        <div className="w-5/6 h-full flex flex-col justify-center items-center bg-black gap-8">
          <div className="flex flex-col gap-2">
            <div className="w-fit pb-2 px-2 border-b">
              <h1 className={`text-2xl`} style={rubikMono.style}>
                About Us
              </h1>
            </div>
            <p className="pl-2 text-sm text-justify">
              BITC Agency is a South African-based, full-service, youth-owned,
              vibrant marketing agency. We have contributed value to South
              African enterprises through our comprehension of South African
              consumers and our proficient communication with them. <br />
              <br />
              We have assisted over thirty brands in targeting the appropriate
              audience, expanding their visibility, outperforming rivals, and
              generating revenue. <br />
              <br /> As a youth-owned business that is intimately acquainted
              with youth and current events, we maintain an ever-evolving
              perspective.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-fit pb-2 px-2 border-b">
              <h1 className="text-2xl" style={rubikMono.style}>
                An Agency On A Mission
              </h1>
            </div>
            <p className="pl-2 text-sm text-justify">
              The objective of our organization is to provide a high-quality
              marketing service to enterprises operating in the South African
              market. It is posited that the fundamental basis of this
              orientation lies in the principles of knowledge integrity and
              honesty. The aforementioned attributes are demonstrated by the
              structure and ethos of our team.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-fit pb-2 px-2 border-b">
              <h1 className="text-2xl" style={rubikMono.style}>
                Any Agency with a Vision
              </h1>
            </div>
            <p className="pl-2 text-sm text-justify">
              By utilising technology, knowledge, and an exemplary corporate
              culture, we aim to surpass all competitors and become the
              preeminent marketing firm in the nation and the globe. Our goal is
              for our methodology to have such a profound impact on businesses
              that we will become synonymous with the term ideal marketing
              partner.
            </p>
          </div>
        </div>
      </div>
      <div
        className="relative w-2/6 h-full bg-cover bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:block after:opacity-50"
        style={{ backgroundImage: "url('/assets/about-bg.jpg')" }}
      ></div>
    </div>
  );
}
