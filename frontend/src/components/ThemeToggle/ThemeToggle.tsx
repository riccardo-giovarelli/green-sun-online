"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <div className="w-16 h-8" />; // Spazio vuoto

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-xs font-semibold opacity-70 hover:opacity-100 hover:text-green-600 transition-all flex items-center gap-1"
      aria-label="Cambia tema"
    >
      {theme === "dark" ? "☀️ LIGHT" : "🌙 DARK"}
    </button>
  );
}
