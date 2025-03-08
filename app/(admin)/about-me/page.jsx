import Link from "next/link";
import { Mail, Linkedin, Github, Youtube, Twitter, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Me",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "http://qaplayground.com/about-me",
  },
};

const ProfilePage = () => {
  const socialLinks = [
    { href: "mailto:randomcoders1@gmail.com", icon: <Mail />, label: "Email" },
    {
      href: "https://www.linkedin.com/in/randomcoders",
      icon: <Linkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/kundalik5545",
      icon: <Github />,
      label: "GitHub",
    },
    {
      href: "https://www.youtube.com/@qaplayground",
      icon: <Youtube />,
      label: "YouTube",
    },
    {
      href: "https://twitter.com/randomcoders",
      icon: <Twitter />,
      label: "Twitter",
    },
    {
      href: "https://random-coders.vercel.app/",
      icon: <Globe />,
      label: "Website",
    },
  ];

  const myExp = [
    {
      role: "Automation Tester",
      company: "Lumera",
      duration: "Jan 2025 - Dec 2025",
    },
    {
      role: "Quality Analyst Engineer",
      company: "ITM",
      duration: "Aug 2022 - Jan 2025",
    },
    {
      role: "Junior Analyst",
      company: "Mindtree",
      duration: "Jun 2019 - Aug 2022",
    },
  ];
  return (
    <div className="bg-background text-foreground py-12 px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Profile Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Random Coders</h1>
          <div className="flex justify-center gap-4 mt-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center transition-transform duration-300 transform hover:scale-110 hover:text-primary"
                title={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <ul className="mt-4 space-y-4">
            {myExp.map((job, index) => (
              <li key={index} className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">
                  {job.role} - {job.company}
                </h3>
                <p className="text-sm text-muted-foreground">{job.duration}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Our Products</h2>
          {/* product-1 */}
          <Card className="product-1 mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold">QA PlayGround</h3>
              <p className="text-sm text-muted-foreground mt-2">
                A comprehensive and visually appealing one stop solution for
                learning automation testing. Having built in support for
                different web elements and also ready made UI componets from
                user registration to all kinds of web features.
              </p>
              <Button className="mt-4">View Product</Button>
            </CardContent>
          </Card>

          {/* product-2 */}
          <Card className="product-2 mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold">Random Coders Blog</h3>
              <p className="text-sm text-muted-foreground mt-2">
                A comprehensive and visually appealing one stop solution for
                learning automation testing. Having built in support for
                different web elements and also ready made UI componets from
                user registration to all kinds of web features.
              </p>
              <Button className="mt-4">View Product</Button>
            </CardContent>
          </Card>

          {/* product-3 */}
          <Card className="product-3 mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold">Expense Tracker</h3>
              <p className="text-sm text-muted-foreground mt-2">
                A comprehensive and visually appealing one stop solution for
                learning automation testing. Having built in support for
                different web elements and also ready made UI componets from
                user registration to all kinds of web features.
              </p>
              <Link
                href="https://balance-sheet-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-4">View Product</Button>
              </Link>
            </CardContent>
          </Card>

          {/* product-4 */}
          <Card className="product-4 mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold">Weather App</h3>
              <p className="text-sm text-muted-foreground mt-2">
                A comprehensive and visually appealing one stop solution for
                learning automation testing. Having built in support for
                different web elements and also ready made UI componets from
                user registration to all kinds of web features.
              </p>
              <Button className="mt-4">View Product</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
