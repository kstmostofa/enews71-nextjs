import Head from "next/head";
import GoogleAdsense from "./GoogleAdsense";
import React from "react";

const ContentWithAds = ({ content }: { content: string }) => {
  const paragraphs = content.split(/<\/p>/).filter((p) => p.trim() !== "");
  return (
    <>
      {paragraphs.map((item, index) => (
        <React.Fragment key={index}>
          <div
            dangerouslySetInnerHTML={{
              __html: item + "</p>",
            }}
          ></div>
          {(index + 1) % 4 === 0 && <GoogleAdsense />}
        </React.Fragment>
      ))}
    </>
  );
};

export default ContentWithAds;
