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

const Header = () => {
  const allMainNavLinks = [
    { to: "/", linkText: "Home" },
    { to: "https://random-coders.vercel.app", linkText: "Blog" },
  ];

  const allNavLinks = [
    { to: "/elements/text-box", linkText: "Elemnets" },
    { to: "/forms/basic-details", linkText: "Forms" },
    { to: "/alert-window/browser-window", linkText: "Alert-window" },
    { to: "/widget/basic-details", linkText: "Widget" },
    { to: "/interactions/basic-details", linkText: "Interactions" },
  ];

  return (
    <div className="fixed top-0 w-full bg-white/80 dark:bg-black backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={"/"} className="flex items-center justify-around gap-2">
          <Bot size={30} />
          <span className="text-2xl font-semibold">
            {process.env.NEXT_PUBLIC_WEBSITE_NAME}
          </span>
        </Link>
        <SheetOpen>
          <Menu className="inline lg:hidden" />
        </SheetOpen>
        <div className=" hidden  lg:flex items-center justify-between space-x-2">
          <div className="flex items-center justify-between space-x-2">
            {allMainNavLinks.map((links, i) => (
              <Link href={links.to} className="" key={i}>
                <Button variant="default">{links.linkText}</Button>
              </Link>
            ))}
          </div>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="default" size="lg">
                  Practice <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {allNavLinks.map((links, i) => (
                  <Link href={links.to} key={i}>
                    <DropdownMenuItem>{links.linkText}</DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
