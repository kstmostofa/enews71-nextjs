import Head from "next/head";
import GoogleAdsense from "./GoogleAdsense";
import React from "react";

const ContentWithAds = ({ content }: { content: string }) => {
  const paragraphs = content.split(/<\/p>/).filter((p) => p.trim() !== "");

  return (
    <>
      {paragraphs.map((item, index) => (
        <React.Fragment key={index}>
          <div className="prose text-black prose-xl w-full max-w-none"> 
            <div dangerouslySetInnerHTML={{ __html: item + "</p>" }} />
          </div>
          {(index + 1) % 4 === 0 && <GoogleAdsense ratio="wide" />}
        </React.Fragment>
      ))}
    </>
  );
};

export default ContentWithAds;
