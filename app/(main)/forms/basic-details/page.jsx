"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { basicDetailsTC } from "@/data/formsTestCases";
import React, { useState } from "react";

const BasicDetailsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    pincode: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault;
    console.log(formData);
  };
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <h2 className="gradient-subTitle text-3xl">Basic Details Form</h2>
        {/* Main Section */}
        <section className="max-w-5xl border p-4 shadow-md rounded-md my-3">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group flex items-center space-y-2">
              <Label className="w-1/3" htmlFor="firstName">
                First Name:
              </Label>
              <Input
                className="w-2/3"
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group flex items-center space-y-2">
              <Label className="w-1/3" htmlFor="lastName">
                Last Name:
              </Label>
              <Input
                className="w-2/3"
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group flex items-center space-y-2">
              <Label className="w-1/3" htmlFor="email">
                Email:
              </Label>
              <Input
                className="w-2/3"
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group flex items-center space-y-2">
              <Label className="w-1/3" htmlFor="phone">
                Phone:
              </Label>
              <Input
                className="w-2/3"
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group flex items-center space-y-2">
              <Label className="w-1/3" htmlFor="dob">
                Date of Birth:
              </Label>
              <Input
                className="w-2/3"
                type="date"
                id="dob"
                name="dob"
                required
                value={formData.dob}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group flex items-center space-y-2">
              <Label className="w-1/3" htmlFor="address">
                Address:
              </Label>
              <Input
                className="w-2/3"
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group flex items-center space-y-2">
              <Label className="w-1/3" htmlFor="pincode">
                Pincode:
              </Label>
              <Input
                className="w-2/3"
                type="text"
                id="pincode"
                name="pincode"
                required
                value={formData.pincode}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group flex items-center space-y-2">
              <Label className="w-1/3" htmlFor="bloodGroup">
                Blood Group:
              </Label>
              <Select
                id="bloodGroup"
                name="bloodGroup"
                required
                className="w-2/3"
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Blood Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="form-group flex items-center space-y-2">
              <Label htmlFor="Gender" className="w-1/3">
                Gender:
              </Label>
              <Select id="Gender" name="Gender" required className="w-2/3">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="form-group flex items-center space-y-2">
              <Label htmlFor="country" className="w-1/3">
                Country:
              </Label>
              <Select id="country" name="country" required className="w-2/3">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USA">USA</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
                  <SelectItem value="Australia">Australia</SelectItem>
                  <SelectItem value="Germany">Germany</SelectItem>
                  <SelectItem value="France">France</SelectItem>
                  <SelectItem value="Japan">Japan</SelectItem>
                  <SelectItem value="China">China</SelectItem>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="Brazil">Brazil</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="form-group flex items-center space-y-2">
              <Label htmlFor="image" className="w-1/3">
                Upload Image:
              </Label>
              <Input
                className="w-2/3"
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div className="form-group flex items-center justify-around my-2">
              <Label htmlFor="interest" className="w-1/3">
                Interest:
              </Label>
              <Input
                type="text"
                id="interest"
                name="interest"
                required
                className="w-2/3"
              />
            </div>
            <Button type="submit" className="my-2">
              Submit
            </Button>
            <Button type="reset" className="my-2 mx-2">
              Reset
            </Button>
          </form>
        </section>
        <hr />

        {/* Test Cases Section */}
        <section className="max-w-3xl border p-4 shadow-md rounded-md my-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Test case Id</TableHead>
                <TableHead>Test Case Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {basicDetailsTC.map((ele, index) => (
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

export default BasicDetailsPage;
