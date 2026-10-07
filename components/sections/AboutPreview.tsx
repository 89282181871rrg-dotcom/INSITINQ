"use client";

import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useLocalizedContent } from "@/lib/hooks/useLocalizedContent";
import { useLocale } from "@/lib/locale-context";

export function AboutPreview() {
  const { t } = useLocale();
  const { counters } = useLocalizedContent();

  return (
    <section id="about" className="scroll-mt-24 pt-10 sm:pt-20 lg:pt-24">
      <Container>
        <ScrollReveal>
          {/* Текст «О нас» слева, показатели справа; весь блок — по центру
              относительно обложки над ним */}
          <div className="mx-auto grid max-w-5xl gap-y-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-x-24">
            <div className="flex flex-col gap-6 lg:gap-8">
              <SectionTitle>{t("about.title")}</SectionTitle>
              <p className="max-w-xl text-[0.95rem] leading-relaxed text-foreground/90 sm:text-lg">
                {t("about.body")}
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-4 pt-2 sm:gap-10 lg:grid-cols-1 lg:pt-0">
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
