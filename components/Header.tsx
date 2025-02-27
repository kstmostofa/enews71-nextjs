import Image from "next/image";
import Link from "next/link";
import {
  LuFacebook,
  LuHouse,
  LuInstagram,
  LuTwitter,
  LuYoutube,
} from "react-icons/lu";
import MobileHeader from "./MobileHeader";
import { fetchApi } from "@/lib/fetchApi";

export interface MenuItem {
  id: number;
  name: string;
  name_bn: string;
  slug: string;
  subItems?: MenuItem[];
}

export interface SociaLink {
  name: string;
  link: string;
  icon: JSX.Element;
}
const socials: SociaLink[] = [
  { name: "Facebook", link: "https://facebook.com", icon: <LuFacebook /> },
  { name: "Twitter", link: "https://twitter.com", icon: <LuTwitter /> },
  { name: "Instagram", link: "https://instagram.com", icon: <LuInstagram /> },
  { name: "Youtube", link: "https://youtube.com", icon: <LuYoutube /> },
];
const getEnglishDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("bn-BD", options).format(new Date());
};
export const dynamic = "force-dynamic";

const Header = async () => {
  const menus = await fetchApi<MenuItem[]>("categories");

  return (
    <header>
      <div className="hidden md:block px-5 py-3 bg-white shadow-sm container mx-auto">
        <div className="flex justify-between items-center relative">
          <div className="flex flex-col">
            <span className="font-semibold">{getEnglishDate()}</span>
            <span className="font-semibold"></span>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 h-[45px]">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={150}
              className="w-full h-[45px] max-h-[45px]"
            />
          </div>

          <div className="flex items-center gap-3">
            <Link
              className="bg-gray-100 px-2 py-2 rounded-lg text-sm font-semibold"
              href={"/"}
            >
              EN
            </Link>
            {socials.map((social, index) => (
              <span
                key={index}
                className="text-primary hover:text-secondary text-xl"
              >
                <Link href={social.link} target="_blank">
                  {social.icon}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>

      <nav className="bg-primary">
        <ul className="hidden md:flex text-white font-bold container mx-auto">
          <li className="relative py-2.5 px-3 flex items-center justify-center group hover:bg-primary-500 hover:text-white">
            <Link href="/" className="flex items-center justify-center">
              <LuHouse size={20} />
            </Link>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
          </li>
          

          {menus.map((menu, index) => (
            <Link key={index} href={`/${menu.slug}`}>
              <li
                className="relative py-2.5 px-3 group hover:bg-primary-500 hover:text-white"
              >
                <div className="flex items-center text-xl">
                  {menu.name_bn}
                  {menu.subItems && menu.subItems.length != 0 && (
                    <span className="ml-2">
                      <svg
                        className="w-3 h-3 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path d="M143 352.3L7 216.3C-2.3 207.4-2.3 192.6 7 183.7s23.6-9.3 32.5 0L160 304.4l120.5-120.7c8.9-8.9 23.6-8.9 32.5 0s8.9 23.6 0 32.5l-136 136.1c-8.9 8.9-23.6 8.9-32.5 0z" />
                      </svg>
                    </span>
                  )}
                </div>

                {menu.subItems && menu.subItems.length != 0 && (
                  <ul
                    className={`absolute rounded ${
                      index === menus.length - 1 ? "right-0" : "left-0"
                    } z-40 top-full mt-0 bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ${
                      menu.subItems.length > 3
                        ? "grid grid-cols-4 p-2 w-[600px]"
                        : "w-[200px] p-2"
                    }`}
                  >
                    {menu.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="py-2 px-4 hover:bg-primary-200 whitespace-nowrap rounded"
                      >
                        <Link href={`/${subItem.slug}`}>{subItem.name_bn}</Link>
                      </li>
                    ))}
                  </ul>
                )}

                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              </li>
            </Link>
          ))}
        </ul>

        <MobileHeader menus={menus} />
      </nav>
    </header>
  );
};

export default Header;
