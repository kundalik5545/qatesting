import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Script from "next/script";
import { ThemeProvider } from "@/components/lib/theme-provider";
import Footer from "@/components/lib/Footer";
import { basicDetails } from "@/data/BasicSetting";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: `${basicDetails.websiteName}: Practice Automation Testing with Selenium`,
    template: `%s`,
  },
  description: basicDetails.websiteDescription,
  keywords: [
    "QA Playground",
    "automation testing",
    "Selenium testing",
    "Selenium WebDriver",
    "test automation",
    "Selenium tutorials",
    "QA automation",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    site_name: basicDetails.websiteName,
    title: `${basicDetails.websiteName}: Practice Automation Testing with Selenium`,
    description: basicDetails.websiteDescription,
    url: basicDetails.websiteURL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${basicDetails.websiteName} - Selenium Automation Testing Playground`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@qaplayground",
    title: `${basicDetails.websiteName}: Practice Automation Testing with Selenium`,
    description: basicDetails.websiteDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="oXKfb8bmh7yK4KhJexxVVMCeZgN8g1gTDHUIWbbR7SU"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-9803190596877704"
        ></meta>

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
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-BXX24P81G3', { page_path: window.location.pathname });
          `}
        </Script>

        {/* Buy Me Coffee */}
        <script
          type="text/javascript"
          src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
          data-name="bmc-button"
          data-slug="randomcoders"
          data-color="#FFDD00"
          data-emoji=""
          data-font="Cookie"
          data-text="Buy me a coffee"
          data-outline-color="#000000"
          data-font-color="#000000"
          data-coffee-color="#ffffff"
        ></script>
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
          <main
            className="container mx-auto py-3 max-w-7xl min-h-screen"
            role="main"
          >
            {children}
          </main>

          {/* Toaster Notifications */}
          <Toaster richColors />

          {/* Footer */}
          <footer className="bg-[#F3F4F6] dark:bg-[#1F2227] p-1 pt-8">
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
