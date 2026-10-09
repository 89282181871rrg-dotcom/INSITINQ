import type { NavItem } from "@/types";

/**
 * Header nav — «О компании» ведёт к блоку «О нас» на главной.
 * «Контакты» убраны: ту же страницу открывает «Обсудить» и переход прокруткой (pageOrder).
 */
export const mainNav: NavItem[] = [
  { href: "/#about", labelKey: "nav.about" },
  { href: "/industries", labelKey: "nav.industries" },
  { href: "/demo", labelKey: "nav.demo" },
  { href: "/team", labelKey: "nav.team" },
];

/** Pixel menu panel links */
export const menuNav: NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/industries", labelKey: "nav.industries" },
  { href: "/demo", labelKey: "nav.demo" },
  { href: "/team", labelKey: "nav.team" },
];

/**
 * «Кейсы» скрыты, пока страница пустая. «Демо» не дублируем:
 * оно есть отдельной колонкой справа со списком проектов (magaserho, 09.10).
 */
export const footerCompanyLinks: NavItem[] = [
  { href: "/", labelKey: "footer.home" },
  { href: "/#about", labelKey: "footer.about" },
  { href: "/industries", labelKey: "footer.industries" },
];

export const footerDemoLinks: NavItem[] = [
  { href: "/demo#crm", labelKey: "footer.demoCrm" },
  { href: "/demo#gargalo", labelKey: "footer.demoGargalo" },
  { href: "/demo#ecolife", labelKey: "footer.demoEcolife" },
  { href: "/demo#talimger", labelKey: "footer.demoTalimger" },
];

export const footerLegalLinks: NavItem[] = [
  { href: "/legal/privacy", labelKey: "footer.privacy" },
  { href: "/legal/consent", labelKey: "footer.consent" },
  { href: "/legal/terms", labelKey: "footer.terms" },
];

/** Цепочка next-page без отдельной /about */
export const pageOrder = [
  "/",
  "/industries",
  "/demo",
  "/team",
  "/contacts",
] as const;

export type AppPath = (typeof pageOrder)[number];

export const LAST_PAGE: AppPath = "/contacts";

export const NEXT_PAGE_CHARGE_PX = 640;
export const NEXT_PAGE_CHARGE_DAMPING = 0.32;

export function normalizePath(pathname: string): string {
  return pathname.replace(/\/$/, "") || "/";
}

export function isLastPage(pathname: string): boolean {
  return normalizePath(pathname) === LAST_PAGE;
}

export function getNextPage(pathname: string): string {
  const normalized = normalizePath(pathname);
  if (normalized === LAST_PAGE) return "/";
  const index = pageOrder.indexOf(normalized as AppPath);
  if (index === -1) return "/";
  return pageOrder[index + 1] ?? "/";
}
