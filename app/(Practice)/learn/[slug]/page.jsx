import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import LogicalPrograms from "../_components/LogicalPrograms";
import AutomationTestCasesPage from "../_components/AutomationTestCases";

const LearnPage = async ({ params }) => {
  const { slug } = params;

  const allComponents = {
    "logical-programs-list": LogicalPrograms,
    "automation-test-cases": AutomationTestCasesPage,
  };

  const DynamicComponent = allComponents[slug] || null;

  return (
    <div>
      {DynamicComponent ? (
        <DynamicComponent />
      ) : (
        <>
          <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
            <h1 className="text-6xl font-bold gradient-title mb-4">204</h1>
            <h2 className="text-2xl font-semibold mb-4">
              Page Under Construction
            </h2>
            <p className="text-gray-600 mb-8">
              Oops! The page you&apos;re looking for is under construction.
              Please try again later.
            </p>
            <Link href="/" passHref>
              <Button>Return Home</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default LearnPage;
