import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Copy, Facebook, Printer, Share2 } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white-100 mt-8">
      <div className="container mx-auto py-4 md:py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between  gap-4">
          <div className="">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={45}
              className="w-full object-cover h-[45px]"
            />
          </div>
          <div className="flex flex-col items-center gap-4 text-center p-4 md:p-0">
            <div className=" flex flex-col items-center gap-1">
              <h3 className="text-xl">সম্পাদক : মোঃ শওকত হায়দার (জিকো)</h3>
              <h4 className="text-lg">প্রকাশক : ইনিউজ৭১ মিডিয়া লিমিটেড </h4>
              <p className="text-sm">
                হাউজ: নাম্বার ৫৫ , দ্বিতীয় তলা, রোড নাম্বার ৬/এ , সেক্টর - ১২
                উত্তরা, ঢাকা - ১২৩০ ।
              </p>
              <p className="text-lg">
                ফোন: +880 258 053 897, ইমেইল:
                nfo@enews71.com , enewsltd@gmail.com
              </p>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-4">
              <Link href="#">
                <h4 className="text-xl hover:underline">গোপনীয়তার নীতি</h4>
              </Link>
              <Link href="#">
                <h4 className="text-xl hover:underline">ব্যবহারের শর্তাবলি </h4>
              </Link>
              <Link href="#">
                <h4 className="text-xl hover:underline">যোগাযোগ</h4>
              </Link>
              <Link href="#">
                <h4 className="text-xl hover:underline">আমাদের সম্পর্কে</h4>
              </Link>
              <Link href="#">
                <h4 className="text-xl hover:underline">আমরা</h4>
              </Link>
              <Link href="#">
                <h4 className="text-xl hover:underline">আর্কাইভ</h4>
              </Link>
              <Link href="#">
                <h4 className="text-xl hover:underline">বিজ্ঞাপন</h4>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size={"icon"} className="bg-[#E2E2E2] hover:bg-[#e2e2e2c4]">
              <Facebook fill="#000" />
            </Button>
            <Button size={"icon"} className="bg-[#E2E2E2] hover:bg-[#e2e2e2c4]">
              <Share2 />
            </Button>
            <Button size={"icon"} className="bg-[#E2E2E2] hover:bg-[#e2e2e2c4]">
              <Copy />
            </Button>
            <Button size={"icon"} className="bg-[#E2E2E2] hover:bg-[#e2e2e2c4]">
              <Printer />
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="">
            <p className="text-xl text-white">স্বত্ব © ইনিউজ৭১.কম | </p>
          </div>
          <div className="">
            <p className="text-xl text-white text-center">
              ওয়েবসাইটের কোনো লেখা, ছবি, ভিডিও অনুমতি ছাড়া ব্যবহার বেআইনি।
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
