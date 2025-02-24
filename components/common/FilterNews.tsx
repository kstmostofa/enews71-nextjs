import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const FilterNews = () => {
  return (
    <div>
      <div className="text-[#2C4B9C] text-[28px] font-bold flex items-center justify-center border-b border-[#2C4B9C]">
        <h1>আপনার এলাকার খবর</h1>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-6">
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="--বিভাগ--" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-6">
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="--জেলা--" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-6">
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="--উপজেলা--" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button className="text-white bg-[#C80000] hover:bg-[#c80000ae]">
          অনুসন্ধান করুন
        </Button>
      </div>
    </div>
  );
};

export default FilterNews;
