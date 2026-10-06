"use client";

import { useState } from "react";
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

function PartnerTiles({
  items,
  activeId,
  onToggle,
}: {
  items: typeof partners;
  activeId: string | null;
  onToggle: (id: string) => void;
}) {
  return (
    <>
      {items.map((p) => {
        const active = activeId === p.id;
        return (
          <button
            key={p.id}
            type="button"
            className={cn(
              "marquee-tile cursor-pointer border-0 bg-transparent transition-[transform,filter,opacity] duration-200",
              !p.logoSrc && "marquee-tile--text",
              active
                ? "z-10 scale-110 opacity-100 brightness-125 drop-shadow-[0_0_12px_rgba(47,128,237,0.55)]"
                : activeId
                  ? "opacity-45"
                  : "opacity-100",
            )}
            aria-pressed={active}
            aria-label={p.name}
            onClick={() => onToggle(p.id)}
          >
            {p.logoSrc ? (
              <Image
                src={p.logoSrc}
                alt=""
                width={240}
                height={160}
                className="pointer-events-none h-full w-auto object-contain"
              />
            ) : (
              <span className="pointer-events-none whitespace-nowrap font-sans text-sm font-semibold uppercase tracking-wide text-foreground sm:text-xl md:text-2xl">
                {p.name}
              </span>
            )}
          </button>
        );
      })}
    </>
  );
}

export function Partners() {
  const { t } = useLocale();
  const [activeId, setActiveId] = useState<string | null>(null);
  const mid = Math.ceil(partners.length / 2);
  const row1 = buildRow(partners.slice(0, mid));
  const row2 = buildRow(partners.slice(mid).concat(partners.slice(0, mid)));

  const onToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="overflow-hidden pb-16 pt-4 sm:pb-20">
      <Container>
        <ScrollReveal>
          <h2 className="mb-6 px-2 text-center text-[1.65rem] font-bold uppercase leading-tight tracking-tight text-foreground sm:mb-10 sm:text-4xl lg:text-[2.5rem]">
            {t("partners.title")}
          </h2>
        </ScrollReveal>
      </Container>

      <div className="flex w-full flex-col gap-4 sm:gap-6">
        <Marquee direction="left" paused={!!activeId}>
          <PartnerTiles
            items={row1}
            activeId={activeId}
            onToggle={onToggle}
          />
        </Marquee>
        <Marquee direction="right" paused={!!activeId}>
          <PartnerTiles
            items={row2}
            activeId={activeId}
            onToggle={onToggle}
          />
        </Marquee>
      </div>
    </section>
  );
}
