"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const youtubeLink = "";
const InputPage = () => {
  const [text, setText] = useState("QA PlayGround Clear Me");
  return (
    <div className="">
      <h2 className="text-4xl font-semibold pl-5 md:pl-0 py-4 ">Input</h2>
      <div className="flex md:flex-row flex-col items-center md:items-start gap-5">
        {/* Main content */}
        <div className="main-section  ">
          <div className="flex justify-center items-center ">
            <Card className="w-[350px] sm:w-[500px] shadow-lg rounded-lg ">
              <CardContent className="space-y-4 pt-4 sm:pt-3 text-sm sm:text-base">
                {/* Movie Name Input */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="fullName" className="text-sm sm:text-base">
                    Enter any movie name
                  </Label>
                  <Input
                    id="movieName"
                    placeholder="Enter hollywood movie name"
                    className="text-sm md:text-base"
                  />
                </div>

                {/* Append a text and press tab */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="appendText" className="text-sm sm:text-base">
                    Append a text and press keyboard tab
                  </Label>
                  <Input
                    id="appendText"
                    defaultValue="I am good dsf"
                    className="text-sm sm:text-base"
                  />
                </div>

                {/* Verify text present inside input field */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="insideText" className="text-sm sm:text-base">
                    Verify text present inside input field
                  </Label>
                  <Input
                    id="insideText"
                    defaultValue="QA PlayGround"
                    className="text-sm sm:text-base"
                  />
                </div>

                {/* Clear the text */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="clearText" className="text-sm sm:text-base">
                    Clear the text
                  </Label>
                  <Input
                    id="clearText"
                    value={text}
                    className="text-sm sm:text-base"
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>

                {/* Confirm edit field is disabled */}
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="disabledInput"
                    className="text-sm sm:text-base"
                  >
                    Check edit field is disabled
                  </Label>
                  <Input
                    id="disabledInput"
                    value="Enter"
                    disabled
                    className="text-sm sm:text-base"
                  />
                </div>

                {/* Confirm text is readonly */}
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="readonlyInput"
                    className="text-sm sm:text-base"
                  >
                    Check text is readonly
                  </Label>
                  <Input
                    id="readonlyInput"
                    value="This text is readonly"
                    readOnly
                    className="text-sm sm:text-base"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Insigth Card */}
        <div className="insights-section p-2">
          <Card className="w-80 transition-transform duration-300 ease-in-out transform ">
            <CardHeader className="flex flex-row items-center justify-between p-2 shadow-lg dark:shadow-md dark:shadow-gray-800  space-y-0">
              <p className="px-2 text-xl font-semibold">Insight</p>
              <GraduationCap />
            </CardHeader>
            <CardContent className="p-4 ">
              <p className="font-light py-3 text-base dark:text-gray-200 text-center">
                On completion of this exercise, you can learn the following
                concepts.
              </p>
              <ol className="font-light list-decimal pl-8">
                <li>sendKeys()</li>
                <li>Keyboard TAB</li>
                <li>getAttribute()</li>
                <li>clear()</li>
                <li>isEnabled()</li>
              </ol>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center hover:bg-teal-50 p-2 py-4 border-t ">
              <Link
                href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="underline text-blue-600 dark:text-teal-200 font-light ">
                  Watch tutorial
                </span>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InputPage;
