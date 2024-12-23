import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Qa Testing",
  description: "Practice Automation Testing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${inter.className}`}>
        {/* header/ Navbar */}
        <Header />

        <main className="min-h-screen">{children}</main>
        <Toaster richColors />

        {/* footer */}
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
