import Image from "next/image";
import React from "react";
import BannerRightAd from "./BannerRightAd";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="container w-full mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="flex flex-col md:flex-row gap-4 border rounded-lg">
            <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
              <Image
                src="/image.png"
                alt="banner"
                layout="fill"
                objectFit="cover"
                className="rounded-md md:rounded-lg rounded-t-lg lg:rounded-r-none"
              />
            </div>
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
                রাষ্ট্রীয় মালিকানাধীন এবং বিশেষায়িত ব্যাংকের মাধ্যমে রেমিট্যান্স
                এসেছে ৬৭৯.১০ মিলিয়ন মার্কিন ডলার। আর বেসরকারি ব্যাংকগুলোর
                মাধ্যমে এসেছে ১.৪৩ বিলিয়ন মার্কিন ডলার। 
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
        <div className="col-span-1">
          <div className="relative w-full h-32 lg:h-64">
            <Image
              src={"/addimage.png"}
              alt="ad banner"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
