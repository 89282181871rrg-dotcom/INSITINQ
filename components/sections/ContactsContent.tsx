"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/sections/ContactForm";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useLocale } from "@/lib/locale-context";

export function ContactsContent() {
  const { t } = useLocale();

  return (
    <section className="py-10 sm:py-20 lg:py-24">
      <Container className="max-w-5xl">
        <ScrollReveal>
          <SectionTitle as="h1" className="mb-6 text-center sm:mb-10">
            {t("contact.heading")}
          </SectionTitle>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <ContactForm />
        </ScrollReveal>
      </Container>
    </section>
  );
}
