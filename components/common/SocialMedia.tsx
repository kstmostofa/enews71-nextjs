import Image from "next/image";
import React from "react";

const SocialMedia = () => {
  return (
    <div>
      <div className="flex items-center gap-2 justify-center">
        <Image
          src="/media.png"
          alt="Social Media"
          width={20}
          height={20}
          className="w-[20px] h-[20px] object-cover"
        />
        <h3 className="text-lg font-bold text-[#143A9C]">
          সোশ্যাল মিডিয়াতে আমরা
        </h3>
      </div>
      <div className="flex items-center justify-center mt-4">
        <Image
          src="/facebook.png"
          alt="Social Media"
          width={50}
          height={50}
          className="w-[50px] h-[50px] object-cover"
        />
        <Image
          src="/whatsapp.png"
          alt="Social Media"
          width={50}
          height={50}
          className="w-[50px] h-[50px] object-cover"
        />
        <Image
          src="/telegram.png"
          alt="Social Media"
          width={50}
          height={50}
          className="w-[50px] h-[50px] object-cover"
        />
        <Image
          src="/youtube.png"
          alt="Social Media"
          width={50}
          height={50}
          className="w-[50px] h-[50px] object-cover"
        />
        <Image
          src="/x.png"
          alt="Social Media"
          width={40}
          height={40}
          className="w-[40px] h-[40px] object-cover"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
