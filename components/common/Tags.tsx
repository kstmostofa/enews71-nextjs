import React from "react";

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="my-4">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold">এ সম্পর্কিত ট্যাগ গুলি</h2>
        <div className="h-4 w-4 bg-primary"></div>
      </div>
      <div className="my-2">
        {tags?.length ? (
          tags.map((tag: string, index: number) => (
            <span
              key={index}
              className="mr-2 bg-gray-200 px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))
        ) : (
          <p className="text-gray-500">কোনো ট্যাগ পাওয়া যায়নি</p>
        )}
      </div>
    </div>
  );
};

export default Tags;
