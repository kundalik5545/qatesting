"use client";

import { Bot, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import SheetOpen from "./NavbarSheet";
import { ModeToggle } from "./lib/Mode-toggle";
import { basicDetails } from "@/data/BasicSetting";
import Image from "next/image";

const Header = () => {
  const mainNavLinks = [
    { to: "/", text: "Home" },
    { to: "/blog", text: "Blog" },
    { to: "/contact-us", text: "Contact" },
  ];

  const navLinks = [
    { to: "/elements/text-box", text: "Elements" },
    { to: "/forms/basic-details", text: "Forms" },
    { to: "/alert-window/browser-window", text: "Alert Window" },
    { to: "/widget/basic-details", text: "Widget" },
    { to: "/interactions/basic-details", text: "Interactions" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-black backdrop-blur-md z-50 border-b shadow-sm">
      <nav className="container mx-auto px-1  flex items-center justify-between">
        <Link href="/" passHref>
          <Image
            src="/logo/QALogo.webp"
            alt="QA PlayGround Logo"
            width={250}
            height={100}
            title="QA PlayGround Logo"
          />
        </Link>
        {/* Mobile Menu */}
        <div className="block md:hidden">
          <ModeToggle />
        </div>
        <SheetOpen>
          <Menu className="lg:hidden cursor-pointer" size={28} />
        </SheetOpen>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          {mainNavLinks.map(({ to, text }, index) => (
            <Link key={index} href={to}>
              <Button
                variant="ghost"
                className="hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {text}
              </Button>
            </Link>
          ))}

          {/* Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant="ghost"
                className="hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Practice <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark:bg-gray-800">
              {navLinks.map(({ to, text }, index) => (
                <Link key={index} href={to}>
                  <DropdownMenuItem className="hover:bg-gray-200 dark:hover:bg-gray-700">
                    {text}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Dark Mode Toggle */}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
