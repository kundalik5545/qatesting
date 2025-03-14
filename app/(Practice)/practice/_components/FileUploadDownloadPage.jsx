"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FileDown, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FilePage = () => {
  const youtubeLink = "";

  return (
    <div className="pt-2">
      {/* Main layout */}
      <div className="flex flex-col sm:flex-row w-full gap-4">
        {/* Main Card Section */}
        <div className="w-full sm:w-2/3 pb-5 md:pb-0">
          <Card className="w-full shadow-lg rounded-xl dark:bg-gray-800">
            <CardContent className="space-y-4 pt-4 sm:pt-3 text-sm sm:text-base text-gray-900 dark:text-gray-200">
              <QAPlayGround />
            </CardContent>
          </Card>
        </div>

        {/* Insight Card */}
        <div className="w-full sm:w-1/3">
          <Card className="w-full shadow-lg rounded-xl dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between p-4 shadow-md dark:shadow-gray-800">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Insight
              </p>
              <GraduationCap className="text-gray-700 dark:text-teal-300" />
            </CardHeader>
            <CardContent className="p-4 text-center text-gray-800 dark:text-gray-300">
              <p className="font-light py-3 text-base">
                On completion of this exercise, you can learn the following
                concepts:
              </p>
              <LearningInsight />
            </CardContent>
            <CardFooter className="flex justify-center border-t border-gray-200 dark:border-gray-700 p-4">
              <Link
                href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="underline text-blue-600 dark:text-teal-200 font-light hover:text-blue-800 dark:hover:text-teal-300">
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

export default FilePage;

const QAPlayGround = () => {
  const [fileName, setFileName] = useState();
  const [Class, setClass] = useState("hide");
  return (
    <>
      {/* Main Section */}
      <section className="file-Content flex flex-col space-y-3">
        <h2 className="text-2xl md:text-3xl font-semibold">Upload</h2>
        <div className="File-Upload-Enable flex flex-col space-y-3">
          <div className="flex flex-col md:flex-row  items-start md:items-center justify-between space-y-3 md:space-x-3">
            <Label
              htmlFor="file-Upload"
              className="text-base md:text-base  w-[1/3]"
            >
              Select file to Upload
            </Label>
            <Input
              id="file-Upload"
              type="file"
              className="w-[2/3]"
              onChange={(e) => {
                const file = e.target.files[0];
                setFileName(file.name);
                setClass("show");
              }}
            />
          </div>
          <span className="text-red-600 text-base">
            File Path: C:\fakepath\{fileName}
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold pt-5">Download</h2>
        <div className="flex flex-col  space-y-2 justify-between Download-File mb-3 mt-3">
          <label className="form-label">Click to Download a file</label>
          <div className="flex flex-col space-y-5">
            <Link
              href="/icons/android-chrome-512x512.png"
              download
              className="p-2"
            >
              <Button variant="outline">
                Download Image
                <FileDown />
              </Button>
            </Link>
            <Link href="/docs/test.pdf" download className="p-2">
              <Button variant="outline">
                Download PDF
                <FileDown />
              </Button>
            </Link>
            <Link href="/docs/test.xlsx" download className="p-2">
              <Button variant="outline">
                Download Excel
                <FileDown />
              </Button>
            </Link>
            <Link href="/docs/test.docx" download className="p-2">
              <Button variant="outline">
                Download Word
                <FileDown />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const LearningInsight = () => {
  return (
    <>
      <ol className="font-light list-decimal pl-6 text-left space-y-1">
        <li>click()</li>
        <li>sendKeys()</li>
        <li>How to download & upload files</li>
        <li>ChromeOption class</li>
        <li>SetFileDetector</li>
      </ol>
    </>
  );
};
