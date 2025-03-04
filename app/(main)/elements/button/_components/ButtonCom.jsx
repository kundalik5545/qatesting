"use client";

import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { buttonTC } from "@/data/elementsTestCases";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { basicDetails, pagesTitle } from "@/data/BasicSetting";

const ButtonPage = () => {
  const [lastAction, setLastAction] = useState("");

  const handleRightClick = useCallback((e) => {
    e.preventDefault();
    setLastAction("Right-clicked the button!");
  }, []);

  const handleDoubleClick = useCallback(() => {
    setLastAction("Double-clicked the button!");
  }, []);

  const handleClick = useCallback(() => {
    setLastAction("Clicked the button!");
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <h2 className="gradient-subTitle text-3xl font-bold">
        {pagesTitle.buttonPage}
      </h2>

      {/* 🔹 Interactive Buttons Section */}
      <section className="max-w-3xl border p-4 shadow-md rounded-md flex flex-wrap gap-5">
        <Button
          onDoubleClick={handleDoubleClick}
          id="double-click"
          aria-label="Double Click Me"
        >
          Double Click Me
        </Button>
        <Button
          onContextMenu={handleRightClick}
          id="right-click"
          variant="outline"
          aria-label="Right Click Me"
        >
          Right Click Me
        </Button>
        <Button
          onClick={handleClick}
          id="click"
          variant="destructive"
          aria-label="Click Me"
        >
          Click Me
        </Button>
      </section>

      {/* 🔹 Action Result Section */}
      <section className="max-w-3xl border p-4 shadow-md rounded-md">
        <h3 className="text-lg font-semibold">Last Action:</h3>
        <p className="text-gray-700">
          {lastAction || "No action performed yet."}
        </p>
      </section>

      {/* 🔹 Test Cases Section */}
      <section className="border p-4 shadow-md rounded-md">
        <h3 className="text-lg font-semibold">Test Cases</h3>
        <Table>
          <TableCaption>
            Automation test cases for button interactions.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Test Case Id</TableHead>
              <TableHead>Test Case Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {buttonTC?.length > 0 ? (
              buttonTC.map((ele, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{ele.TestId}</TableCell>
                  <TableCell>{ele.TestCaseName}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="text-center">
                  No test cases available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default ButtonPage;
