"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <Menu className="text-[32px] text-blue-600" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-gray-800">
        <div className="mt-32 mb-40  text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Uttam<span className="text-blue-600">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`font-medium hover:text-blue-600 transition-all ${
                pathname === link.path
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
