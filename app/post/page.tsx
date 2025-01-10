import GoogleAdsense from "@/components/common/GoogleAdsense";
import { Button } from "@/components/ui/button";
import { Copy, Facebook, icons, Printer, Share2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import ContentWithAds from "@/components/common/ContentWithAds";
import { Badge } from "@/components/ui/badge";
import ReletedNews from "@/components/common/ReletedNews";
import SocialMedia from "@/components/common/SocialMedia";
import LetestNews from "@/components/common/LetestNews";

const SingleNews = async () => {
  const response = await fetch(
    "https://new.enews71.com/api/post/%E0%A6%86%E0%A6%93%E0%A7%9F%E0%A6%BE%E0%A6%AE%E0%A7%80-%E0%A6%B2%E0%A7%80%E0%A6%97-%E0%A6%93-%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A7%80%E0%A7%9F-%E0%A6%AA%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%B0-%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A7%88%E0%A6%B0%E0%A6%BE%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%80-%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A6%95%E0%A6%B2%E0%A6%BE%E0%A6%AA%E0%A7%87%E0%A6%B0-%E0%A6%AC%E0%A6%BF%E0%A6%B0%E0%A7%81%E0%A6%A6%E0%A7%8D%E0%A6%A7%E0%A7%87-%E0%A6%AE%E0%A7%8C%E0%A6%B2%E0%A6%AD%E0%A7%80%E0%A6%AC%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0%E0%A7%87-%E0%A6%AC%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A7%8B%E0%A6%AD"
  );
  const { data } = await response.json();
  return (
    <div className="container mx-auto p-4 md:p-0">
      <GoogleAdsense />
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-9">
          {/* title and reporter section  */}
          <div className="">
            <p className="text-sm">সারাদেশ</p>
            <h1 className="text-[#143A9C] text-4xl text-center md:text-left font-bold">
              {data.title}
            </h1>
            {/* reporter section  */}
            <div className="mt-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={data?.reporter?.photo}
                    alt="Reporter"
                    width={50}
                    height={50}
                    className=" border border-[#0C8945] h-[50px] w-[50px] rounded-full"
                  />
                  <div className="">
                    <p className="text-sm">
                      {data?.reporter?.name},{" "}
                      {data?.reporter?.designation?.name}
                    </p>
                    <p className="text-xs">
                      {format(
                        new Date(data?.published_at),
                        "MM/dd/yyyy hh:mm a"
                      )}
                    </p>
                  </div>
                </div>
                {/* shere section  */}
                <div className="flex items-center gap-2 bg-[#EFF3F6] p-2 rounded-md ">
                  <div className="flex flex-col items-center">
                    <p className="text-sm">2.5k</p>
                    <p className="text-xs">Shere</p>
                  </div>
                  <Button
                    size={"icon"}
                    className="bg-[#E2E2E2] hover:bg-[#e2e2e2c4]"
                  >
                    <Facebook fill="#000" />
                  </Button>
                  <Button
                    size={"icon"}
                    className="bg-[#E2E2E2] hover:bg-[#e2e2e2c4]"
                  >
                    <Share2 />
                  </Button>
                  <Button
                    size={"icon"}
                    className="bg-[#E2E2E2] hover:bg-[#e2e2e2c4]"
                  >
                    <Copy />
                  </Button>
                  <Button
                    size={"icon"}
                    className="bg-[#E2E2E2] hover:bg-[#e2e2e2c4]"
                  >
                    <Printer />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* details  */}
          <div className="mt-4">
            <Image
              src={data?.featured_image}
              alt="News Image"
              width={800}
              height={560}
              className="w-full h-[213px] md:h-[560px] object-cover"
            />
          </div>
          {/* content  */}
          <div className="mt-4">
            <ContentWithAds content={data?.content} />
          </div>
          {/* tags  */}
          <div className="mt-4">
            {data?.tags.map((tag: any, index: number) => {
              return (
                <div
                  key={index}
                  className="inline-block mr-2 bg-gray-200 px-3 py-1 rounded"
                >
                  <p>{tag}</p>
                </div>
              );
            })}
          </div>

          <div className="">
            <GoogleAdsense />
          </div>

          <div className="mt-4">
            <ReletedNews />
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          {/* ads  */}
          <div className="">
            <GoogleAdsense />
          </div>

          {/* social media  */}
          <div className="mt-4">
            <SocialMedia />
          </div>
          <div className="">
            <GoogleAdsense />
          </div>
          <div className="mt-4">
            <LetestNews />
          </div>
          <div className="">
            <GoogleAdsense />
          </div>
          <div className="mt-4">
            <LetestNews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
