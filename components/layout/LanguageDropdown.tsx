"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageSwitcher, locales } from "@/components/layout/LanguageSwitcher";
import { animations } from "@/lib/animations";
import { useLocale } from "@/lib/locale-context";

/** Десктоп: кнопка-флажок текущего языка, по клику — список языков. */
export function LanguageDropdown() {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = locales.find((l) => l.code === locale) ?? locales[1];

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label="Language"
        aria-haspopup="listbox"
        aria-expanded={open}
        title={current.label}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-pill border border-foreground/25 transition-colors hover:bg-foreground/5"
      >
        <Image
          src={current.flagSrc}
          alt=""
          width={22}
          height={14}
          className="h-3.5 w-5 rounded-[2px] object-cover"
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{
              duration: animations.menuPanel.duration,
              ease: animations.menuPanel.ease,
            }}
            className="absolute right-0 top-[calc(100%+0.75rem)] z-50 rounded-2xl border border-border bg-menu/95 p-4 shadow-soft backdrop-blur-md"
          >
            <LanguageSwitcher
              className="min-w-[6.5rem]"
              onSelect={() => setOpen(false)}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
