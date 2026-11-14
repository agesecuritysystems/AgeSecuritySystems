import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";
export type Accent = "blue" | "purple" | "seagreen";

interface ThemeContextValue {
  theme: Theme;
  accent: Accent;
  setTheme: (t: Theme) => void;
  setAccent: (a: Accent) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  accent: "blue",
  setTheme: () => {},
  setAccent: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) ?? "light";
  });

  const [accent, setAccentState] = useState<Accent>(() => {
    return (localStorage.getItem("accent") as Accent) ?? "blue";
  });

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("theme", t);
  };

  const setAccent = (a: Accent) => {
    setAccentState(a);
    localStorage.setItem("accent", a);
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-accent", accent);
  }, [theme, accent]);

  return (
    <ThemeContext.Provider value={{ theme, accent, setTheme, setAccent, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
