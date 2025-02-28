import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const solaimainLipi = localFont({
  src: "./fonts/SolaimanLipi.ttf",
  variable: "--font-sans",
});

const JetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ইনিউজ৭১ - এই প্রজন্মের গণমাধ্যম",
  description: "ইনিউজ৭১ - এই প্রজন্মের গণমাধ্যম",
  openGraph: {
    title: "ইনিউজ৭১ - এই প্রজন্মের গণমাধ্যম",
    description: "সর্বশেষ সংবাদ, বিশ্লেষণ এবং প্রতিবেদন - ইনিউজ৭১",
    url: "https://enews71.com",
    siteName: "ইনিউজ৭১",
    images: [
      {
        url: "https://enews71-nextjs.vercel.app/placeholder.png",
        width: 1200,
        height: 630,
        alt: "ইনিউজ৭১ - এই প্রজন্মের গণমাধ্যম",
      },
    ],
    type: "website",
    locale: "bn_BD",
  },
  twitter: {
    card: "summary_large_image",
    title: "ইনিউজ৭১ - এই প্রজন্মের গণমাধ্যম",
    description: "সর্বশেষ সংবাদ, বিশ্লেষণ এবং প্রতিবেদন - ইনিউজ৭১",
    images: ["https://enews71-nextjs.vercel.app/placeholder.png"],
    site: "@enews71",
    creator: "@enews71",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${solaimainLipi.variable} ${JetBrains.variable} antialiased`}
      >
        <Header />
        <main className="min-h-[calc(100vh-424px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
