import Image from "next/image";
import React from "react";
import BannerRightAd from "./BannerRightAd";

const Banner = () => {
  return (
    <section className="container w-full mx-auto py-4 px-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-white rounded-lg flex flex-col lg:flex-row flex-1 border">
          <div className="relative w-full lg:w-1/2">
            <div className="relative w-full h-60 lg:h-80">
              <Image
                src="/image.png"
                alt="banner"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg lg:rounded-tr-none"
              />
            </div>
            <p className="text-gray-500 text-center text-sm mt-1 mb-1">
              প্রতীকী ছবি/সংগৃহীত
            </p>
          </div>

          <div className="flex flex-col w-full lg:w-1/2 p-4">
            <span className="text-primary px-2 py-1 rounded-lg font-bold">
                রিমিট্যান্স
            </span>
            <h1 className="text-xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
              ২০২৪-২৫ অর্থবছরের ২৮ দিনে ২ বিলিয়ন ডলারের বেশি রেমিট্যান্স এসেছে
              দেশে
            </h1>
            <p className="text-gray-600 text-justify text-sm lg:text-base">
              ২০২৪-২৫ অর্থবছরের সেপ্টেম্বর মাসের প্রথম ২৮ দিনে প্রবাসী
              বাংলাদেশীরা প্রায় ২.১১ বিলিয়ন মার্কিন ডলার রেমিট্যান্স পাঠিয়েছেন।
              আজ রোববার বাংলাদেশ ব্যাংকের দেওয়া তথ্য অনুসারে, রাষ্ট্রীয়
              মালিকানাধীন এবং বিশেষায়িত ব্যাংকের মাধ্যমে রেমিট্যান্স এসেছে
              ৬৭৯.১০ মিলিয়ন মার্কিন ডলার। আর বেসরকারি ব্যাংকগুলোর মাধ্যমে এসেছে
              ১.৪৩ বিলিয়ন মার্কিন ডলার। 
            </p>
          </div>
        </div>
        <BannerRightAd addimage="/addimage.png" />
      </div>
    </section>
  );
};

export default Banner;
