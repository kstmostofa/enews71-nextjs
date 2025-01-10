"use client";
import { useEffect } from "react";
import Head from "next/head";

const GoogleAdsense = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).adsbygoogle) {
      (window as any).adsbygoogle.push({});
    }
  }, []);

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div>
        <div className="flex items-center justify-center h-32">
          <p>google ads</p>
        </div>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXX" // Replace with your publisher ID
          data-ad-slot="XXXXXX" // Replace with your ad slot
          data-ad-format="auto"
        ></ins>
      </div>
    </>
  );
};

export default GoogleAdsense;
