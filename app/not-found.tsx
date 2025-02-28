import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-grow h-96">
      <h1 className="text-8xl font-bold text-primary p-4">
        <Frown size={128} />
      </h1>
      <p className="text-2xl text-red-500">দুঃখিত, পেজটি খুঁজে পাওয়া যায়নি</p>
      <Link href="/">
        <Button className="text-white text-xl mt-4">হোমপেজে ফিরুন</Button>
      </Link>
    </div>
  );
}