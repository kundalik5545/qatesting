import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CirclePlay, User } from "lucide-react";

const CoursesPage = () => {
  const allCourses = [
    {
      title: "Automation testing with Selenium in C# .NET (.NET 8 and C# 12)",
      author: "Execute Automation",
      link: "https://www.youtube.com/watch?v=ANHMNIUPNSY&list=PL6tu16kXT9Pr50Bu96uf9z4rNxMTVTIxm",
      description: "Automation testing with selenium and c#",
      imagePath:
        "https://ik.imagekit.io/randomcoder/QAPlayground/default-image.jpg?updatedAt=1759725430393",
    },
    {
      title: "Learn TypeScript with Hitesh Chaudhary – Full Tutorial",
      author: "freeCodeCamp.org",
      link: "https://www.youtube.com/watch?v=30LWjhZzg50",
      description: "Complete TypeScript tutorial for beginners to advanced",
      imagePath:
        "https://ik.imagekit.io/randomcoder/QAPlayground/default-image.jpg?updatedAt=1759725430393",
    },
    {
      title: "Automation testing with Selenium by Koushik",
      author: "Let Code",
      link: "https://www.youtube.com/@letcode",
      description: "Comprehensive Selenium testing course",
      imagePath:
        "https://ik.imagekit.io/randomcoder/QAPlayground/default-image.jpg?updatedAt=1759725430393",
    },
    {
      title: "Automation testing with Selenium in C# .NET (.NET 8 and C# 12)",
      author: "Execute Automation",
      link: "https://www.youtube.com/watch?v=ANHMNIUPNSY&list=PL6tu16kXT9Pr50Bu96uf9z4rNxMTVTIxm",
      description: "Advanced Selenium automation techniques",
      imagePath:
        "https://ik.imagekit.io/randomcoder/QAPlayground/default-image.jpg?updatedAt=1759725430393",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        All Free Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allCourses?.map((course, index) => (
          <Card
            key={index}
            className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={course.imagePath}
                width={400}
                height={200}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
            </div>

            <CardContent className="p-5">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                {course.title}
              </h5>

              <div className="flex items-center mb-3 text-sm text-gray-600 dark:text-gray-400">
                <User className="w-4 h-4 mr-2" />
                <span>{course.author}</span>
              </div>

              <p className="mb-4 text-sm text-gray-700 dark:text-gray-400 line-clamp-2">
                {course.description}
              </p>

              <Link
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  <CirclePlay className="w-4 h-4 mr-2" />
                  Watch Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
