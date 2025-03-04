"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { Button } from "./ui/button";

const SheetOpen = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</SheetTitle>
            <SheetDescription>
              <div className="flex flex-col space-y-2">
                <Link href={"/"} className="">
                  <Button
                    variant="default"
                    size="lg"
                    className="text-base text-left"
                  >
                    Home
                  </Button>
                </Link>
                <Link href={"/blog"}>
                  <Button
                    variant="default"
                    size="lg"
                    className="text-base text-left"
                  >
                    Blog
                  </Button>
                </Link>
                <Link href={"/about-us"}>
                  <Button
                    variant="default"
                    size="lg"
                    className="text-base text-left"
                  >
                    About-Us
                  </Button>
                </Link>
                <Link href={"/elements"}>
                  <Button variant="ghost" size="lg">
                    Elements
                  </Button>
                </Link>
                <Link href={"/forms"}>
                  <Button variant="ghost" size="lg">
                    Forms
                  </Button>
                </Link>
                <Link href={"/alert-window"}>
                  <Button variant="ghost" size="lg">
                    Alert & Window
                  </Button>
                </Link>
                <Link href={"/widget"}>
                  <Button variant="ghost" size="lg">
                    Widget
                  </Button>
                </Link>
                <Link href={"/interactions"}>
                  <Button variant="ghost" size="lg">
                    Interactions
                  </Button>
                </Link>
                <Link href={"/website"}>
                  <Button variant="ghost" size="lg">
                    Website
                  </Button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetOpen;
