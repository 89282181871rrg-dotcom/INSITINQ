"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { partners } from "@/lib/content";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/cn";

function buildRow(base: typeof partners, minTiles = 24) {
  const out: (typeof partners)[number][] = [];
  let n = 0;
  while (out.length < minTiles) {
    for (const p of base) {
      out.push({ ...p, id: `${p.id}-${n}` });
      n += 1;
      if (out.length >= minTiles) break;
    }
  }
  return out;
}

function PartnerTiles({ items }: { items: typeof partners }) {
  return (
    <>
      {items.map((p) => (
        <div
          key={p.id}
          className={cn("marquee-tile", !p.logoSrc && "marquee-tile--text")}
          aria-hidden
        >
          {p.logoSrc ? (
            <Image
              src={p.logoSrc}
              alt=""
              width={240}
              height={160}
              className="h-full w-auto object-contain"
            />
          ) : (
            <span className="whitespace-nowrap font-sans text-lg font-semibold uppercase tracking-wide text-white sm:text-xl md:text-2xl">
              {p.name}
            </span>
          )}
        </div>
      ))}
    </>
  );
}

export function Partners() {
  const { t } = useLocale();
  const mid = Math.ceil(partners.length / 2);
  const row1 = buildRow(partners.slice(0, mid));
  const row2 = buildRow(partners.slice(mid).concat(partners.slice(0, mid)));

  return (
    <section className="overflow-hidden pb-16 pt-4 sm:pb-20">
      <Container>
        <ScrollReveal>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase leading-none tracking-tight text-white sm:mb-10 sm:text-4xl lg:text-[2.5rem]">
            {t("partners.title")}
          </h2>
        </ScrollReveal>
      </Container>

      <div className="flex w-full flex-col gap-4 sm:gap-6">
        <Marquee direction="left">
          <PartnerTiles items={row1} />
        </Marquee>
        <Marquee direction="right">
          <PartnerTiles items={row2} />
        </Marquee>
      </div>
    </section>
  );
}
