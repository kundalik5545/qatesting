"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure correct theme is loaded after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="h-5 w-5 text-gray-900 dark:text-gray-300 transition-transform duration-300 rotate-0 scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
