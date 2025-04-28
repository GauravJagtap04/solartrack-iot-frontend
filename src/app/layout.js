"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import { useThemeStore } from "@/store/themeStore";
import { useEffect } from "react";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const { theme } = useThemeStore();

  // Apply theme to html element
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <html lang="en" className="min-w-80">
      <body
        className={`${poppins.className} antialiased m-0 p-0 box-border bg-background text-primary dark:text-background`}
      >
        <div className="flex">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
