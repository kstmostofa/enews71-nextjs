import Image from "next/image";
import React from "react";

interface BannerRightAdProps {
  addimage?: string;
}
const BannerRightAd = ({ addimage }: BannerRightAdProps) => {
  return (
    <div className="relative w-full">
      <div className="w-full h-40 lg:h-80">
        <Image
          src={addimage ? addimage : "/image.png"}
          alt="ad banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default BannerRightAd;
