import { fetchApi } from "@/lib/fetchApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NewsCard from "./NewsCard";

const ReletedNews = async ({ category }: { category: string }) => {
  const relatedNews = await fetchApi<News[]>(`category/${category}?limit=8`);

  return (
    <div>
      <div className="flex items-center  gap-4">
        <h2 className="text-lg font-semibold">এ সম্পর্কিত আরও পড়ুন </h2>
        <div className="h-4 w-4 bg-primary"></div>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-12 md:grid-cols-4 gap-4">
          {relatedNews.map((item, index) => (
            <NewsCard key={item.id || index} news={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReletedNews;
