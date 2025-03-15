"use client";

import React, { useCallback, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ButtonPage = () => {
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

export default ButtonPage;

const QAPlayGround = () => {
  const [lastAction, setLastAction] = useState("");

  const handleRightClick = useCallback((e) => {
    e.preventDefault();
    setLastAction("You Right-clicked on button!");
  }, []);

  const handleDoubleClick = useCallback(() => {
    setLastAction("You Double-clicked on button!");
  }, []);

  return (
    <>
      <div className="button-section">
        <p className="label">
          Goto Home and come back here using driver commanda
        </p>
        <Link href="/">
          <Button className="mt-2" variant="destructive" id="button-color">
            Go To Home
          </Button>
        </Link>
      </div>

      <div>
        <p className="label">Get the X & Y co-ordinates of button</p>
        <button
          className="py-2 bg-teal-300 mt-2 px-2 rounded-lg text-gray-800"
          variant="outline"
          id="button-xyCordinate"
        >
          Find Location
        </button>
      </div>

      <div>
        <p className="label">Find the color of the button</p>
        <button
          className="py-2 bg-blue-300 mt-2 px-2 rounded-lg text-gray-800"
          id="button-color"
        >
          Find my color?
        </button>
      </div>

      <div>
        <p className="label">Find the height & width of the button</p>
        <Button className="mt-2" id="button-heightWidth">
          Do you know my size?
        </Button>
      </div>

      <div>
        <p className="label">Confirm button is disabled</p>
        <Button
          variant="destructive"
          disabled
          className="cursor-not-allowed pointer-events-none mt-2"
          aria-disabled="true"
          aria-label="Action Disabled"
          id="button-disabled"
        >
          Disabled
        </Button>
      </div>

      <div>
        <p className="label">
          Click and Hold Button for 1.5 sec and verify button text
        </p>
        <ClickHoldButton />
      </div>

      <div>
        <p className="label">
          Click and Hold Button for 1.5 sec and verify button text
        </p>
        <Button
          onDoubleClick={handleDoubleClick}
          id="double-click"
          aria-label="Double Click Me"
          className="mt-2"
        >
          Double Click Me
        </Button>
      </div>
      <div>
        <p className="label">Right click on button</p>
        <Button
          onContextMenu={handleRightClick}
          id="right-click"
          variant="outline"
          aria-label="Right Click Me"
          className="mt-2"
        >
          Right Click Me
        </Button>
      </div>

      <p className="text-white dark:text-gray-700 bg-blue-400 py-2 rounded-lg px-2">
        {lastAction || "No action performed yet."}
      </p>
    </>
  );
};

const ClickHoldButton = () => {
  const [isHolding, setIsHolding] = useState(false);
  const [holdComplete, setHoldComplete] = useState(false);
  const timerRef = useRef(null);

  const handleMouseDown = () => {
    setIsHolding(true);
    timerRef.current = setTimeout(() => {
      setHoldComplete(true);
    }, 1500);
  };

  const handleMouseUp = () => {
    setIsHolding(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (!holdComplete) {
      setHoldComplete(false);
    }
  };

  const buttonClass = holdComplete
    ? "bg-green-500 hover:bg-green-600 text-white mt-2"
    : isHolding
    ? "bg-yellow-400 hover:bg-yellow-500 text-gray-800 mt-2"
    : "bg-blue-500 hover:bg-blue-600 text-white mt-2";

  const buttonText = holdComplete
    ? "Hold Complete!"
    : isHolding
    ? "Keep Holding..."
    : "Click and Hold!";

  return (
    <Button
      id="button-clickHold"
      className={buttonClass}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {buttonText}
    </Button>
  );
};

const LearningInsight = () => {
  return (
    <>
      <ol className="font-light list-decimal pl-6 text-left space-y-1">
        <li>click()</li>
        <li>getCss()</li>
        <li>getSize()</li>
        <li>isEnabled()</li>
        <li>getLocation()</li>
        <li>getText()</li>
        <li>double click</li>
        <li>right click</li>
        <li>driver navigation commands</li>
      </ol>
    </>
  );
};
