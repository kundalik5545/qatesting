import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QA Testing - Practice Automation Testing Playground",
  description:
    "Practice automation testing with our interactive website. Enhance your QA skills with real-world testing scenarios and challenges.",
  keywords: [
    "QA Automation Practice Website",
    "QA Testing Practice",
    "Automation Testing",
    "Selenium",
    "demoqa",
    "Practice automation testing",
    "Selenium Automation Testing",
  ],
  robots: "index, follow",
  openGraph: {
    title: "QA Testing Practice - Automation Testing Playground",
    description:
      "Practice automation testing with our interactive website. Enhance your QA skills with real-world testing scenarios and challenges.",
    url: "https://qatesting.vercel.app/",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
        alt: "QA Testing Playground Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QA Testing Practice - Automation Testing Playground",
    description:
      "Practice automation testing with our interactive website. Enhance your QA skills with real-world testing scenarios and challenges.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="oXKfb8bmh7yK4KhJexxVVMCeZgN8g1gTDHUIWbbR7SU"
        />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BXX24P81G3"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-BXX24P81G3');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Header/Navbar */}
        <Header />

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Toaster Notifications */}
        <Toaster richColors />

        {/* Footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p className="text-base lg:text-xl">Made with 💖 by Coder Jk..</p>
            <p className="text-base lg:text-xl">
              &copy;2024 All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
