import React from "react";
import Separator from "../Separator";
import Image from "next/image";
import Link from "next/link";

const ShowbizNews = () => {
  return (
    <div className="bg-[#F8E1F6] rounded-md">
      <Separator text="বিনোদন" />
      <div className="p-4">
        <div className="">
          <Image
            src="/image.png"
            alt="Showbiz News"
            width={538}
            height={272}
            className="w-full h-[272px] object-cover"
          />
          <Link href="#">
            <h3 className="text-[#292219] text-xl font-bold hover:underline cursor-pointer mt-2">
              গোপন তথ্য ফাঁস করলেন রণবীর!
            </h3>
          </Link>
          <p className="text-[#5C5955] text-xl">
            বলিউড দম্পতি রণবীর কাপুর ও আলিয়া ভাট প্রায়শই কোনও না কোনও কারণে
            খবরে থাকেন। তবে এবার অভিনেত্রীর অবাক করা একটি ঘটনা ফাঁস করলেন স্বামী
            রণবীর।
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/image.png"
            alt="Showbiz News"
            width={139}
            height={110}
            className="w-full h-[100px] object-cover"
          />
          <div className="">
            <Link href="#">
              <h4 className="textlg font-bold text-[#292219] cursor-pointer hover:underline mt-2">
                ‘যার চলে যায় সেই বোঝে হায় বিচ্ছেদের কী যন্ত্রণা’
              </h4>
            </Link>
            <p className="text-sm text-[#5C5955] mt-2">
              ঢালিউড নায়িকা পরীমণি ছেলেমেয়েকে নিয়ে বরিশালে গেছেন। তবে এটা তাদের
              কোনো{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowbizNews;
