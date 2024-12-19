# Welcome to Qa Testing

## Create New Project

```
npx create-next-app@latest
```

## Now edit layout.js file to setup font and header, main section, footer section

```js
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Website Title",
  description: "Website description.",
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
            <p>Made with 💖 by coder Jk..</p>
            <p>&copy;2024 All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
```

### Install below packages

```
npx shadcn@latest add input label button select card badge calendar avatar checkbox drawer dropdown-menu popover progress switch table tooltip sonner

```

### Some questions

1. You need to create a components.json file to add components. Proceed? => yes
2. √ Which style would you like to use? » New York
3. √ Which color would you like to use as the base color? » Slate
4. √ Would you like to use CSS variables for theming? ... no / yes => Yes

### For How would you like to proceed?

```
--legacy-peer-deps
```
