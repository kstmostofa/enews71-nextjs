import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getStripHtml(html: string, length: number): string {
  return html.replace(/<[^>]*>?/gm, '').split(" ").slice(0, length).join(" ") + "...";
}

export const getEnglishDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  };
  return new Intl.DateTimeFormat("bn-BD", options).format(new Date());
};

export function getHumanReadableDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const banglaDigits: string[] = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  const toBanglaNumber = (num: number): string =>
    num.toString().split("").map(d => banglaDigits[parseInt(d)]).join("");

  if (diffInSeconds < 60) {
    return `${toBanglaNumber(diffInSeconds)} সেকেন্ড আগে`;
  } else if (diffInSeconds < 3600) {
    return `${toBanglaNumber(Math.floor(diffInSeconds / 60))} মিনিট আগে`;
  } else if (diffInSeconds < 86400) {
    return `${toBanglaNumber(Math.floor(diffInSeconds / 3600))} ঘণ্টা আগে`;
  } else if (diffInSeconds < 2592000) {
    return `${toBanglaNumber(Math.floor(diffInSeconds / 86400))} দিন আগে`;
  } else if (diffInSeconds < 31536000) {
    return `${toBanglaNumber(Math.floor(diffInSeconds / 2592000))} মাস আগে`;
  } else {
    return `${toBanglaNumber(Math.floor(diffInSeconds / 31536000))} বছর আগে`;
  }
}

export const imageLoader = () => {
  return `${process.env.NEXT_PUBLIC_API_URL}/placeholder.png`
}

export function formatBanglaDate(isoString: string): string {
  const months: string[] = [
    "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
    "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
  ];

  const banglaDigits: string[] = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  const toBanglaNumber = (num: number): string =>
    num.toString().split("").map(d => banglaDigits[parseInt(d)]).join("");

  const dateObj: Date = new Date(isoString);
  const day: string = toBanglaNumber(dateObj.getUTCDate());
  const month: string = months[dateObj.getUTCMonth()];
  const year: string = toBanglaNumber(dateObj.getUTCFullYear());

  const bdHours: number = (dateObj.getUTCHours() + 6) % 24;
  const minutes: string = toBanglaNumber(dateObj.getUTCMinutes());

  return `প্রকাশ: ${day} ${month} ${year}, ${toBanglaNumber(bdHours)}:${minutes}`;
}

export const paginationLimit = 12;


