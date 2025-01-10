import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PopularLetestNews from "../common/PopularLetestNews";

const Banner = () => {
  return (
    <section className="container w-full mx-auto py-4 px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-12 md:col-span-3">
          <div className="grid grid-cols-12 gap-4 border rounded-lg">
            <div className="col-span-12 md:col-span-6 overflow-hidden relative ">
              <Image
                src="/image.png"
                alt="banner"
                height={300}
                width={300}
                objectFit="cover"
                className="md:rounded-l-lg h-full w-full object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="p-4">
                <div className="mb-4 rounded-lg bg-primary py-0.5 px-3 text-white transition-all shadow-sm text-center font-semibold text-sm w-32">
                  বিশেষ প্রতিবেদন
                </div>
                <h4 className="mb-2 text-black text-xl font-semibold">
                  ২৮ দিনে ২ বিলিয়ন ডলারের বেশি রেমিট্যান্স এসেছে দেশে
                </h4>
                <p className="mb-8 text-slate-600 leading-normal font-light">
                  ২০২৪-২৫ অর্থবছরের সেপ্টেম্বর মাসের প্রথম ২৮ দিনে প্রবাসী
                  বাংলাদেশীরা প্রায় ২.১১ বিলিয়ন মার্কিন ডলার রেমিট্যান্স
                  পাঠিয়েছেন। আজ রোববার বাংলাদেশ ব্যাংকের দেওয়া তথ্য অনুসারে,
                  রাষ্ট্রীয় মালিকানাধীন এবং বিশেষায়িত ব্যাংকের মাধ্যমে
                  রেমিট্যান্স এসেছে ৬৭৯.১০ মিলিয়ন মার্কিন ডলার। আর বেসরকারি
                  ব্যাংকগুলোর মাধ্যমে এসেছে ১.৪৩ বিলিয়ন মার্কিন ডলার। 
                </p>
                <div className="flex justify-between">
                  <Link
                    href="#"
                    className="text-slate-800 font-semibold text-sm hover:text-primary flex items-center"
                  >
                    আরও পড়ুন
                    <ArrowRight size={20} className="ml-1" />
                  </Link>
                  <div className="text-primary font-semibold text-xs">
                    ১৯ মিনিট আগে
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-1 rounded-lg">
          <div className="w-full md:h-[390px] overflow-hidden">
            <Image
              height={400}
              width={300}
              src={"/addimage.png"}
              className="w-full h-full rounded-lg object-cover"
              alt="Add Image"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-12 md:col-span-3">
          <div className="grid grid-cols-12 gap-4 mt-4">
            {[1, 2].map((item, index) => {
              return (
                <div key={index} className="col-span-12 md:col-span-6">
                  <div className="flex flex-row gap-4 w-full">
                    <div className="w-2/5">
                      <img
                        src="/image.png"
                        alt="Card Image"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <div className="w-3/5">
                      <h2 className="text-xl font-bold text-gray-800">
                        আইপিএলে দল পাননি গোপালগঞ্জের সাকিব
                      </h2>
                      <p className=" text-gray-600 text-sm">
                        ইন্ডিয়ান প্রিমিয়ার লিগের (আইপিএল) আসন্ন আসরের জন্য
                        জেদ্দায় বসেছে দ্বিতীয় দিনের মেগা নিলাম। গতকাল তোলা
                        হয়েছিল ৮৪ জন ক্রিকেটারকে। দুইদিনে মোট নিলামে উঠবেন
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-12 gap-4 md:gap-8 mt-4">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <div key={index} className="col-span-6 md:col-span-4">
                  <img
                    src="/image.png"
                    alt="Card Image"
                    className="w-full object-cover"
                  />
                  <h3 className="text-lg font-semibold text-center">
                    ৩৪৮ বিলিয়ন ডলার নিয়ে বিশ্বের শীর্ষ ধনী মাস্ক, ধারেকাছে নেই
                    কে
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 md:col-span-1">
          <PopularLetestNews />
        </div>
      </div>
    </section>
  );
};

export default Banner;
