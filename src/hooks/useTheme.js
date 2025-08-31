import { useState, useEffect } from "react";
import { themeConfig } from "../theme/themeConfig";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("constructTech-theme");
    return savedTheme || "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState(theme);

  useEffect(() => {
    // Determine the actual theme to use (handles system preference)
    const determineTheme = () => {
      if (theme === "system") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return theme;
    };

    const currentTheme = determineTheme();
    setResolvedTheme(currentTheme);

    // Apply CSS variables
    const cssVariables = themeConfig.generateCSSVariables(currentTheme);
    Object.entries(cssVariables).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });

    // Set data attribute for CSS selectors
    document.documentElement.setAttribute("data-theme", currentTheme);

    // Save to localStorage
    localStorage.setItem("constructTech-theme", theme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      if (theme === "system") {
        const newTheme = e.matches ? "dark" : "light";
        setResolvedTheme(newTheme);
        const cssVariables = themeConfig.generateCSSVariables(newTheme);
        Object.entries(cssVariables).forEach(([key, value]) => {
          document.documentElement.style.setProperty(key, value);
        });
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "system";
      return "light";
    });
  };

  const setThemeDirectly = (newTheme) => {
    if (["light", "dark", "system"].includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  return { 
    theme, 
    resolvedTheme, 
    toggleTheme, 
    setTheme: setThemeDirectly 
  };
};