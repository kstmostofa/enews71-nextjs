import React from "react";
import Separator from "../Separator";
import Image from "next/image";

const Comment = () => {
  return (
    <div>
      <Separator text="মতামত" />
      <div className="grid grid-cols-12 gap-4 mt-4">
        {[1, 2, 3].map((item, index) => {
          return (
            <div key={index} className="col-span-12 md:col-span-4">
              <div className="bg-[#E1F8EB] flex  p-4 items-center gap-4 w-full rounded-lg">
                <div className="w-[85px] flex-shrink-0">
                  <Image
                    src="/image.png"
                    height={200}
                    width={200}
                    alt="Card Image"
                    className="w-[85px] h-[85px] object-cover rounded-full border border-[#67B58A]"
                  />
                </div>
                <div className="">
                  <p className="text-[#94908C] text-sm">ড. মাহবুব হাসান</p>
                  <p className="text-[#F02424] font-semibold my-1">
                    পর্যটনে ভর সার্কে নজর
                  </p>
                  <p className="text-[#94908C] text-xs">
                    নিশ্চয়ই মনে আছে আপনাদের সার্ক বা দক্ষিণ এশিয়ার সাতটি দেশের
                    মধ্যে যে সহযোগিতার সমিতি গড়ে উঠেছিল সাতের শেষ
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
