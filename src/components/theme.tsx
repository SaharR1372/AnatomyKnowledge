"use client";

import { useEffect, useState } from "react";

// Applies the saved theme before paint to avoid a flash of the wrong theme.
// Injected as an inline script in the root layout <head>.
export const themeInitScript = `
(function() {
  try {
    var t = localStorage.getItem('theme') || 'system';
    var dark = t === 'dark' || (t === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`;

type Theme = "light" | "dark" | "system";

function apply(theme: Theme) {
  const dark =
    theme === "dark" ||
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(saved);
  }, []);

  function cycle() {
    const next: Theme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    apply(next);
  }

  const label = theme === "light" ? "☀️ Light" : theme === "dark" ? "🌙 Dark" : "💻 System";
  return (
    <button
      onClick={cycle}
      className="rounded-md border border-border px-2.5 py-1.5 text-sm hover:bg-surface-2"
      aria-label={`Theme: ${theme}. Click to change.`}
      title="Change theme"
    >
      {label}
    </button>
  );
}
