import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReletedNews = () => {
  return (
    <div>
      <div className="flex items-center  gap-4">
        <h2 className="text-lg font-semibold">এ সম্পর্কিত আরও পড়ুন </h2>
        <div className="h-4 w-4 bg-[#143A9C]"></div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <div key={index} className="col-span-12 md:col-span-3">
                <Image
                  height={152}
                  width={269}
                  src="/image.png"
                  alt="Card Image"
                  className="w-full h-[152px] object-cover"
                />
                <Link href="#">
                  <h2 className="text-lg font-semibold text-[#292219] cursor-pointer hover:underline mt-2">
                    ইউক্রেনের পক্ষে যুদ্ধে থাকা যুক্তরাজ্যের নাগরিককে ধরেছে রুশ
                    সেনারা
                  </h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReletedNews;
