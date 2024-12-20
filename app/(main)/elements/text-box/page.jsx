"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { text_BoxTC } from "@/data/elementsTestCases";

import React, { useState } from "react";

const TextBoxPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="gradient-subTitle text-3xl">Text Box Page</h2>
      <section className="grid grid-cols-1 max-w-3xl border p-4 shadow-md rounded-md">
        <form onSubmit={handleForm}>
          <div className="flex items-center justify-between space-y-2">
            <Label className="w-1/3" htmlFor="firstName">
              First Name
            </Label>
            <Input
              className="w-2/3"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleOnChange}
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex items-center justify-between space-y-2">
            <Label className="w-1/3" htmlFor="lastName">
              Last Name
            </Label>
            <Input
              className="w-2/3"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleOnChange}
              placeholder="Enter your last name"
            />
          </div>
          <div className="flex items-center justify-between space-y-2">
            <Label className="w-1/3" htmlFor="email">
              Email Address
            </Label>
            <Input
              className="w-2/3"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleOnChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="flex items-center justify-between space-y-2">
            <Label className="w-1/3" htmlFor="address">
              Address
            </Label>
            <Input
              className="w-2/3"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleOnChange}
              placeholder="Enter your address"
            />
          </div>
          <div className="flex items-center justify-center pt-4 gap-4">
            <Button type="submit">Submit</Button>
            <Button
              type="button"
              onClick={() =>
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  address: "",
                })
              }
            >
              Reset
            </Button>
          </div>
        </form>
      </section>

      {/* result section  */}
      <section className="grid grid-cols-1 max-w-3xl border p-4 shadow-md rounded-md my-4">
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Address: {formData.address}</p>
      </section>

      {/* Test cases Table*/}
      <section className="max-w-3xl border p-4 shadow-md rounded-md my-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Test case Id</TableHead>
              <TableHead>Test Case Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {text_BoxTC.length === 0 ? (
              <TableRow>
                <TableCell className="col-span-2 text-center">
                  No data
                </TableCell>
              </TableRow>
            ) : (
              text_BoxTC.map((ele, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{ele.TestId}</TableCell>
                  <TableCell>{ele.TestCaseName}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </section>
      {/* Video link */}
    </div>
  );
};

export default TextBoxPage;
