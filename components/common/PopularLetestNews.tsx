"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularLetestNews = () => {
  const [activeTab, setActiveTab] = React.useState("popular");
  return (
    <div>
      <div className="border rounded-lg overflow-hidden">
        <div className="flex justify-between w-full border-b">
          <div
            onClick={() => setActiveTab("latest")}
            className={cn(
              " w-1/2 cursor-pointer flex items-center justify-center font-semibold p-2 text-[#ACACAC]",
              activeTab === "latest" && "bg-[#2C4B9C] text-white"
            )}
          >
            <p>সর্বশেষ সংবাদ</p>
          </div>
          <div
            onClick={() => setActiveTab("popular")}
            className={cn(
              " w-1/2 cursor-pointer flex items-center justify-center font-semibold p-2 text-[#ACACAC]",
              activeTab === "popular" && "bg-[#2C4B9C] text-white"
            )}
          >
            <p>জনপ্রিয়</p>
          </div>
        </div>
        <div className="p-4 h-[400px] overflow-auto">
          {activeTab === "popular" && (
            <div className="">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                return (
                  <Link href="#" key={index}>
                    <div className="flex flex-row gap-4 w-full mb-4">
                      <div className="w-[70%] ">
                        <p className="hover:underline text-black font-semibold">
                          বৈষম্যবিরোধী আন্দোলনে ‘শহীদের’ তালিকায় আরও ৯ জনের নাম
                        </p>
                      </div>
                      <div className="w-[30%]">
                        <Image
                          src="/image.png"
                          alt="Card Image"
                          width={100}
                          height={100}
                          className="w-full object-cover"
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
          {activeTab === "latest" && (
            <div className="">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                return (
                  <Link href="#" key={index}>
                    <div className="flex flex-row gap-4 w-full mb-4">
                      <div className="w-[70%] ">
                        <p className="hover:underline text-black font-semibold">
                          ডিগ্রিতে অটো পাসের দাবিতে জাতীয় বিশ্ববিদ্যালয়ের
                          উপাচার্যের অফিস ঘেরাও
                        </p>
                      </div>
                      <div className="w-[30%]">
                        <Image
                          src="/image.png"
                          alt="Card Image"
                          width={100}
                          height={100}
                          className="w-full object-cover "
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularLetestNews;
