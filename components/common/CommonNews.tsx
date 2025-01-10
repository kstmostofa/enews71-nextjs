import React from "react";
import Separator from "../Separator";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const CommonNews = () => {
  return (
    <div className="">
      <Separator text="সারাদেশ" />
      <div className="grid grid-cols-12 gap-4 md:gap-8 mt-4 items-center justify-center">
        <div className="col-span-12 md:col-span-6">
          <div className="">
            <Image
              src="/image.png"
              height={200}
              width={300}
              alt="Card Image"
              className="w-full h-full object-cover"
            />
            <Link href="#">
              <h2 className="text-lg font-bold text-[#292219] cursor-pointer hover:underline mt-2">
                ডিগ্রিতে অটো পাসের দাবিতে জাতীয় বিশ্ববিদ্যালয়ের উপাচার্যের অফিস
                ঘেরাও
              </h2>
            </Link>
            <p className="text-[#5C5955] text-sm mt-2">
              জাতীয় বিশ্ববিদ্যালয়ের ডিগ্রি ২০১৯-২০ পরীক্ষা না নিয়ে অটো পাসের
              দাবিতে শিক্ষার্থীরা উপাচার্য অফিস ঘেরাও করেছেন। রোববার (২৯
              সেপ্টেম্বর) দুপুর ১২টায় প্রথমে জাতীয় বিশ্ববিদ্যালয়ের প্রধান ফটকে
              অবস্থান নিয়ে বিক্ষোভ
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="">
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <Link href="#" key={index}>
                  <div className="flex flex-row gap-4 w-full mb-4">
                    <div className="w-[30%]">
                      <Image
                        src="/image.png"
                        alt="Card Image"
                        width={100}
                        height={100}
                        className="w-full object-cover "
                      />
                    </div>
                    <div className="w-[70%] ">
                      <p className="hover:underline text-black font-semibold">
                        ডিগ্রিতে অটো পাসের দাবিতে জাতীয় বিশ্ববিদ্যালয়ের
                        উপাচার্যের অফিস ঘেরাও
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
