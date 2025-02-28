import ContentWithAds from "@/components/common/ContentWithAds";
import GoogleAdsense from "@/components/common/GoogleAdsense";
import LetestNews from "@/components/common/LetestNews";
import PopularNews from "@/components/common/PopularNews";
import ReletedNews from "@/components/common/ReletedNews";
import SocialMedia from "@/components/common/SocialMedia";
import Tags from "@/components/common/Tags";
import { Button } from "@/components/ui/button";
import { fetchApi } from "@/lib/fetchApi";
import { formatBanglaDate, getStripHtml } from "@/lib/utils";
import { Copy, Printer, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuFacebook } from "react-icons/lu";
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const category = (await params).slug;
  const id = (await params).id;
  try {
    const news = await fetchApi<News>(`${category}/${id}`)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error("Error:", error);
        notFound();
      });

    return {
      title: news.title || "ইনিউজ৭১ - এই প্রজন্মের গণমাধ্যম",
      description:
        getStripHtml(news.content, 20) || "ইনিউজ৭১ - এই প্রজন্মের গণমাধ্যম",
      openGraph: {
        title: news.title,
        description:
          getStripHtml(news.content, 20) || "ইনিউজ৭১ - এই প্রজন্মের গণমাধ্যম",
        url: `https://enews71.com/${category}/${news.slug}`,
        images: [
          {
            url: news.meta_image || "/default-image.jpg",
            width: 1200,
            height: 630,
            alt: news.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: news.title,
        description:
          getStripHtml(news.content, 20) || "ইনিউজ৭১ - এই প্রজন্মের গণমাধ্যম",
        images: news.meta_image || "/default-image.jpg",
      },
    };
  } catch (error) {
    console.error("Metadata Fetch Error:", error);
    return {
      title: "ইনিউজ৭১ - এই প্রজন্মের গণমাধ্যম",
      description: "ইনিউজ৭১ - এই প্রজন্মের গণমাধ্যম",
    };
  }
}

const SingleNews = async ({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) => {
  const category = (await params).slug;
  const id = (await params).id;
  const data = await fetchApi<News>(`${category}/${id}`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.error("Error:", error);
      notFound();
    });

  return (
    <div className="container mx-auto p-4 md:p-0">
      <GoogleAdsense ratio="wide" marginTop />
      <div className="grid grid-cols-12 gap-4 md:gap-8 mt-4">
        <div className="col-span-12 md:col-span-9">
          <div>
            <div className="flex items-center gap-2 my-4">
              {data?.categories?.map((item: Category) => (
                <Link
                  key={item.id}
                  href={`/${item.slug}`}
                  className="bg-white-100 py-1 px-4 rounded hover:text-primary text-lg font-medium"
                >
                  {item.name_bn}
                </Link>
              ))}
            </div>
            <h1 className="text-primary text-4xl text-center md:text-left font-bold border-l-4 border-red-500 pl-2">
              {data.title}
            </h1>
            <div className="mt-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
                <div className="flex items-center gap-2 bg-white-100 p-2 rounded-lg">
                  {data?.reporter?.photo && (
                    <Image
                      src={data.reporter.photo}
                      alt={data.reporter.name}
                      width={50}
                      height={50}
                      className="border h-[50px] w-[50px] rounded-full border-primary p-[1px] object-cover"
                    />
                  )}
                  <div>
                    <p className="text-md font-bold text-primary">
                      {data?.reporter?.name_bn ?? "Unknown Reporter"},{" "}
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
                    <LuFacebook fill="#000" />
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

          <Tags tags={data?.tags} />

          <GoogleAdsense ratio="wide" />

          <div className="mt-4">
            <ReletedNews category={data?.categories?.[0]?.slug ?? "national"} />
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
          <GoogleAdsense marginTop />
          <div className="mt-4">
            <PopularNews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
