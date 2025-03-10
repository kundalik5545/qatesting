import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";

const CoursesPage = () => {
  const allCourses = [
    {
      title: "Automation testing with Selenium in C# .NET (.NET 8 and C# 12)",
      author: "Execute Automation",
      link: "https://www.youtube.com/watch?v=ANHMNIUPNSY&list=PL6tu16kXT9Pr50Bu96uf9z4rNxMTVTIxm",
      description: "Automation testing with selenium and c#",
      imagePath: "/Images/blogs/b1.jpg",
    },
    {
      title: "Learn TypeScript with Hitesh Chaudhary – Full Tutorial",
      author: "freeCodeCamp.org",
      link: "https://www.youtube.com/watch?v=30LWjhZzg50",
      description: "Automation testing with selenium and c#",
      imagePath: "/images/blogs/b3.jpg",
    },
    {
      title: "Automation testing with Selenium by Koushik",
      author: "Let Code",
      link: "https://www.youtube.com/@letcode",
      description: "Automation testing with selenium and c#",
      imagePath: "/Images/blogs/b3.jpg",
    },
    {
      title: "Automation testing with Selenium in C# .NET (.NET 8 and C# 12)",
      author: "Execute Automation",
      link: "https://www.youtube.com/watch?v=ANHMNIUPNSY&list=PL6tu16kXT9Pr50Bu96uf9z4rNxMTVTIxm",
      description: "Automation testing with selenium and c#",
      imagePath: "/Images/blogs/b2.jpg",
    },
  ];
  return (
    <div className="">
      <h2 className="text-3xl pl-3 md:pl-0">All Free Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-0 gap-10 md:gap-20 pt-8 pl-12 md:pl-0">
        {allCourses?.map((el, i) => {
          return (
            <Card
              key={i}
              className=" transition-transform duration-300 ease-in-out transform hover:scale-105 w-[300px]"
            >
              <CardContent className="flex flex-col items-center justify-between p-1 shadow-lg dark:shadow-md dark:shadow-gray-800  space-y-0">
                <Image
                  src={`${el.imagePath}`}
                  width={300}
                  height={300}
                  alt={el.title}
                />
                <p className="px-2 text-base font-normal pt-2 pb-2">
                  {el.title}
                </p>
                <div className="flex items-center">
                  <Link
                    href={el.link}
                    passHref
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Button
                      variant="destructive"
                      className=" text-white font-semibold hover:bg-red-300"
                    >
                      <CirclePlay color="white" /> Watch Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesPage;
