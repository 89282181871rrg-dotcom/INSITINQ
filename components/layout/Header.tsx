"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Menu, X } from "lucide-react";
import { LanguageDropdown } from "@/components/layout/LanguageDropdown";
import { MenuPanel } from "@/components/layout/MenuPanel";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { useHeaderScrolled } from "@/lib/hooks/useHeaderScrolled";
import { mainNav } from "@/lib/navigation";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/cn";
import type { MessageKey } from "@/lib/i18n";

function Logo() {
  return (
    <Link href="/" className="inline-flex min-w-0 shrink items-center" aria-label="Insaitiq Systems">
      {/* Новый логотип (макет Figma «Insaitiq — Компактные версии»), на десктопе −20% (40 → 32px).
          Если руководство не согласует — вернуть /images/logo/wordmark.png (140×46). */}
      <Image
        src="/images/logo/insaitiq-dark.svg"
        alt="Insaitiq Systems"
        width={211}
        height={62}
        unoptimized
        className="theme-logo-dark h-7 w-auto max-w-[7.5rem] object-contain sm:h-9 sm:max-w-none lg:h-8"
        priority
      />
      <Image
        src="/images/logo/insaitiq-light.svg"
        alt="Insaitiq Systems"
        width={211}
        height={62}
        unoptimized
        className="theme-logo-light h-7 w-auto max-w-[7.5rem] object-contain sm:h-9 sm:max-w-none lg:h-8"
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const scrolled = useHeaderScrolled();
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        // lg:border-border — тонкая разделительная линия под шапкой на десктопе всегда
        "header sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-200 lg:border-border",
        scrolled && "header-scrolled",
      )}
    >
      <Container className="relative flex h-14 items-center justify-between gap-2 sm:h-16 sm:gap-4 lg:h-[4.5rem]">
        <Logo />

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-7"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            const active =
              item.href.startsWith("/#")
                ? pathname === "/" && item.href === "/#about"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-pixel text-xs uppercase tracking-wider transition-colors hover:text-foreground sm:text-[13px]",
                  active ? "text-primary" : "text-foreground/80",
                )}
                aria-current={active ? "page" : undefined}
              >
                {t(item.labelKey as MessageKey)}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <Link
            href="/contacts"
            className="inline-flex h-9 items-center justify-center rounded-pill bg-primary px-3 font-pixel text-[10px] uppercase tracking-wider text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-5 sm:text-xs"
          >
            {t("nav.discuss")}
          </Link>

          {/* Десктоп: Обсудить — флажок — тема. Меню не нужно: разделы уже во вкладках шапки */}
          <div className="hidden lg:block">
            <LanguageDropdown />
          </div>
          <ThemeToggle />

          {/* Мобилка/планшет: бургер открывает меню с разделами и языками */}
          <button
            type="button"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-pill border border-foreground/25 text-foreground transition-colors hover:bg-foreground/5 lg:hidden"
            aria-label={menuOpen ? t("nav.close") : t("nav.menu")}
            aria-expanded={menuOpen}
            aria-controls="site-menu-panel"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <X className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            )}
          </button>
        </div>

        <MenuPanel open={menuOpen} onClose={() => setMenuOpen(false)} />
      </Container>
    </header>
  );
}
