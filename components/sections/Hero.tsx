"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/lib/locale-context";

export function Hero() {
  const { t } = useLocale();
  const titleLines = t("hero.title").split("\n");
  const subtitleLines = t("hero.subtitle").split("\n");

  return (
    <section className="pb-8 pt-5 sm:pb-14 sm:pt-8">
      <Container>
        <p className="mb-5 text-left text-[0.95rem] leading-snug text-foreground/90 sm:mb-10 sm:text-lg sm:leading-relaxed md:text-xl">
          {subtitleLines.join(" ")}
        </p>

        <div className="relative isolate aspect-[2.2/1] w-full overflow-hidden rounded-2xl sm:aspect-[2.3/1] sm:rounded-3xl md:aspect-[2.55/1] lg:aspect-[2.7/1] lg:rounded-[2rem]">
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
            <h1 className="max-w-[72%] font-sans text-[clamp(1.1rem,4.8vw,1.55rem)] font-semibold uppercase leading-[1.12] tracking-wide text-white sm:max-w-none sm:text-[clamp(1.85rem,4.8vw,3.55rem)] sm:leading-[1.08] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
              {titleLines.map((line, i) => (
                <span key={i} className="block sm:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>

            <div className="flex justify-end md:justify-start">
              <Link
                href="/demo"
                className="inline-flex h-9 items-center justify-center rounded-pill bg-primary px-4 text-[11px] font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:h-14 sm:rounded-2xl sm:px-11 sm:text-lg"
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
