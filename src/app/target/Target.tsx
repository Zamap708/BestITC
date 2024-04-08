"use client";
import React, { useState } from "react";
import { Rubik_Mono_One } from "next/font/google";

const rubikMono = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });

export default function Target() {
  const [showDigital, setShowDigital] = useState(false);
  return (
    <div
      className="relative w-full h-screen flex flex-col justify-center items-start px-20 gap-12 bg-cover bg-center after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:block after:bg-black after:opacity-90"
      style={{ backgroundImage: "url('/assets/target-bg.jpg')" }}
    >
      <div className="flex flex-col items-start justify-between w-3/5 gap-4 z-10">
        <h1 style={rubikMono.style} className="text-5xl">
          How Do We Do It?
        </h1>
        <p className="text-lg text-justify">
          Past events are analyzed in order to retrieve the lessons that have
          been learned. Hence, our clients derive advantages from a meticulously
          honed knowledge base acquired over the years. We consistently engage
          in pre-task study. We are aware of the specific areas and criteria to
          consider. We alleviate the burden of trial and error for our clients.
        </p>
      </div>

      <div className="grid grid-rows-2 grid-cols-2 w-full gap-y-16 gap-x-6 z-10">
        <div className=" w-11/12 flex flex-row justify-between items-center h-28 px-5">
          <div
            className="w-14 aspect-square bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/icons/icons8-period-64.png')",
            }}
          ></div>
          <div className="w-4/5">
            <h3 style={rubikMono.style} className="text-lg border-b pb-1">
              Plans, Timeframes & Measurables
            </h3>
            <p className="text-justify text-sm mt-2">
              Whether it be seasonal campaigns or one-time requests, we ensure
              that our clients have access to unambiguous action plans. They
              will have measurable objectives and precise time frames to monitor
              progress.
            </p>
          </div>
        </div>

        <div className=" w-11/12 flex flex-row justify-between items-center h-28 px-5">
          <div
            className="w-14 aspect-square bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/assets/icons/icons8-quality-control-68.png')",
            }}
          ></div>
          <div className="w-4/5">
            <h3 style={rubikMono.style} className="text-lg border-b pb-1">
              Quality Control
            </h3>
            <p className="text-justify text-sm mt-2">
              Our internal auditing method has multiple layers of filtration. In
              this manner, the outcome entails providing the client with just
              the highest quality products or services.
            </p>
          </div>
        </div>

        <div className=" w-11/12 flex flex-row justify-between items-center h-28 px-5">
          <div
            className="w-14 aspect-square bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/assets/icons/icons8-batch-assign-50.png')",
            }}
          ></div>
          <div className="w-4/5">
            <h3 style={rubikMono.style} className="text-lg border-b pb-1">
              Involvement & Follow-up
            </h3>
            <p className="text-justify text-sm mt-2">
              Our clients participate in each and every stage of the process.
              Due to our inclination towards securing long-term contracts and
              maintaining consumers, we allocate an account manager to attend to
              the requirements of our clients. They will also be provided with
              periodic status reports that are accompanied by visuals and
              figures.
            </p>
          </div>
        </div>

        <div className=" w-11/12 flex flex-row justify-between items-center h-28 px-5">
          <div
            className="w-14 aspect-square bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/icons/icons8-marketing-64.png')",
            }}
          ></div>
          <div className={`w-4/5 ${showDigital ? "" : "hidden"}`}>
            <h3 style={rubikMono.style} className="text-lg border-b pb-1">
              Digital Marketing
            </h3>
            <p className="text-justify text-sm mt-2">
              We provide you with content to post on social media platforms or
              manage your accounts on your behalf. We design content-rich
              calendars with the intent of persuasion, promotion, and sale. We
              manage data analysis, community engagement, and advertising
              campaigns across multiple social media platforms.
            </p>
          </div>
          <div className={`w-4/5 ${showDigital ? "hidden" : ""}`}>
            <h3 style={rubikMono.style} className="text-lg border-b pb-1">
              Influencer Marketing
            </h3>
            <p className="text-justify text-sm mt-2">
              All our influencers are prominent and relevant. Treated with the
              confidence of tens of millions. By leveraging our extensive
              network of micro and macro influencers, we ensure that your brand
              is promoted by the most suitable individual in accordance with
              your communication strategy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
