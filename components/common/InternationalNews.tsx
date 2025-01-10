import React from "react";
import Separator from "../Separator";
import Image from "next/image";
import Link from "next/link";

const InternationalNews = () => {
  return (
    <div>
      <Separator text="আন্তর্জাতিক" />
      <div className="mt-4">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="">
              <Image
                src="/image.png"
                height={316}
                width={550}
                alt="Card Image"
                className="w-full h-[316px] object-cover"
              />
              <Link href="#">
                <h2 className="text-lg font-bold text-[#292219] cursor-pointer hover:underline mt-2">
                  লোহিত সাগরে ইয়ট ডুবে ১৭ পর্যটক নিখোঁজ
                </h2>
              </Link>
              <p className="text-[#5C5955] text-sm mt-2">
                লোহিত সাগরে একটি পর্যটকবাহী ইয়ট ডুবে অন্তত ১৭ জন নিখোঁজ হয়েছেন
                বলে জানিয়েছে মিশর কর্তৃপক্ষ। তবে কী কারণে চার তলার ইয়টটি ডুবে
                গেল, তা তাৎক্ষণিকভাবে জানা যায়নি। 
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-2">
            {[1, 2].map((item, index) => {
              return (
                <div key={index} className="mb-4">
                  <Image
                    height={152}
                    width={269}
                    src="/image.png"
                    alt="Card Image"
                    className="w-full h-[152px] object-cover"
                  />
                  <Link href="#">
                    <h2 className="text-lg font-semibold text-[#292219] cursor-pointer hover:underline mt-2">
                      ইউক্রেনের পক্ষে যুদ্ধে থাকা যুক্তরাজ্যের নাগরিককে ধরেছে
                      রুশ সেনারা
                    </h2>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="">
              {[1, 2, 3, 4].map((item, index) => {
                return (
                  <Link href="#" key={index}>
                    <div className="flex flex-row gap-4 w-full mb-4">
                      <div className="w-[30%]">
                        <Image
                          src="/image.png"
                          alt="Card Image"
                          width={168}
                          height={93}
                          className="w-full h-[93px] object-cover "
                        />
                      </div>
                      <div className="w-[70%] ">
                        <p className="text-lg hover:underline text-[#292219] font-semibold">
                          ১২৩ বিজিপি সেনার বিনিময়ে মিয়ানমার থেকে ফিরলেন ৮৫
                          বাংলাদেশি
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalNews;
