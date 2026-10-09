"use client";

import type { DemoItem } from "@/types";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/locale-context";

type DemoCardProps = {
  item: DemoItem;
  reverse?: boolean;
};

export function DemoCard({ item, reverse = false }: DemoCardProps) {
  const { t } = useLocale();

  return (
    <article
      id={item.id}
      className="scroll-mt-28 grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12"
    >
      <div
        className={cn(
          "inline-block max-w-full overflow-hidden rounded-2xl border border-border bg-surface leading-none",
          reverse && "lg:order-2",
        )}
      >
        {item.imageSrc && item.imageFull ? (
          // Широкий скриншот: рамка 16:10 как у всех, картинка целиком,
          // а поля сверху и снизу — та же картинка, размытая и затемнённая.
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.imageSrc}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl brightness-50"
              loading="lazy"
              decoding="async"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="relative h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : item.imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.imageSrc}
            alt={item.imageAlt}
            className="block aspect-[16/10] w-full max-w-full object-cover object-top align-top"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center text-xs text-muted">
            TODO: preview
          </div>
        )}
      </div>

      <div className={cn("flex flex-col", reverse && "lg:order-1")}>
        <h3 className="font-sans text-xl font-semibold uppercase tracking-wide text-foreground sm:text-3xl">
          {item.title}
        </h3>
        <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-muted sm:mt-4 sm:text-base">
          {item.description}
        </p>
        <div className="mt-5 sm:mt-6">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-full items-center justify-center rounded-pill bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
          >
            {t("demo.cta")}
          </a>
        </div>
      </div>
    </article>
  );
}
