"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Pen } from "lucide-react";
import { useTheme } from "next-themes";

export default function LogicalProgramsTable() {
  const { theme } = useTheme();
  const allLogicalProgramList = [
    {
      description: "Print a triangle pattern",
      ExtraDetails: "Pattern using stars (*)",
      solutionLink: "",
    },
    {
      description: "Check if a number is prime",
      ExtraDetails: "Returns true if prime, false otherwise",
      solutionLink: "",
    },
    {
      description: "Find the factorial of a number",
      ExtraDetails: "Uses recursion or iteration",
      solutionLink: "",
    },
    {
      description: "Reverse a string",
      ExtraDetails: "Reverses the given input string",
      solutionLink: "",
    },
    {
      description: "Check if a string is a palindrome",
      ExtraDetails: "Reads the same forward and backward",
      solutionLink: "",
    },
    {
      description: "Find the Fibonacci series up to N",
      ExtraDetails: "Prints Fibonacci sequence up to N terms",
      solutionLink: "",
    },
    {
      description: "Find the GCD of two numbers",
      ExtraDetails: "Greatest common divisor using Euclidean algorithm",
      solutionLink: "",
    },
    {
      description: "Find the LCM of two numbers",
      ExtraDetails: "Least common multiple using formula",
      solutionLink: "",
    },
    {
      description: "Check if a number is an Armstrong number",
      ExtraDetails: "Sum of cubes of digits equals the number",
      solutionLink: "",
    },
    {
      description: "Check if a number is even or odd",
      ExtraDetails: "Uses modulus operator (%)",
      solutionLink: "",
    },
    {
      description: "Swap two numbers without using a third variable",
      ExtraDetails: "Uses arithmetic operations",
      solutionLink: "",
    },
    {
      description: "Count the number of vowels in a string",
      ExtraDetails: "Checks for a, e, i, o, u",
      solutionLink: "",
    },
    {
      description: "Find the largest element in an array",
      ExtraDetails: "Iterates through array elements",
      solutionLink: "",
    },
    {
      description: "Sort an array using bubble sort",
      ExtraDetails: "Swaps adjacent elements iteratively",
      solutionLink: "",
    },
    {
      description: "Find the second largest number in an array",
      ExtraDetails: "Finds the second highest value",
      solutionLink: "",
    },
    {
      description: "Check if a number is a perfect number",
      ExtraDetails: "Sum of divisors (excluding the number) equals the number",
      solutionLink: "",
    },
    {
      description: "Find the sum of digits of a number",
      ExtraDetails: "Adds all digits of the number",
      solutionLink: "",
    },
    {
      description: "Reverse an integer",
      ExtraDetails: "Reverses the digits of an integer",
      solutionLink: "",
    },
    {
      description: "Generate Pascal’s Triangle",
      ExtraDetails: "Uses binomial coefficient formula",
      solutionLink: "",
    },
    {
      description: "Check if two strings are anagrams",
      ExtraDetails: "Same characters in different order",
      solutionLink: "",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-3 md:p-6">
      <h2 className="text-3xl md:text-4xl pb-5 font-semibold text-left">
        Logical Programs List
      </h2>
      <Table className="border border-muted rounded-lg overflow-hidden">
        <TableCaption className="text-muted-foreground">
          A list of logical programs.
        </TableCaption>
        <TableHeader className="bg-gray-100 dark:bg-[#161b22]">
          <TableRow>
            <TableHead className="w-[50px] text-left text-base md:text-lg">
              #
            </TableHead>
            <TableHead className="text-left font-semibold text-base md:text-lg">
              Logical Program Description
            </TableHead>
            <TableHead className="hidden sm:table-cell text-left font-semibold text-base md:text-lg">
              Extra Info
            </TableHead>
            <TableHead className="text-right font-semibold text-base md:text-lg">
              Solution
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allLogicalProgramList.map((el, i) => (
            <TableRow
              key={i}
              className="hover:bg-gray-200 dark:hover:bg-[#21262d]"
            >
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell className="text-sm md:text-base">
                {el.description}
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                {el.ExtraDetails}
              </TableCell>
              <TableCell className="text-right">
                <Link href={el.solutionLink} passHref>
                  <Button
                    variant="ghost"
                    className="p-2 sm:p-3 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <ArrowRight size={20} className="block sm:hidden" />
                    <span className="hidden sm:flex items-center gap-1">
                      View <ArrowRight size={16} />
                    </span>
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
