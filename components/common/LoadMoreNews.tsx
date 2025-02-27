"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import NewsCard from "@/components/common/NewsCard";
import { fetchApi } from "@/lib/fetchApi";
import { Loader2 } from "lucide-react";

interface LoadMoreNewsProps {
  slug: string;
  limit?: number;
  initialData: News[];
}

const LoadMoreNews = ({ slug, initialData, limit = 12 }: LoadMoreNewsProps) => {
  const [news, setNews] = useState<News[]>(initialData);
  const [page, setPage] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMoreNews = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const newNews = await fetchApi<News[]>(
        `category/${slug}/?limit=${limit}&page=${page}`
      );

      if (newNews.length > 0) {
        setNews((prev) => [...prev, ...newNews]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 px-4 md:px-0">
        {news.map((item, index) => (
          <NewsCard key={item.id || index} news={item} />
        ))}
      </div>

      {hasMore ? (
        <div className="my-8 flex justify-center">
          <Button
            onClick={loadMoreNews}
            disabled={loading}
            className="text-lg text-white font-bold flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" /> লোড হচ্ছে...
              </>
            ) : (
              "আরও খবর দেখুন"
            )}
          </Button>
        </div>
      ) : (
        <div className="my-8 flex justify-center">
          <p className="text-lg text-red-500 bg-white-100 py-1 px-4 rounded font-bold">
            আর কোনো খবর পাওয়া যায়নি
          </p>
        </div>
      )}
    </div>
  );
};

export default LoadMoreNews;
