import { getStripHtml } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div>
      <Link href={`/${news.categories[0]?.slug}/${news.id}`}>
        <div className="card-shadow border rounded-lg">
          <Image
            height={152}
            width={269}
            src={news.featured_image}
            alt={news.title}
            className="w-full h-[152px] object-cover rounded-t-lg"
          />
          <div className="py-2 px-4">
            <h2 className="text-xl font-semibold text-[#292219] cursor-pointer hover:underline hover:text-primary line-clamp-1">
              {news.title}
            </h2>
            <p className="text-slate-600 text-mx mt-2 line-clamp-[3]">
                {getStripHtml(news.content, 30)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
