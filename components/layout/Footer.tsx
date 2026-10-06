"use client";

import Link from "next/link";
import { ArrowRight, ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons/DesignIcons";
import {
  footerCompanyLinks,
  footerDemoLinks,
  footerLegalLinks,
} from "@/lib/navigation";
import { site } from "@/lib/content";
import { useLocale } from "@/lib/locale-context";
import { useNextPageTrigger } from "@/lib/hooks/useNextPageTrigger";
import type { MessageKey } from "@/lib/i18n";
import { cn } from "@/lib/cn";

function splitLabel(label: string): [string, string | null] {
  const parts = label.trim().split(/\s+/);
  if (parts.length < 2) return [label, null];
  return [parts[0], parts.slice(1).join(" ")];
}

export function Footer() {
  const { t } = useLocale();
  const pathname = usePathname() || "/";
  const { progress, nextHref, isLast } = useNextPageTrigger({ pathname });
  const nextLabel = isLast ? t("footer.backHome") : t("footer.nextPage");
  const [line1, line2] = splitLabel(nextLabel);
  const percent = isLast ? 100 : Math.round(progress * 100);
  const widthPct = isLast ? 100 : progress * 100;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkColumns = [
    { title: t("footer.company"), items: footerCompanyLinks },
    { title: t("footer.demo"), items: footerDemoLinks },
    { title: t("footer.legal"), items: footerLegalLinks },
  ];

  return (
    <footer className="relative mt-8 border-t border-border bg-footer py-10 sm:py-12">
      {/* Кнопка «Наверх»: на широких экранах — в правом верхнем углу подвала,
          на остальных — отдельной строкой над колонками */}
      <div className="2xl:absolute 2xl:right-3 2xl:top-8">
        <Container className="mb-8 flex justify-end 2xl:mb-0 2xl:w-auto 2xl:max-w-none 2xl:px-0">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-pill border border-foreground/[0.08] bg-foreground/5 px-4 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-foreground/10"
          >
            <ArrowUp className="h-4 w-4" strokeWidth={2} aria-hidden />
            {t("footer.toTop")}
          </button>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-12 lg:grid-cols-[repeat(3,minmax(0,1fr))_242px] lg:items-start lg:gap-16">
          {linkColumns.map((column, index) => (
            <div
              key={column.title}
              className={cn(index === 2 && "col-span-2 sm:col-span-1")}
            >
              <p className="mb-3 text-sm font-medium text-foreground">
                {column.title}
              </p>
              <ul className="space-y-1">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm leading-5 text-muted transition-colors hover:text-foreground"
                    >
                      {t(item.labelKey as MessageKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 flex flex-col gap-10 border-t border-border pt-8 sm:col-span-3 lg:col-span-1 lg:border-0 lg:pt-0">
            {/* Mobile: compact next-page button (same scale as slider) */}
            <Link
              href={nextHref}
              className="inline-flex w-auto max-w-full items-center gap-3 self-start rounded-2xl bg-foreground/10 py-2.5 pl-4 pr-2.5 text-foreground transition-colors hover:bg-foreground/15 sm:hidden"
            >
              <span className="font-pixel text-[11px] uppercase leading-tight tracking-wider">
                <span className="block">{line1}</span>
                {line2 ? <span className="block">{line2}</span> : null}
              </span>
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background">
                <ArrowRight className="h-3.5 w-3.5 text-foreground" strokeWidth={1.75} aria-hidden />
              </span>
            </Link>

            {/* Desktop / tablet: progress slider */}
            <Link
              href={nextHref}
              className="group hidden w-full items-center gap-3 sm:flex"
            >
              <span className="shrink-0 font-pixel text-[11px] uppercase leading-tight tracking-wider text-foreground sm:text-xs">
                <span className="block">{line1}</span>
                {line2 ? <span className="block">{line2}</span> : null}
              </span>
              <span
                className="relative h-[3px] w-28 shrink-0 overflow-hidden rounded-full bg-foreground/25"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent}
                aria-label={nextLabel}
              >
                <span
                  className={cn(
                    "absolute left-0 top-0 h-full rounded-full bg-primary",
                    "transition-[width] duration-150 ease-out",
                  )}
                  style={{ width: `${widthPct}%` }}
                />
              </span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-foreground transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.75}
                aria-hidden
              />
            </Link>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href={site.emailHref}
                className="break-all text-foreground underline underline-offset-4 sm:break-normal"
              >
                {site.email}
              </a>
              <div className="flex items-center gap-2.5">
                <a
                  href={site.phoneHref}
                  className="text-foreground underline underline-offset-4"
                >
                  {site.phone}
                </a>
                <div className="flex items-center">
                  <a
                    href={site.whatsappHref}
                    aria-label="WhatsApp"
                    className="inline-flex h-10 w-10 items-center justify-center text-foreground opacity-80 transition-opacity hover:opacity-100"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={site.instagramHref}
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center text-foreground opacity-80 transition-opacity hover:opacity-100"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
