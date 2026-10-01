"use client";

import { useCountUp } from "@/lib/hooks/useCountUp";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import type { CounterItem } from "@/types";

type CounterProps = {
  item: CounterItem;
};

export function Counter({ item }: CounterProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.4 });
  const animated = useCountUp(item.numericTarget, isVisible);

  const display =
    item.numericTarget === null || animated === null
      ? item.value
      : `${item.prefix ?? ""}${animated}${item.suffix ?? ""}`;

  return (
    <div ref={ref} className="space-y-2 text-center">
      <p className="text-[1.65rem] font-bold leading-none tracking-tight text-white break-words sm:text-4xl lg:text-[2.5rem]">
        {display}
      </p>
      <p className="text-[0.65rem] uppercase leading-snug tracking-[0.12em] text-muted sm:text-xs sm:tracking-[0.14em]">
        {item.label}
      </p>
    </div>
  );
}
