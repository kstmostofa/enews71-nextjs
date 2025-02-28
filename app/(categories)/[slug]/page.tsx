import GoogleAdsense from "@/components/common/GoogleAdsense";
import LoadMoreNews from "@/components/common/LoadMoreNews";
import PopularLatestNews from "@/components/common/PopularLetestNews";
import { fetchApi } from "@/lib/fetchApi";
import { paginationLimit } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const category = await fetchApi<Category>(`get-category-name/${slug}`);
  const data = await fetchApi<News[]>(
    `category/${slug}?limit=${paginationLimit}`
  )
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error("Error:", error);
      notFound();
    });

  const latestNews = await fetchApi<News[]>("latest-news");
  const popularNews = await fetchApi<News[]>("popular-news");

  return (
    <div className="container mx-auto">
      <GoogleAdsense ratio="wide" marginTop />
      <div className="text-3xl text-primary font-bold my-4 border-l-4 border-red-500 pl-2 bg-gray-100 py-2 rounded mx-4 md:mx-0">
        {category?.name_bn} সম্পর্কিত সকল খবর
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-8 mt-4">
        <div className="col-span-12 md:col-span-9">
          <LoadMoreNews
            slug={slug}
            initialData={data}
            limit={paginationLimit}
          />
        </div>

        <div className="col-span-12 md:col-span-3">
          <GoogleAdsense />
          <PopularLatestNews
            popularNews={popularNews}
            latestNews={latestNews}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
