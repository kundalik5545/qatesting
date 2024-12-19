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
            <p>Made with 💖 by Coder Jk..</p>
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

## Add custome css in globals.css

```css
@layer utilities {
  .gradient {
    @apply bg-gradient-to-br from-blue-600 to-purple-600;
  }

  .gradient-title {
    @apply gradient font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text;
  }
}

.hero-image-wrapper {
  perspective: 1000px;
}

.hero-image {
  /* transform: rotateX(20deg) scale(0.9) translateY(-50); */
  transform: rotateX(15deg) scale(1);
  transition: transform 0.5s ease-out;
  will-change: transform;
}

.hero-image.scrolled {
  transform: rotateX(0deg) scale(1) translateY(40px);
}
```

## Add page not found 404

Create a file inside app folder called exact not-found.jsx

```jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
```
