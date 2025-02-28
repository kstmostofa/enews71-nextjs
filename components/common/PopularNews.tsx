import { fetchApi } from "@/lib/fetchApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularNews = async () => {
  const popularNews = await fetchApi<News[]>("popular-news?limit=5");
  return (
    <div className="bg-red-100 p-4 rounded">
      <div className="text-center">
        <h3 className="text-2xl text-red-500 font-bold">জনপ্রিয় সংবাদ</h3>
      </div>
      {popularNews.map((item, index) => {
        return (
          <div key={index} className="mt-2 border-t border-red-200 pt-2">
            <div className="flex items-center gap-2 w-full">
              <div className="flex-shrink-0">
                <Image
                  src={item.featured_image}
                  height={200}
                  width={200}
                  alt={item.title}
                  className="w-[60px] h-[60px] object-cover rounded-full border border-primary p-[2px]"
                />
              </div>
              <div className="">
                <Link href={`/${item.categories[0]?.slug}/${item.id}`}>
                  <h3 className="text-lg font-semibold hover:text-primary">
                    {item.title}
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PopularNews;
