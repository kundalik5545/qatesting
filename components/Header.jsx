import { Bot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={"/"} className="flex items-center justify-around gap-2">
          <Bot size={30} />
          <span className="text-2xl font-semibold">QA Testing</span>
        </Link>
        <div className="flex items-center justify-between space-x-2">
          <Link href={"/"}>Home</Link>
          <Link href={"/about-us"}>About-Us</Link>
          <Link href={"/blog"}>Blog</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
