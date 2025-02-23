import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getStripHtml(html: string, length: number): string {
  return html.replace(/<[^>]*>?/gm, '').split(" ").slice(0, length).join(" ") + "...";
}

//date time to human readable format
export function getHumanReadableDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} সেকেন্ড আগে`;
  } else if (diffInSeconds < 3600) {
    return `${Math.floor(diffInSeconds / 60)} মিনিট আগে`;
  } else if (diffInSeconds < 86400) {
    return `${Math.floor(diffInSeconds / 3600)} ঘণ্টা আগে`;
  } else if (diffInSeconds < 2592000) {
    return `${Math.floor(diffInSeconds / 86400)} দিন আগে`;
  } else if (diffInSeconds < 31536000) {
    return `${Math.floor(diffInSeconds / 2592000)} মাস আগে`;
  } else {
    return `${Math.floor(diffInSeconds / 31536000)} বছর আগে`;
  }
}

export const imageLoader = () => {
  return `${process.env.NEXT_PUBLIC_API_URL}/placeholder.png`
}