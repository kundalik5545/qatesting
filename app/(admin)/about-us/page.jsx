import React from "react";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - QA Testing Playground</title>
        <meta
          name="description"
          content="QA Testing Playground is a hub for automation testers to practice and enhance their skills. Join our community to explore, contribute, and collaborate on automation testing projects."
        />
      </Head>
      <div className="min-h-screen container mx-auto max-w-5xl text-foreground bg-background pt-5">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <blockquote className="italic">
          <p className="text-lg mb-4">
            <strong>QA Testing Playground</strong> - 🛠️ Practice, learn, and
            excel in automation testing!
          </p>
          <p className="mb-4">
            A hub for automation testers seeking hands-on practice, project
            ideas, and collaboration opportunities. Our platform categorizes
            projects across various domains, making it easy to find the right
            challenge for your skill level. Whether you're a beginner or an
            experienced tester, you can explore, contribute, and collaborate on
            automation testing projects.
          </p>
          <p className="mb-4">
            Join our <strong>community guide</strong>, where contributors can
            discover projects, connect with like-minded testers, and enhance
            their automation skills. Stay updated with best practices,
            tutorials, and hands-on projects to sharpen your expertise.
          </p>
          <p>By -</p>
          <p>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</p>
        </blockquote>
      </div>
    </>
  );
};

export default AboutPage;
