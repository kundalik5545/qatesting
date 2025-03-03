import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Script from "next/script";
import { ThemeProvider } from "@/components/lib/theme-provider";
import Footer from "@/components/lib/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: `${process.env.NEXT_PUBLIC_WEBSITE_NAME} - Practice automation testing`,
    template: `%s | ${process.env.NEXT_PUBLIC_WEBSITE_NAME}`,
  },
  description: `${process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION}`,
  keywords: [
    "qa playground",
    "Practice automation testing",
    "website to practice automtion testing",
    "QA Testing Practice",
    "Automation Testing",
    "Selenium",
    "demoqa",
    "automation testing practice websites",
    "automation testing practice websites free",
    "dummy sites for testing",
    "best automation testing practice websites",
    "selenium automation practice websites",
    "dummy sites for manual testing",
    "manual testing practice websites free",
    "test automation practice blogspot",
    "automation demo site for selenium",
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
  alternates: {
    canonical: "https://qatesting.vercel.app",
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
        {/* Google Ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9803190596877704"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BXX24P81G3"
          strategy="lazyOnload"
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header/Navbar */}
          <Header />

          {/* Main Content */}
          <main className="container mx-auto py-3 max-w-7xl min-h-screen">
            {children}
          </main>

          {/* Toaster Notifications */}
          <Toaster richColors />

          {/* Footer */}
          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
