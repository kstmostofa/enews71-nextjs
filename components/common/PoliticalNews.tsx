import React from "react";
import Separator from "../Separator";
import Link from "next/link";
import Image from "next/image";

const PoliticalNews = () => {
  return (
    <div>
      <Separator text="রাজনীতি" />
      <div className="mt-4">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-4">
                <Link href={`#`}>
                  <h4 className="text-2xl font-semibold text-[#292219] hover:underline cursor-pointer">
                    প্রতিটি সেক্টরে শেখ হাসিনার লুটপাটের গুপ্তধন আছে : রিজভী 
                  </h4>
                </Link>
                <p className="text-xl text-[#5C5955] mt-2">
                  দেশের প্রতিটি সেক্টরে, প্রতিটি জায়গায় ক্ষমতাচ্যুত
                  ‘স্বৈরাচার’ শেখ হাসিনার লুটপাটের গুপ্তধন রয়েছে বলে মন্তব্য
                  করেছেন বিএনপির সিনিয়র যুগ্ম মহাসচিব রুহুল কবির রিজভী। তিনি
                  বলেন, অন্তর্বর্তীকালীন সরকার যদি ঠিকমতো ড্রাইভ দিতে পারে,
                  তাহলে এই গুপ্তধনের সন্ধান পাওয়া যাবে।  
                </p>
              </div>
              <div className="col-span-12 md:col-span-8">
                <Image
                  src="/image.png"
                  alt="Political News"
                  width={538}
                  height={316}
                  className="w-full h-[316px] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="">
              {[1, 2, 3].map((item, index) => {
                return (
                  <Link href="#" key={index}>
                    <div className="flex flex-row gap-4 w-full mb-4">
                      <div className="w-[30%]">
                        <Image
                          src="/image.png"
                          alt="Card Image"
                          width={100}
                          height={96}
                          className="w-full h-[96px] object-cover "
                        />
                      </div>
                      <div className="w-[70%] ">
                        <p className="hover:underline text-black font-semibold">
                          ১২৩ বিজিপি সেনার বিনিময়ে মিয়ানমার থেকে ফিরলেন ৮৫
                          বাংলাদেশি
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
    </div>
  );
};

export default PoliticalNews;
