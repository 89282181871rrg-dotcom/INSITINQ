"use client";

import { useCountUp } from "@/lib/hooks/useCountUp";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import type { CounterItem } from "@/types";
import { cn } from "@/lib/cn";

type CounterProps = {
  item: CounterItem;
  compact?: boolean;
};

export function Counter({ item, compact = false }: CounterProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.4 });
  const animated = useCountUp(item.numericTarget, isVisible);

  const display =
    item.numericTarget === null || animated === null
      ? item.value
      : `${item.prefix ?? ""}${animated}${item.suffix ?? ""}`;

  return (
    <div ref={ref} className="space-y-1.5 text-center sm:space-y-2">
      <p
        className={cn(
          "font-bold leading-none tracking-tight text-primary break-words",
          compact
            ? "text-[0.95rem] sm:text-4xl"
            : "text-[1.65rem] sm:text-4xl lg:text-[2.5rem]",
        )}
      >
        {display}
      </p>
      <p
        className={cn(
          "uppercase leading-snug text-muted",
          compact
            ? "text-[0.5rem] tracking-[0.06em]"
            : "text-[0.65rem] tracking-[0.12em] sm:text-xs sm:tracking-[0.14em]",
        )}
      >
        {item.label}
      </p>
    </div>
  );
}
