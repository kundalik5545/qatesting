"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { radioBoxTC } from "@/data/elementsTestCases";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const RadioButtonPage = () => {
  const [selectedOption, setSelectedOption] = useState("Good");

  const handleOnChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="gradient-subTitle text-3xl">Radio Button</h2>

      {/* Main Section */}
      <section className="max-w-3xl border p-4 shadow-md rounded-md">
        <h2 className="text-lg font-semibold">How is Iron Man Movie?</h2>
        {/* Radio Button */}
        <div className="my-3">
          <RadioGroup
            defaultValue="Good"
            onValueChange={handleOnChange}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Good" id="Good" />
              <Label htmlFor="Good">Good</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Better" id="Better" />
              <Label htmlFor="Better">Better</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Worst" id="Worst" disabled />
              <Label htmlFor="Worst">Worst</Label>
            </div>
          </RadioGroup>
        </div>
      </section>

      {/* Result Section */}
      <section className="mt-5 max-w-3xl border p-4 shadow-md rounded-md">
        <p className="text-gray-700">
          Selected Option:{" "}
          <span className="text-red-500">{selectedOption}</span>
        </p>
      </section>

      {/* Test Cases */}
      <section className="max-w-3xl border p-4 shadow-md rounded-md my-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Test case Id</TableHead>
              <TableHead>Test Case Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {radioBoxTC.map((ele, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{ele.TestId}</TableCell>
                <TableCell>{ele.TestCaseName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default RadioButtonPage;
