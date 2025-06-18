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
      duration: "Jan 2025 - Present",
    },
    {
      role: "Test Analyst",
      company: "ITM",
      duration: "Aug 2022 - Jan 2025",
    },
    {
      role: "Junior Analyst",
      company: "Mindtree",
      duration: "Jun 2019 - Aug 2022",
    },
  ];

  const mySkills = [
    {
      lang: "C#, Java, JavaScript, SQL",
      API_Database: " RestAssured ,RestSharp, Postman, SQL Server, PostGresSQL",
      automation: "Selenium, WebDriver, NUnit, TestNG, Playwright ",
      framework:
        "POM, Builder Pattern, Data-Driven, Testng(JSON, NUnit), SOLID Principles",
      CI_CD: " Git, Azure DevOps, Jenkins, Maven ",
      test_Management: "JIRA, Azure Test Plans",
      devSkills:
        "MERN Stack, Express.js, Node.js, React.js, Next.js, Tailwind CSS, JavaScript, TypeScript, HTML, CSS",
    },
  ];

  const keyAchivement = [
    "Reduced manual testing effort by 60% through automation.",
    "Enhanced test coverage, reducing production defects by 30%.",
    "Implemented SOLID principles like SRP, LOC, DRY for better framework maintainability.",
  ];

  return (
    <div className="bg-background text-foreground py-12 px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Profile Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Kundalik R. Jadhav</h1>
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

        {/* Summary*/}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Summary</h2>
          <hr />
          <p className="mt-4 text-base text-muted-foreground">
            I am a highly skilled and motivated Test Analyst with 5.5+ years of
            experience and a strong background in automation testing & API
            testing with CI/CD pipelines. Proficient in Selenium WebDriver (C# &
            Java) and framework development.
          </p>

          <p className="mt-4 text-base text-muted-foreground">
            I have a proven track record of delivering high-quality UK Pension
            software solutions and ensuring the reliability and performance of
            applications. My expertise includes various testing methodologies,
            tools, and frameworks, making me a valuable asset to any development
            team.
          </p>
        </div>

        {/* My SKills*/}
        <div className="mt-8 pb-3">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <hr />
          <div className="mt-4 grid grid-cols-1 gap-6 text-base text-muted-foreground">
            {mySkills.map((skill, index) => (
              <div key={index} className="border-primary pl-4 space-y-3">
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <span className="font-semibold text-primary min-w-[150px]">
                      Automation
                    </span>
                    <span className="ml-2">: {skill.automation}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-primary min-w-[150px]">
                      Language
                    </span>
                    <span className="ml-2">: {skill.lang}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-primary min-w-[150px]">
                      Framework
                    </span>
                    <span className="ml-2">: {skill.framework}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-primary min-w-[150px]">
                      API & Database
                    </span>
                    <span className="ml-2">: {skill.API_Database}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-primary min-w-[150px]">
                      CI/CD Pipelines
                    </span>
                    <span className="ml-2">: {skill.CI_CD}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-primary min-w-[150px]">
                      Test Management
                    </span>
                    <span className="ml-2">: {skill.test_Management}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-primary min-w-[150px]">
                      Dev Skills
                    </span>
                    <span className="ml-2">: {skill.devSkills}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          <hr />
          <ul className="mt-4 space-y-4">
            {myExp.map((job, index) => (
              <li key={index} className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold">
                  {job.role} - {job.company}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {" "}
                  <CalendarDays />
                  {job.duration}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Accomplishments Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Key Accomplishments</h2>
          <hr />
          <ul className="mt-4 space-y-4">
            {keyAchivement.map((key, index) => (
              <li key={index} className="border-l-4 border-primary pl-4">
                <p className="text-sm text-muted-foreground">{key}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">My Projects</h2>
          <hr />
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
