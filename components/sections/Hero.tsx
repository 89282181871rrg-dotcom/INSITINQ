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
    <section className="pb-10 pt-6 sm:pb-14 sm:pt-8">
      <Container>
        <p className="mb-8 max-w-xl text-left text-base leading-relaxed text-white/90 sm:mb-10 sm:max-w-2xl sm:text-lg md:text-xl">
          {subtitleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>

        <div className="relative isolate aspect-[1840/659] w-full overflow-hidden rounded-3xl lg:rounded-[2rem]">
          <Image
            src="/images/hero/banner.png"
            alt=""
            fill
            priority
            quality={100}
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />

          <div className="absolute inset-0 z-10 flex flex-col justify-center gap-8 p-6 sm:gap-10 sm:p-10 lg:max-w-[55%] lg:gap-12 lg:p-12">
            <h1 className="font-sans text-[clamp(1.85rem,4.8vw,3.55rem)] font-semibold uppercase leading-[1.08] tracking-wide text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
              {titleLines.map((line, i) => (
                <span key={i} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h1>
            <div>
              <Link
                href="/demo"
                className="inline-flex h-12 items-center rounded-2xl bg-primary px-9 text-base font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:h-14 sm:px-11 sm:text-lg"
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
