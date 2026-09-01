import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "./types/types";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    const root = document.documentElement;
    if(theme === "dark"){
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}