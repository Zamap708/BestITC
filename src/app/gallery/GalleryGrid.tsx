import React from "react";
import { data } from "../../../public/assets/gallery/galleryData";
import Image from "next/image";

export default function GalleryGrid() {
  const contentArray = data.images;

  let i = 1;
  const content = contentArray.map((image) => {
    // console.log(i)
    let span;
    if (i % 5 == 0) {
      //   span = "3";
      span = "img3";
    } else if (i % 2 == 0) {
      //   span = "1";
      span = "img1";
    } else {
        // span = "2";
      span = "img2";
    }
    i++;

    let imageSpan = "row-span-" + image.span;
    return (
      <div key={image.key} className={`w-72 h-full ${span}`}>
        <Image
          src={image.img}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
    );
  });
  return (
    <div className="relative w-full h-full grid grid-rows-3 grid-flow-col gap-2 overflow-x-scroll">
      {content}
      <div className="h-full w-1/6 bg-white"></div>
    </div>
  );
}
