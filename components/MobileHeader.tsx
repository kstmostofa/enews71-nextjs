"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { MenuItem, SociaLink } from "./Header";
import {
  LuChevronDown,
  LuChevronUp,
  LuFacebook,
  LuHouse,
  LuInstagram,
  LuTwitter,
  LuYoutube,
} from "react-icons/lu";
import Image from "next/image";

interface MobileHeaderProps {
  menus: MenuItem[];
}

const socials: SociaLink[] = [
  { name: "Facebook", link: "https://facebook.com", icon: <LuFacebook /> },
  { name: "Twitter", link: "https://twitter.com", icon: <LuTwitter /> },
  { name: "Instagram", link: "https://instagram.com", icon: <LuInstagram /> },
  { name: "Youtube", link: "https://youtube.com", icon: <LuYoutube /> },
];
const MobileHeader: React.FC<MobileHeaderProps> = ({ menus }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const mobileMenu = menus.slice(0, 4);

  const toggleSubMenu = (index: number) => {
    setActiveMenu(index === activeMenu ? null : index);
  };
  return (
    <div className="md:hidden flex flex-col bg-white">
      <div className="flex justify-center items-center py-2 bg-white">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={150} height={150} />
        </Link>
      </div>

      <nav className="bg-primary">
        <div className="flex justify-between text-white font-bold">
          <ul className="flex">
            {mobileMenu.map((menu, index) => (
              <li
                key={index}
                className="relative py-2.5 px-3 group hover:bg-primary-500 hover:text-white"
              >
                <Link href={`/${menu.slug}`}>
                {menu.name_bn}
                </Link>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl mr-2"
          >
            {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            className={`fixed top-0 left-0 w-3/4 max-w-sm h-full pb-20 bg-white-100 shadow-lg z-50 transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="flex justify-between items-center p-3">
              <Image src="/logo.png" alt="logo" width={150} height={150} />
              <button
                className="text-2xl hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <HiX />
              </button>
            </div>
            <ul className="bg-white-100 text-black font-bold flex flex-col p-5 h-full overflow-y-auto">
              <li>
                <div className="flex justify-between items-center cursor-pointer hover:bg-primary-500 rounded-lg px-3 py-2 hover:text-white">
                  <Link href={"/"}>হোম</Link>
                </div>
              </li>
              {menus.map((menu, index) => (
                <li key={index}>
                  <div
                    className="flex justify-between items-center cursor-pointer hover:bg-primary-500 rounded-lg px-3 py-2 hover:text-white"
                    onClick={() => toggleSubMenu(index)}
                  >
                    <Link href={`/${menu.slug}`}>
                    {menu.name_bn}
                    </Link>
                    {menu.subItems && menu.subItems.length != 0 && (
                      <span className="text-sm">
                        {activeMenu === index ? (
                          <LuChevronUp />
                        ) : (
                          <LuChevronDown />
                        )}
                      </span>
                    )}
                  </div>

                  {menu.subItems && activeMenu === index && (
                    <ul className="ml-8 space-y-1 mt-2">
                      {menu.subItems.map((subItem, subIndex) => (
                        <Link href={`/${menu.slug}`} key={subIndex}>
                          <li className="p-2 rounded-lg hover:bg-primary-500 hover:text-white">
                            {subItem.name_bn}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <div className="mt-4 flex justify-center gap-4">
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
            </ul>
          </div>
        )}
      </nav>

      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default MobileHeader;
