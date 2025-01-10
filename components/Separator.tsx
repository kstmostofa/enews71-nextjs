import React from "react";

interface SeparatorProps {
  text: string;
}

const Separator = ({ text = "Separator" }: SeparatorProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex-grow border-double border-4 border-[#2C4B9C] p-0.5 border-e-0 border-s-0" />
      <h1 className="text-[#2C4B9C] text-[25px] font-bold">{text}</h1>
      <div className="flex-grow border-double border-4 border-[#2C4B9C] p-0.5 border-e-0 border-s-0" />
    </div>
  );
};

export default Separator;
