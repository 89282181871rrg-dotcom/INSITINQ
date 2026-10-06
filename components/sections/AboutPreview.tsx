"use client";

import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useLocalizedContent } from "@/lib/hooks/useLocalizedContent";
import { useLocale } from "@/lib/locale-context";

export function AboutPreview() {
  const { t } = useLocale();
  const { counters } = useLocalizedContent();

  return (
    <section id="about" className="scroll-mt-24 py-10 sm:py-16 lg:py-20">
      <Container>
        <ScrollReveal>
          {/* Блок «О нас» и показатели — по центру, друг за другом */}
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center lg:gap-8">
            <h2 className="font-sans text-[2rem] font-semibold uppercase leading-none tracking-wide text-foreground sm:text-4xl lg:text-5xl">
              {t("about.title")}
            </h2>

            <p className="max-w-2xl text-[0.95rem] leading-relaxed text-foreground/90 sm:text-lg">
              {t("about.body")}
            </p>

            <ul className="grid w-full max-w-xl grid-cols-2 gap-4 pt-2 sm:gap-10">
              {counters.map((item) => (
                <li key={item.label} className="min-w-0">
                  <Counter item={item} />
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
