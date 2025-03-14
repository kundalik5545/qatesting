import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const WindowsPage = () => {
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

export default WindowsPage;

const QAPlayGround = () => {
  return (
    <>
      <div className="space-y-4">
        {/* Go to Home */}
        <div>
          <p className="font-semibold">Goto Home</p>
          <Link href="/" passHref target={"_blank"}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md mt-2">
              Open Home Page
            </Button>
          </Link>
        </div>

        {/* Open multiple windows */}
        <div>
          <p className="font-semibold mt-4">Open multiple windows</p>
          <Link href="/practice/select" passHref target={"_blank"}>
            <Button variant="outline" className="mt-2">
              Multiple windows
            </Button>
          </Link>
        </div>

        {/* Steps List */}
        <ol className="list-decimal list-inside mt-4 space-y-1 text-sm">
          <li>Click on the home button</li>
          <li>Goto the newly opened tab</li>
          <li>Print the title of the page</li>
          <li>Close the parent window</li>
          <li>Close the child window</li>
          <li>Click on the Multiple windows button</li>
          <li>Print all the window titles</li>
          <li>Close all the windows</li>
        </ol>
      </div>
    </>
  );
};

const LearningInsight = () => {
  return (
    <>
      <ol className="font-light list-decimal pl-6 text-left space-y-1">
        <li>Window Handling concept</li>
        <li>close()</li>
        <li>qauit()</li>
        <li>getTitle()</li>
        <li>Set - LinkedHashSet</li>
        <li>Iterator or loop</li>
      </ol>
    </>
  );
};
