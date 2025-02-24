import React from "react";
import Separator from "../Separator";
import Image from "next/image";
import Link from "next/link";
import { fetchApi } from "@/lib/fetchApi";
import { getStripHtml } from "@/lib/utils";
export const dynamic = "force-dynamic";

const CommonNews = async ({
  sectionTitle = "Title",
  category="national"
}: {
  sectionTitle: string;
  category: string;
}) => {
  const nationalNews = await fetchApi<News[]>(`category/${category}`);

  const [firstNews, ...restNews] = nationalNews;

  return (
    <div className="">
      <Separator text={sectionTitle} />
      <div className="grid grid-cols-12 gap-4 mt-4 items-start justify-center">
        <div className="col-span-12 md:col-span-6">
          <div className="bg-white-100 rounded-lg hover:shadow-md transition-all">
            <Link href={`/news/${firstNews?.slug}`}>
              <Image
                src={firstNews?.featured_image}
                height={300}
                width={300}
                alt="Card Image"
                className="w-full object-cover rounded-t-lg h-[190px] md:h-[290px]"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-black cursor-pointer hover:underline hover:text-primary">
                  {firstNews?.title}
                </h2>
                <p className="text-black-100 text-sm mt-2">
                  {getStripHtml(firstNews?.content, 50)}...
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="">
            {restNews.map((item, index) => {
              return (
                <Link href={`/news/${item.slug}`} key={index}>
                  <div className="flex flex-row gap-2 w-full mb-4 bg-white-100 hover:shadow-md transition-all rounded-lg">
                    <div className="w-[30%]">
                      <Image
                        src={item.featured_image}
                        alt="Card Image"
                        width={100}
                        height={100}
                        className="w-full object-cover h-[100px] rounded-l-lg"
                      />
                    </div>
                    <div className="w-[70%] p-2">
                      <p className="hover:underline text-black font-semibold hover:text-primary">
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
  );
};

export default CommonNews;
