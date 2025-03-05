"use client";

import { fileDownloadTC, fileUploadTC } from "@/data/elementsTestCases";
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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { pagesTitle } from "@/data/BasicSetting";

const UploadDownloadPage = () => {
  const [fileName, setFileName] = useState();
  const [Class, setClass] = useState("hide");

  return (
    <div>
      <div className="Page-Container max-w-5xl mx-auto">
        <h2 className="Page-Heading gradient-subTitle text-3xl">
          {pagesTitle.uploadDownloadPage}
        </h2>
        <hr />

        {/* Main Section */}
        <section className="file-Content flex flex-col space-y-3">
          <div className="Download-File mb-3 mt-3">
            <label className="form-label">Click to Download a file</label>
            <Link
              href="/icons/android-chrome-512x512.png"
              download
              className="p-2"
            >
              <Button>
                Download
                <FileDown />
              </Button>
            </Link>
          </div>
          <div className="File-Upload-Enable flex flex-col space-y-3">
            <div className="flex  items-center justify-start space-x-3">
              <Label htmlFor="file-Upload" className="w-[1/3]">
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
            <span className={`${Class} text-red-600`}>
              File Path: C:\fakepath\{fileName}
            </span>
          </div>
          <div className="File-upload-disable mt-3 mb-5">
            <label htmlfor="formFileDisabled" className="form-label">
              Disabled file input example
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileDisabled"
              disabled
            />
          </div>
        </section>
        <hr />

        {/* test case section */}
        <h2 className="Page-Heading gradient-subTitle text-3xl pt-5">
          Manual test cases for file upload and download.
        </h2>
        <section className="max-w-3xl border p-4 shadow-md rounded-md my-4">
          <h3>File Upload Test Cases</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Test case Id</TableHead>
                <TableHead>Test Case Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fileUploadTC.map((ele, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{ele.TestId}</TableCell>
                  <TableCell>{ele.TestCaseName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
        <section className="max-w-3xl border p-4 shadow-md rounded-md my-4">
          <h3>File Download Test Cases</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Test case Id</TableHead>
                <TableHead>Test Case Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fileDownloadTC.map((ele, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{ele.TestId}</TableCell>
                  <TableCell>{ele.TestCaseName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </div>
    </div>
  );
};
export default UploadDownloadPage;
