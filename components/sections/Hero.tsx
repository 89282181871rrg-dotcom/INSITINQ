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
        <p className="mb-6 max-w-xl text-left text-[0.95rem] leading-relaxed text-white/90 sm:mb-10 sm:max-w-2xl sm:text-lg md:text-xl">
          {subtitleLines.map((line, i) => (
            <span key={i} className="block sm:inline">
              {line}
              {i < subtitleLines.length - 1 ? (
                <span className="hidden sm:inline"> </span>
              ) : null}
            </span>
          ))}
        </p>

        {/* Mobile: tall card; desktop: wide banner ratio */}
        <div className="relative isolate min-h-[min(72vw,28rem)] overflow-hidden rounded-2xl sm:min-h-[22rem] sm:rounded-3xl md:aspect-[1840/659] md:min-h-0 lg:rounded-[2rem]">
          <Image
            src="/images/hero/banner.png"
            alt=""
            fill
            priority
            quality={100}
            className="object-cover object-[center_40%] sm:object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          {/* Soft readability veil — stronger on small screens only */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10 sm:from-black/40 sm:via-transparent sm:to-transparent md:bg-gradient-to-r md:from-black/30 md:via-transparent md:to-transparent" />

          <div className="absolute inset-0 z-10 flex flex-col justify-end gap-5 p-5 sm:justify-center sm:gap-8 sm:p-8 md:max-w-[60%] md:gap-10 md:p-10 lg:max-w-[55%] lg:gap-12 lg:p-12">
            <h1 className="font-sans text-[clamp(1.45rem,6.5vw,2.35rem)] font-semibold uppercase leading-[1.12] tracking-wide text-white sm:text-[clamp(1.85rem,4.8vw,3.55rem)] sm:leading-[1.08] [text-shadow:0_1px_3px_rgba(0,0,0,0.45)]">
              {titleLines.map((line, i) => (
                <span key={i} className="block md:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>
            <div>
              <Link
                href="/demo"
                className="inline-flex h-11 w-full max-w-[16rem] items-center justify-center rounded-2xl bg-primary px-7 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:h-14 sm:w-auto sm:max-w-none sm:px-11 sm:text-lg"
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
