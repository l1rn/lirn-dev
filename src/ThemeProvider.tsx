import { createContext, useContext, useState, type ReactNode } from "react";
import { useEffect } from "react";

type ThemeContextType = {
    dark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children } : { children: ReactNode}){
    const [dark, setDark] = useState(false);
    const toggleTheme = () => setDark((p) => !p)

    useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    }, [dark]);
    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            <div className={dark ? "dark": ""}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
