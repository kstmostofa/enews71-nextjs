import React from "react";
import Separator from "../Separator";
import Image from "next/image";
import Link from "next/link";
import { fetchApi } from "@/lib/fetchApi";
import { getStripHtml } from "@/lib/utils";

interface InternationalNewsProps {
  title: string;
  category: string;
  limit?: number;
}
export const dynamic = "force-dynamic";

const InternationalNews = async ({
  title,
  category = "international",
  limit = 5,
}: InternationalNewsProps) => {
  const InternationalNews = await fetchApi<News[]>(
    `category/${category}?limit=${limit}`
  );
  const [firstNews, ...restNews] = InternationalNews;
  const middleNews = restNews.slice(0, 2);
  const rightSideNews = restNews.slice(2, 8);

  return (
    <div>
      <Separator text={title} />
      <div className="mt-4 bg-white-100 p-4 rounded-lg">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4 border rounded-lg card-shadow bg-white">
            <Link href={`/news/${firstNews?.slug}`}>
              <div className="">
                <Image
                  src={firstNews?.featured_image}
                  height={316}
                  width={550}
                  alt={firstNews?.title}
                  className="w-full h-[190px] md:h-[300px] object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-[#292219] cursor-pointer hover:underline hover:text-primary">
                    {firstNews?.title}
                  </h2>
                  <p className="text-[#5C5955] text-sm mt-2">
                    {getStripHtml(firstNews?.content, 90)}...
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="flex flex-col space-y-4">
              {middleNews.map((item, index) => {
                return (
                  <Link key={index} href={`/news/${item.slug}`}>
                    <div className="card-shadow border rounded-lg bg-white">
                      <Image
                        height={152}
                        width={269}
                        src={item.featured_image}
                        alt={item.title}
                        className="w-full h-[152px] object-cover rounded-t-lg"
                      />
                      <div className="py-2 px-4">
                        <h2 className="text-lg font-semibold text-[#292219] cursor-pointer hover:underline hover:text-primary">
                          {item.title}
                        </h2>
                        <p className="text-[#5C5955] text-sm mt-2">
                          {getStripHtml(item.content, 50)}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="flex flex-col gap-y-4">
              {rightSideNews.map((item, index) => {
                return (
                  <Link href="#" key={index}>
                    <div className="flex flex-row w-full border rounded-lg card-shadow bg-white">
                      <div className="w-[30%]">
                        <Image
                          src={item.featured_image}
                          alt="Card Image"
                          width={168}
                          height={93}
                          className="w-full h-[87px] object-cover rounded-l-lg"
                        />
                      </div>
                      <div className="w-[70%] ">
                        <p className="text-lg hover:underline text-[#292219] font-semibold p-2 hover:text-primary">
                          {item.title}
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
