import { useState } from "react";
import { getActiveTheme, saveTheme, type Theme } from "../theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getActiveTheme());
  const nextTheme = theme === "dark" ? "light" : "dark";

  function toggleTheme() {
    saveTheme(nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <span className="theme-icon" aria-hidden="true" />
      <span className="theme-label">{nextTheme}</span>
    </button>
  );
}
