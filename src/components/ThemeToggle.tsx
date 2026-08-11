"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="focus-visible:bg-primary bg-primary enable-transition-on-change relative mr-5 ml-5 inline-flex h-8 w-18 shrink-0 cursor-pointer items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:bg-neutral-700"
    >
      {/* faint icons fixed at each end of the track, so you can always see where you're headed */}
      <Sun
        className={`absolute left-1.5 h-5 w-5 text-white opacity-80 transition-opacity duration-300 dark:opacity-30`}
      />
      <Moon
        className={`absolute right-1.5 h-5 w-5 text-white opacity-30 transition-opacity duration-300 dark:opacity-80`}
      />

      {/* sliding thumb — icon inside rotates + crossfades between sun and moon */}
      <span
        className={`enable-transition-on-change relative inline-flex h-6 w-6 translate-x-1 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out dark:translate-x-11`}
      >
        <Sun
          className={`enable-transition-on-change text-primary absolute h-4 w-4 scale-100 rotate-0 opacity-100 transition-all duration-300 dark:scale-0 dark:rotate-90 dark:opacity-0`}
        />
        <Moon
          className={`enable-transition-on-change absolute h-4 w-4 scale-0 -rotate-90 text-neutral-700 opacity-0 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:opacity-100`}
        />
      </span>
    </button>
  );
}
