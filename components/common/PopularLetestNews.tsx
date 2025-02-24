"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PopularLatestNews = ({
  latestNews,
  popularNews,
}: {
  latestNews: News[];
  popularNews: News[];
}) => {
  const [activeTab, setActiveTab] = useState<string>("latest");

  return (
    <div className="mt-4">
      <div className="border rounded-lg overflow-hidden">
        <div className="flex justify-between w-full border-b">
          <div
            onClick={() => setActiveTab("latest")}
            className={cn(
              "w-1/2 cursor-pointer flex items-center justify-center font-semibold p-2 text-primary bg-white-100",
              activeTab === "latest" &&
                "bg-[#2C4B9C] text-white border-b-2 border-red-500"
            )}
          >
            <p className="text-xl">সর্বশেষ সংবাদ</p>
          </div>
          <div
            onClick={() => setActiveTab("popular")}
            className={cn(
              "w-1/2 cursor-pointer flex items-center justify-center font-semibold p-2 text-primary bg-white-100",
              activeTab === "popular" &&
                "bg-[#2C4B9C] text-white border-b-2 border-red-500"
            )}
          >
            <p className="text-xl">জনপ্রিয়</p>
          </div>
        </div>

        <div className="h-[660px] overflow-auto">
          {(activeTab === "popular" ? popularNews : latestNews).map(
            (item, index) => (
              <Link href={`/news/${item.slug}`} key={index}>
                <div className="flex flex-row gap-4 w-full items-center border-b p-2 hover:bg-white-100">
                  <div className="w-[70%]">
                    <p className="hover:underline text-black font-semibold hover:text-primary text-lg">
                      {item.title}
                    </p>
                  </div>
                  <div className="w-[30%]">
                    <Image
                      src={item.featured_image}
                      alt="Card Image"
                      width={100}
                      height={80}
                      className="w-full h-[70px] object-cover rounded-md"
                    />
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularLatestNews;
