"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/lib/locale-context";
import type { Locale } from "@/types";

/**
 * Ширина самой длинной строки заголовка в em (шрифт Unbounded 600).
 * Башня на обложке стоит примерно на 47% ширины картинки, поэтому заголовок
 * масштабируется от ширины обложки (cqw) и всегда заканчивается левее неё.
 */
const TITLE_WIDTH_EM: Record<Locale, number> = { ru: 9.6, en: 10.3, kz: 12.7 };

export function Hero() {
  const { t, locale } = useLocale();
  const titleLines = t("hero.title").split("\n");

  // Отступы главной = отступам остальных страниц (40 / 80 / 96px):
  // шапка — обложка — о нас — партнёры — подвал
  return (
    <section className="pt-10 sm:pt-20 lg:pt-24">
      <Container>
        <div className="relative isolate aspect-[2.2/1] [container-type:inline-size] w-full overflow-hidden rounded-2xl sm:aspect-[2.3/1] sm:rounded-3xl md:aspect-[2.55/1] lg:aspect-[2.7/1] lg:rounded-[2rem]">
          <Image
            src="/images/hero/banner.png"
            alt=""
            fill
            priority
            quality={100}
            className="object-cover object-[center_42%]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1536px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />

          <div className="absolute inset-0 z-10 flex flex-col justify-between p-3.5 pr-4 sm:p-8 md:max-w-[58%] md:justify-center md:gap-10 md:p-10 lg:max-w-[55%] lg:gap-12 lg:p-12">
            <h1
              className="font-sans font-semibold uppercase leading-[1.2] tracking-wide text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]"
              style={{
                fontSize: `min(3.55rem, calc(38cqw / ${TITLE_WIDTH_EM[locale]}))`,
              }}
            >
              {titleLines.map((line, i) => (
                <span key={i} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>

            <div className="flex justify-start">
              <Link
                href="/demo"
                className="inline-flex h-9 items-center justify-center rounded-pill bg-primary px-4 text-[11px] font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:h-11 sm:px-6 sm:text-sm lg:h-14 lg:rounded-2xl lg:px-11 lg:text-lg"
              >
                {t("hero.cta")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
