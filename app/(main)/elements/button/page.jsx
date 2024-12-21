"use client";

import { Button } from "@/components/ui/button";
import { buttonTC } from "@/data/elementsTestCases";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ButtonPage = () => {
  const [lastAction, setLastAction] = useState("");

  const handleRightClick = (e) => {
    e.preventDefault();
    setLastAction("Right-clicked the button!");
  };

  const handleDoubleClick = () => {
    setLastAction("Double-clicked the button!");
  };

  const handleClick = () => {
    setLastAction("Clicked the button!");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <h1 className="gradient-subTitle text-3xl">Button</h1>

      {/* Main Section */}
      <section className="max-w-3xl border p-4 shadow-md rounded-md flex flex-wrap gap-5">
        <Button onDoubleClick={handleDoubleClick} id="double-click">
          Double Click Me
        </Button>
        <Button
          onContextMenu={handleRightClick}
          id="right-click"
          variant="outline"
        >
          Right Click Me
        </Button>
        <Button onClick={handleClick} id="click" variant="destructive">
          Click Me
        </Button>
      </section>

      {/* Result Section */}
      <section className="max-w-3xl border p-4 shadow-md rounded-md">
        <h2 className="text-lg font-semibold">Last Action:</h2>
        <p className="text-gray-700">
          {lastAction || "No action performed yet."}
        </p>
      </section>

      {/* Test Cases Section */}
      <section className="max-w-3xl border p-4 shadow-md rounded-md">
        <h2 className="text-lg font-semibold">Test Cases:</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Test case Id</TableHead>
              <TableHead>Test Case Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {buttonTC && buttonTC.length > 0 ? (
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
