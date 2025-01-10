import Image from "next/image";
import Link from "next/link";
import React from "react";

const LetestNews = () => {
  return (
    <div className="bg-[#FCE9EA] p-4 rounded">
      <div className="text-center border-b pb-2">
        <h3 className="text-lg text-[#C80000]">সর্বশেষ সংবাদ</h3>
      </div>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <div key={index} className="mb-4">
            <div className="flex items-center gap-2 w-full">
              <div className="flex-shrink-0">
                <Image
                  src="/image.png"
                  height={200}
                  width={200}
                  alt="Card Image"
                  className="w-[60px] h-[60px] object-cover rounded-full border border-[#67B58A]"
                />
              </div>
              <div className="">
                <Link href="#">
                  <p className="text-sm hover:underline">
                    প্রবীণদের শারীরিক সমস্যা সমাধানে গুরুত্বপূর্ণ ভূমিকা পালন
                    করে পরিবার 
                  </p>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LetestNews;
