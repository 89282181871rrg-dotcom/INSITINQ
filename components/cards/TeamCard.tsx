import Image from "next/image";
import {
  CommerceIcon,
  FinanceIcon,
  MgmtIcon,
  OpsIcon,
  StrategyIcon,
  TechIcon,
} from "@/components/icons/DesignIcons";
import type { TeamMember } from "@/types";

const roleIcons: Record<TeamMember["icon"], typeof StrategyIcon> = {
  strategy: StrategyIcon,
  tech: TechIcon,
  ops: OpsIcon,
  finance: FinanceIcon,
  mgmt: MgmtIcon,
  commerce: CommerceIcon,
};

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  const RoleIcon = roleIcons[member.icon];

  return (
    <article className="flex flex-col gap-2.5 sm:gap-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-surface">
        {member.photoSrc ? (
          <Image
            src={member.photoSrc}
            alt={`${member.firstName} ${member.lastName}`}
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-muted">
            TODO: photo
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3">
        <h3 className="font-sans text-base font-semibold leading-snug text-foreground sm:text-lg">
          {member.firstName} {member.lastName}
        </h3>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-foreground">
          <RoleIcon className="h-6 w-6" />
        </span>
      </div>

      <p className="text-sm leading-snug text-muted sm:leading-relaxed">{member.bio}</p>
    </article>
  );
}
