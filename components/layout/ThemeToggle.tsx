"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

/** Переключатель светлой/тёмной темы. По умолчанию — тёмная. */
export function ThemeToggle() {
  const { t } = useLocale();
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "light" ? "light" : "dark",
    );
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (next === "light") {
      document.documentElement.dataset.theme = "light";
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* приватный режим — тема просто не запомнится */
    }
  };

  const label = theme === "light" ? t("theme.toDark") : t("theme.toLight");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-pill border border-foreground/25 text-foreground transition-colors hover:bg-foreground/5"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
      ) : (
        <Sun className="h-4 w-4" strokeWidth={1.75} aria-hidden />
      )}
    </button>
  );
}
