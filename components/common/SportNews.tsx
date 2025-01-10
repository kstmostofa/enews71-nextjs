import React from "react";
import Separator from "../Separator";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SportNews = () => {
  return (
    <div>
      <Separator text="খেলাধুলা" />
      <div className="mt-4">
        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "col-span-2 md:col-span-1",
                  index === 0 ? "row-span-3" : "row-span-1"
                )}
              >
                <div
                  className={cn(
                    "flex gap-4",
                    index === 0 ? "flex-col" : "flex-row "
                  )}
                >
                  <Image
                    src="/image.png"
                    height={219}
                    width={389}
                    alt="Card Image"
                    className={cn(
                      "w-full h-[219px] object-cover",
                      index === 0 ? "h-[219px]" : "h-[91px] w-[161px] "
                    )}
                  />
                  <div className="">
                    <Link href="#">
                      <h2 className="text-lg font-bold text-[#292219] cursor-pointer hover:underline">
                        টেস্টে দ্রুততম দলীয় ফিফটি ভারতের, রোহিতের বিদায় 
                      </h2>
                    </Link>
                    <p className="text-[#5C5955] text-sm mt-2">
                      দুই দিনের খেলা হয় পরিত্যক্ত। অবশেষে মাঠে গড়িয়েছে তৃতীয়
                      দিনের খেলা।
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SportNews;
