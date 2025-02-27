"use client";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

const GoogleAdsense = ({ ratio = "square", marginTop = false }) => {
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
        <div className={`flex items-center justify-center w-full ${marginTop ? "mt-4" : ""}`}>
          <Image
            src={ratio === "square" ? "/google-add-square.png" : "/google-add.png"}
            alt="Google Adsense"
            width={970}
            height={90}
            className={ratio === "square" ? "w-full" : "w-[970px]"}
          />
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
