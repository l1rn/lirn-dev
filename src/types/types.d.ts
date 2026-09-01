
export type Theme = ThemeContextType["theme"];

export type ThemeContextType = {
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
    toggleTheme?: () => void;
}