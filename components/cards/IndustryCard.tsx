import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { industryIconSrc } from "@/lib/content";
import type { IndustryItem } from "@/types";

type IndustryCardProps = {
  item: IndustryItem;
};

export function IndustryCard({ item }: IndustryCardProps) {
  const iconSrc = industryIconSrc[item.icon];

  return (
    <Card as="article" className="flex h-full flex-col gap-4 rounded-2xl bg-card p-5 sm:gap-5 sm:p-7">
      <Image
        src={iconSrc}
        alt=""
        width={40}
        height={40}
        className="theme-invert h-9 w-9 object-contain sm:h-10 sm:w-10"
        aria-hidden
      />
      <h3 className="font-sans text-base font-semibold text-foreground sm:text-xl">
        {item.title}
      </h3>
      <p className="mt-auto text-sm leading-relaxed text-muted">
        {item.description}
      </p>
    </Card>
  );
}
