"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Copy } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AlertPage = () => {
  const youtubeLink = "";

  return (
    <div className="pt-2">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl pb-4 font-semibold text-gray-900 dark:text-white text-start transition-all duration-300 ease-in-out">
        Alert
      </h2>
      {/* Main layout */}
      <div className="flex flex-col sm:flex-row w-full gap-8">
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

export default AlertPage;

const QAPlayGround = () => {
  const [promptText, setPromptText] = useState("");
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-sm sm:text-base font-medium">
          <span className="font-semibold text-blue-500">Simple Alert</span> -
          <p>just click on simple alert and verify the alert text</p>
        </p>

        <Button
          className="mt-2"
          id="simple-alert"
          onClick={() => alert("Welcome to QA PlayGround!")}
        >
          Simple Alert
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm sm:text-base font-medium">
          <span className="font-semibold text-blue-500">Confirm Alert</span> -
          <p>Confirm (ok) or dismiss (cancel) the alert and get Text.</p>
        </p>
        <Button
          onClick={() => {
            window.confirm("Do you know QA Playground!");
          }}
          className="mt-2"
          id="confirm-alert"
        >
          Confirm Alert
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm sm:text-base font-medium">
          <span className="font-semibold text-blue-500">Prompt Alert</span> -
          <p>Enter your name and accept it.</p>
        </p>
        <Button
          onClick={() => {
            const enteredText = window.prompt("Enter your name");
            setPromptText(enteredText);
          }}
          className="mt-2 mb-2"
          id="prompt-alert"
        >
          Prompt Alert
        </Button>
        {promptText?.length > 0 && (
          <p className="py-1 bg-blue-300 rounded p-2">
            Your name is - {promptText}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm sm:text-base font-medium">
          <span className="font-semibold text-blue-500">Toast Alert</span> -
          <p> Print the toast text.</p>
        </p>
        <Button
          onClick={() => {
            toast.success(`This is simple toast.`);
          }}
          className="mt-2 mb-2"
          id="toast-alert"
        >
          Toast Alert
        </Button>
        {promptText?.length > 0 && (
          <p className="py-1 bg-blue-300 rounded p-2">
            Your name is - {promptText}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm sm:text-base font-medium">
          <span className="font-semibold text-blue-500">Sweet Alert</span> -
          <p> This is modern alert.</p>
        </p>
        <Button className="mt-2 mb-2" id="toast-alert">
          <ModalAlert>Sweet Alert</ModalAlert>
        </Button>
        {promptText?.length > 0 && (
          <p className="py-1 bg-blue-300 rounded p-2">
            Your name is - {promptText}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm sm:text-base font-medium">
          <span className="font-semibold text-blue-500">Advance Ui Alert</span>{" "}
          -<p> verify share link and close button.</p>
        </p>

        <DialogCloseButton />

        {promptText?.length > 0 && (
          <p className="py-1 bg-blue-300 rounded p-2">
            Your name is - {promptText}
          </p>
        )}
      </div>
    </>
  );
};

const LearningInsight = () => {
  return (
    <>
      <ol className="font-light list-decimal pl-10 text-left space-y-1">
        <li>accept()</li>
        <li>dismiss()</li>
        <li>waits()</li>
        <li>sendKeys()</li>
        <li>switchTo()</li>
        <li>getText()</li>
      </ol>
    </>
  );
};

const ModalAlert = ({ children }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Modern Alert</AlertDialogTitle>
          <AlertDialogDescription>
            Modern Alert - Some people address me as sweet alert as well
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>You Are!</AlertDialogCancel>
          <AlertDialogAction>Sometime</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const DialogCloseButton = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="" className="mt-2">
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>Share this linke with friends.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://www.qaplayground.com/practice/alert"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
