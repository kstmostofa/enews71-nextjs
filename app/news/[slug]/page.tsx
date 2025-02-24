import GoogleAdsense from "@/components/common/GoogleAdsense";
import { Button } from "@/components/ui/button";
import { Copy, Facebook, Printer, Share2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import ContentWithAds from "@/components/common/ContentWithAds";
import ReletedNews from "@/components/common/ReletedNews";
import SocialMedia from "@/components/common/SocialMedia";
import LetestNews from "@/components/common/LetestNews";
import { fetchApi } from "@/lib/fetchApi";
import { notFound } from "next/navigation";
import { formatBanglaDate, getStripHtml } from "@/lib/utils";
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  try {
    const news = await fetchApi<News>(`post/${slug}`);

    if (!news) return notFound();

    return {
      title: news.title || "Enws71",
      description: getStripHtml(news.content, 20) || "Enews71",
      openGraph: {
        title: news.title,
        description: getStripHtml(news.content, 20) || "Enews71",
        url: `https://new.enews71.com/post/${news.slug}`,
        images: [
          {
            url: news.featured_image || "/default-image.jpg",
            width: 1200,
            height: 630,
            alt: news.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: news.title,
        description: getStripHtml(news.content, 20) || "Enews71",
        images: news.featured_image || "/default-image.jpg",
      },
    };
  } catch (error) {
    console.error("Metadata Fetch Error:", error);
    return { title: "Enws71", description: "News not found" };
  }
}

const SingleNews = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const data = await fetchApi<News>(`post/${slug}`);

  return (
    <div className="container mx-auto p-4 md:p-0">
      <GoogleAdsense ratio="wide" />
      <div className="grid grid-cols-12 gap-4 md:gap-8 mt-4">
        <div className="col-span-12 md:col-span-9">
          <div>
            <p className="text-sm">সারাদেশ</p>
            <h1 className="text-primary text-4xl text-center md:text-left font-bold">
              {data.title}
            </h1>
            <div className="mt-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {data?.reporter?.photo && (
                    <Image
                      src={data.reporter.photo}
                      alt={data.reporter.name}
                      width={50}
                      height={50}
                      className="border h-[50px] w-[50px] rounded-full"
                    />
                  )}
                  <div>
                    <p className="text-md font-bold text-primary">
                      {data?.reporter?.name ?? "Unknown Reporter"},{" "}
                      {data?.reporter?.designation?.name ??
                        "Unknown Designation"}
                    </p>
                    <p className="text-sm font-normal">
                      {formatBanglaDate(data?.published_at)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#EFF3F6] p-2 rounded-md">
                  <div className="flex flex-col items-center">
                    <p className="text-sm">2.5k</p>
                    <p className="text-xs">Share</p>
                  </div>
                  <Button
                    size="icon"
                    className="bg-[#E2E2E2] hover:bg-[#e2e2e2c4]"
                  >
                    <Facebook fill="#000" />
                  </Button>
                  <Button
                    size="icon"
                    className="bg-[#E2E2E2] hover:bg-[#e2e2e2c4]"
                  >
                    <Share2 />
                  </Button>
                  <Button
                    size="icon"
                    className="bg-[#E2E2E2] hover:bg-[#e2e2e2c4]"
                  >
                    <Copy />
                  </Button>
                  <Button
                    size="icon"
                    className="bg-[#E2E2E2] hover:bg-[#e2e2e2c4]"
                  >
                    <Printer />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            {data?.featured_image && (
              <Image
                src={data.featured_image}
                alt="News Image"
                width={800}
                height={560}
                className="w-full h-[213px] md:h-[400px] object-cover rounded-lg"
              />
            )}
          </div>

          <div className="mt-4">
            <ContentWithAds
              content={data?.content || "No content available."}
            />
          </div>

          <div className="mt-4">
            {data?.tags?.length ? (
              data.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="inline-block mr-2 bg-gray-200 px-3 py-1 rounded"
                >
                  {tag}
                </span>
              ))
            ) : (
              <p className="text-gray-500">No tags available.</p>
            )}
          </div>

          <GoogleAdsense ratio="wide" />

          <div className="mt-4">
            <ReletedNews />
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-12 md:col-span-3">
          <GoogleAdsense />
          <div className="mt-4">
            <SocialMedia />
          </div>
          <GoogleAdsense />
          <div className="mt-4">
            <LetestNews />
          </div>
          <GoogleAdsense />
          <div className="mt-4">
            <LetestNews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
