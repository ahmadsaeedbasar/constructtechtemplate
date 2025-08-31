import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    if (theme === "light") return "☀️";
    if (theme === "dark") return "🌙";
    return "💻"; // System
  };

  const getThemeLabel = () => {
    if (theme === "light") return "Light theme";
    if (theme === "dark") return "Dark theme";
    return "System theme";
  };

  return (
    <button
      aria-label={getThemeLabel()}
      onClick={toggleTheme}
      className="icon-button icon-button--md"
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-text)",
      }}
    >
      {getThemeIcon()}
    </button>
  );
};

export default ThemeToggle;