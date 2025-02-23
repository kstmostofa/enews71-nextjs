import React from "react";
import Separator from "../Separator";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CategoryNews = () => {
  return (
    <div>
      <Separator text="শিক্ষা" />
      <div className="mt-4">
        <div className="flex flex-col gap-4 bg-white-100">
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "flex gap-4 border-b pb-4",
                  index === 0 ? "flex-col" : "flex-row gap-2 px-2"
                )}
              >
                <div className="shrink-0">
                  <Image
                    src="/image.png"
                    alt="Card Image"
                    width={index === 0 ? 400 : 135}
                    height={index === 0 ? 235 : 75}
                    className={cn(
                      "object-cover rounded-t-lg",
                      index === 0 ? "w-full h-[235px]" : "w-[100px] h-[75px] rounded-lg"
                    )}
                  />
                </div>
                <div className="px-2">
                  <Link href="#">
                    <h3
                      className={cn(
                        "font-semibold text-[#292219] cursor-pointer hover:underline mt-2 hover:text-primary",
                        index === 0 ? "text-xl" : "text-md"
                      )}
                    >
                      পূজা পরিদর্শনে বিকেলে ঢাকেশ্বরী মন্দিরে যাচ্ছেন ড. ইউনূস
                    </h3>
                  </Link>
                  {index === 0 && (
                    <p className="text-[#5C5955] text-sm mt-2">
                      জাতীয় বিশ্ববিদ্যালয়ের ডিগ্রি ২০১৯-২০ পরীক্ষা না নিয়ে অটো
                      পাসের দাবিতে শিক্ষার্থীরা উপাচার্য অফিস ঘেরাও করেছেন।
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;
