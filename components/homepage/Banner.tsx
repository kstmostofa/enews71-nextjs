import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PopularLetestNews from "../common/PopularLetestNews";
import { fetchApi } from "@/lib/fetchApi";
import { getHumanReadableDate, getStripHtml } from "@/lib/utils";
export const dynamic = "force-dynamic";

const Banner = async () => {
  const latestNews = await fetchApi<News[]>("latest-news");
  const popularNews = await fetchApi<News[]>("popular-news");

  const [bannerNews, ...restNews] = latestNews;
  const top2News = restNews.slice(0, 2);
  const top6News = restNews.slice(2, 8);

  return (
    <section className="container mx-auto p-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-12 md:col-span-3">
          <Link href={`/news/${bannerNews?.slug}`}>
            <div className="grid grid-cols-12 gap-4 border rounded-lg overflow-hidden hover:shadow-md transition-all hover:bg-white-100">
              <div className="col-span-12 md:col-span-6 relative h-auto max-h-[335px]">
                <Image
                  src={bannerNews?.featured_image}
                  alt="banner"
                  height={300}
                  width={300}
                  className="border-t-lg md:border-l-lg md:border-tr-none h-full w-full object-cover overflow-hidden"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="flex flex-col justify-between h-full p-4">
                  <div className="">
                    <div className="mb-4 rounded-full bg-primary-200 py-0.5 px-3 text-primary transition-all shadow-sm text-center font-semibold text-sm w-32">
                  সর্বশেষ
                  </div>
                  <h4 className="mb-2 text-black text-2xl font-semibold hover:text-primary">
                    {bannerNews?.title}
                  </h4>
                  <p className="mb-8 text-slate-600 leading-normal font-light text-lg">
                    {getStripHtml(bannerNews?.content, 40)}
                  </p>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-slate-800 font-semibold text-sm hover:text-primary flex items-center">
                      আরও পড়ুন
                      <ArrowRight size={20} className="ml-1" />
                    </div>
                    <div className="text-primary font-semibold text-xs">
                      {getHumanReadableDate(bannerNews?.created_at)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-1 rounded-lg">
          <div className="w-full h-[335px] max-h-[335px]">
            <Image
              height={300}
              width={300}
              src={"/addimage.png"}
              className="w-full h-[335px] rounded-lg object-cover"
              alt="Add Image"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-12 md:col-span-3">
          <div className="grid grid-cols-12 gap-4 mt-4">
            {top2News.map((item, index) => {
              return (
                <div key={index} className="col-span-12 md:col-span-6 border rounded-lg">
                  <Link  href={`/news/${item.slug}`}>
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                      <div className=" w-full md:w-2/5 relative">
                        <Image
                          src={item.featured_image}
                          alt="Card Image"
                          className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none h-[140px] w-full md:h-[175px] max-h-[175px]"
                          height={300}
                          width={300}
                        />
                      </div>
                      <div className="w-full md:w-3/5 p-2">
                        <h2 className="text-xl font-bold text-gray-800 hover:text-primary">
                          {item.title}
                        </h2>
                        <p className=" text-gray-600 text-md">
                          {getStripHtml(item.content, 20)}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-12 gap-4 mt-4">
            {top6News.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-span-12 md:col-span-4 border rounded-lg"
                >
                  <Link href={`/news/${item.slug}`}>
                    <div className="relative w-full">
                      <Image
                        src={item.featured_image}
                        alt="Card Image"
                        height={200}
                        width={300}
                        className="object-cover rounded-t-lg w-full h-[150px] md:h-[175px]"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-center py-2 hover:text-primary text-clamp-2">
                      {item.title}
                    </h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 md:col-span-1">
          <PopularLetestNews
            latestNews={latestNews}
            popularNews={popularNews}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
