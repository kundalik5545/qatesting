"use client";

import { Bot, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import SheetOpen from "./NavbarSheet";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={"/"} className="flex items-center justify-around gap-2">
          <Bot size={30} />
          <span className="text-2xl font-semibold">QA Testing</span>
        </Link>
        <SheetOpen>
          <Menu className="inline lg:hidden" />
        </SheetOpen>
        <div className=" hidden  lg:flex items-center justify-between space-x-2">
          <div className="flex items-center justify-between space-x-2">
            <Link href={"/"} className="">
              <Button variant="default">Home</Button>
            </Link>
            <Link href={"/blog"}>
              <Button variant="default">Blog</Button>
            </Link>
            <Link href={"/about-us"}>
              <Button variant="default">About-Us</Button>
            </Link>
          </div>

          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="default" size="lg">
                  Practice
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href={"/elements"}>
                  <DropdownMenuItem>Elements</DropdownMenuItem>
                </Link>
                <Link href={"/forms"}>
                  <DropdownMenuItem>Forms</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Alert & Window</DropdownMenuItem>
                <DropdownMenuItem>Widget</DropdownMenuItem>
                <DropdownMenuItem>Interactions</DropdownMenuItem>
                <DropdownMenuItem>Websites</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
