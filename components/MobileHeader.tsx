"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { MenuItem } from "./Header";
import { LuChevronDown, LuChevronUp, LuHouse } from "react-icons/lu";
import Image from "next/image";

interface MobileHeaderProps {
  menus: MenuItem[];
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ menus }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setActiveMenu(index === activeMenu ? null : index);
  };

  const nonSubMenuItems = menus.filter((menu) => !menu.subItems).slice(0, 5);

  return (
    <div className="flex flex-col bg-white">
      <div className="md:hidden flex justify-center items-center py-2 bg-white">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={150} height={150} />
        </Link>
      </div>

      <nav className="bg-primary">
        <div className="md:hidden flex justify-between text-white font-bold">
          <ul className="flex">
            {nonSubMenuItems.map((menu, index) => (
              <li
                key={index}
                className="relative py-2.5 px-3 group hover:bg-primary-500 hover:text-white"
              >
                <Link href={menu.link}>{menu.name}</Link>
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
          <ul className="bg-white-100 text-black font-bold flex flex-col p-5 h-screen ">
            {menus.map((menu, index) => (
              <li key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer hover:bg-primary-500 rounded-lg px-3 py-2 hover:text-white"
                  onClick={() => toggleSubMenu(index)}
                >
                  <Link href={menu.link}>{menu.name}</Link>
                  {menu.subItems && (
                    <span className="text-sm">
                      {activeMenu === index ? <LuChevronUp /> : <LuChevronDown />}
                    </span>
                  )}
                </div>

                {menu.subItems && activeMenu === index && (
                  <ul className="ml-8 space-y-1 mt-2">
                    {menu.subItems.map((subItem, subIndex) => (
                      <Link href={subItem.link} key={subIndex}>
                        <li className="p-2 rounded-lg hover:bg-primary-500 hover:text-white">
                          {subItem.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default MobileHeader;
