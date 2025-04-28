"use client";

import React, { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useThemeStore } from "../store/themeStore";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    // Check for window to avoid SSR issues
    if (typeof window !== "undefined") {
      const rootElement = document.documentElement;
      if (theme === "dark") {
        rootElement.classList.add("dark");
      } else {
        rootElement.classList.remove("dark");
      }
    }
  }, [theme]);

  useEffect(() => {
    // Check for window to avoid SSR issues
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleThemeChange = (e) => {
        const newTheme = e.matches ? "dark" : "light";
        useThemeStore.getState().setTheme(newTheme);
      };

      mediaQuery.addEventListener("change", handleThemeChange);

      return () => mediaQuery.removeEventListener("change", handleThemeChange);
    }
  }, []);

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={`w-13 h-7 border border-input p-0.5 bg-background dark:bg-background/70 rounded-full relative flex items-center cursor-pointer hover:border-primary/50 transition-all duration-200`}
            onClick={toggleTheme}
          >
            <div
              className={`w-6 h-6 bg-primary rounded-full absolute flex items-center justify-center transition-transform duration-300 ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {theme === "dark" ? (
                <Moon className="h-4 w-4 text-primary-foreground" />
              ) : (
                <Sun className="h-3.5 w-3.5 text-background" />
              )}
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent sideOffset={5} className="z-50">
          <p>{theme === "dark" ? "Light mode" : "Dark mode"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;
