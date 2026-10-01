"use client";

import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { counters } from "@/lib/content";
import { useLocale } from "@/lib/locale-context";

export function AboutPreview() {
  const { t } = useLocale();
  const [first, ...rest] = counters;

  return (
    <section id="about" className="scroll-mt-24 py-10 sm:py-16 lg:py-20">
      <Container>
        <ScrollReveal>
          <div className="grid gap-y-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-x-20">
            <h2 className="font-sans text-[1.75rem] font-semibold uppercase leading-none tracking-wide text-white sm:text-4xl lg:text-5xl">
              {t("about.title")}
            </h2>

            <div className="order-3 lg:order-none lg:justify-self-center">
              <Counter item={first} />
            </div>

            <p className="order-2 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg lg:order-none">
              {t("about.body")}
            </p>

            <ul className="order-4 grid grid-cols-2 gap-6 sm:gap-8 lg:order-none lg:grid-cols-1 lg:justify-items-center lg:gap-10">
              {rest.map((item) => (
                <li key={item.label}>
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
