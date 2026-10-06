import type {
  CounterItem,
  DemoItem,
  IndustryItem,
  PartnerItem,
  TeamMember,
} from "@/types";

export const counters: CounterItem[] = [
  {
    value: "2-4X",
    label: "Ускорение процессов",
    numericTarget: 4,
    suffix: "X",
    prefix: "2-",
  },
  {
    value: "ДО 30%",
    label: "Снижения OPEX",
    numericTarget: 30,
    suffix: "%",
    prefix: "ДО ",
  },
];

export const partners: PartnerItem[] = [
  { id: "a-logo", name: "A", logoSrc: "/images/partners/a-logo.png" },
  {
    id: "burabayfood",
    name: "Burabayfood",
    logoSrc: "/images/partners/burabayfood.png",
  },
  { id: "chobi", name: "Chobi", logoSrc: "/images/partners/chobi.png" },
  { id: "dega", name: "Dega", logoSrc: "/images/partners/dega.png" },
  { id: "ecolife", name: "Ecolife", logoSrc: "/images/partners/ecolife.png" },
  { id: "gourmet", name: "Gourmet", logoSrc: "/images/partners/gourmet.png" },
  { id: "izen", name: "Izen Implant", logoSrc: "/images/partners/izen.png" },
  { id: "insaitiq-system", name: "Инсайдиксистем" },
  { id: "kau", name: "KAU" },
  { id: "vitalife", name: "Виталайф" },
  { id: "kazslanets", name: "КазСланец" },
  { id: "gk-dzort", name: "ГК Дзорт" },
  { id: "ai-association", name: "Ассоциация ИИ" },
];

/** Порядок как на экране 16 */
export const industries: IndustryItem[] = [
  {
    id: "finance",
    title: "Финансы и банки",
    description:
      "Автоматизация, AI для клиентских сервисов и внутренних операций.",
    icon: "finance",
  },
  {
    id: "edtech",
    title: "Образование / EdTech",
    description: "Цифровые платформы, AI-системы обучения и персонализация.",
    icon: "edtech",
  },
  {
    id: "health",
    title: "Медицина / HealthTech",
    description: "AI и цифровые решения для работы с данными и аналитикой.",
    icon: "health",
  },
  {
    id: "industry",
    title: "ГМК и промышленность",
    description:
      "Автоматизация, производственная аналитика, цифровые системы.",
    icon: "industry",
  },
  {
    id: "oil",
    title: "Нефтегазовый сектор",
    description: "Enterprise-системы, аналитика, документооборот.",
    icon: "oil",
  },
  {
    id: "gov",
    title: "Государственный сектор",
    description: "Масштабируемые цифровые платформы для сложных задач.",
    icon: "gov",
  },
];

/**
 * Иконки отраслей (файлы в public/icons/industry-*.png)
 */
export const industryIconSrc: Record<IndustryItem["icon"], string> = {
  finance: "/icons/industry-finance.png",
  edtech: "/icons/industry-edtech.png",
  health: "/icons/industry-health.png",
  industry: "/icons/industry-factory.png",
  oil: "/icons/industry-oil.png",
  gov: "/icons/industry-gov.png",
};

/** Порядок демо: AI School → AI ассистент → CRM → Restaurant OS */
export const demos: DemoItem[] = [
  {
    id: "ai-school",
    title: "AI School",
    description:
      "Цифровая образовательная платформа с AI-наставником для учеников, преподавателей и администрации. Система объясняет темы простым языком, помогает выполнять задания, генерирует тесты, проверяет работы и показывает прогресс обучения.",
    cta: "Протестировать",
    href: "https://ailam.vindarix.ru/login",
    imageSrc: "/images/demo/ai-school.jpg",
    imageAlt: "Превью платформы AI School",
  },
  {
    id: "ai-assistant",
    title: "AI ассистент",
    description:
      "Интеллектуальный бизнес-ассистент, который помогает предпринимателям решать бухгалтерские, юридические и административные задачи в одном окне. Пользователь может отправлять документы, задавать вопросы, получать консультации, создавать заявки и контролировать статус работы специалистов.",
    cta: "Протестировать",
    href: "https://ca-balance.ru/",
    imageSrc: "/images/demo/ai-assistant.jpg",
    imageAlt: "Превью AI ассистента",
  },
  {
    id: "crm",
    title: "CRM",
    description:
      "Платформа для управления заявками, клиентами, проектами, задачами, финансами и ответственностью команды. Система фиксирует обращения, распределяет работу, контролирует сроки, статусы и бюджет, а также автоматизирует повторяющиеся процессы.",
    cta: "Протестировать",
    href: "https://crm.devais.tech/",
    imageSrc: "/images/demo/crm.jpg",
    imageAlt: "Превью интерфейса CRM",
  },
  {
    id: "restaurant-os",
    title: "Restaurant OS",
    description:
      "Рабочий контур для ресторана: QR-меню, приём заказов, панели официанта, кухни, бара и администратора со статусами в реальном времени.",
    cta: "Протестировать",
    href: "https://menuos.vindarix.ru/web/",
    imageSrc: "/images/demo/qr-menu.png",
    imageAlt: "Превью интерфейса Restaurant OS",
  },
];

/**
 * Портреты команды (public/images/team/*).
 * Иконки ролей: team-phone / team-window / team-flow
 */
export const team: TeamMember[] = [
  {
    id: "naurbiev",
    firstName: "Джамалдин",
    lastName: "Наурбиев",
    bio: "Определяет направление компании, отвечает за стратегию, партнёрства и помогает команде держать фокус на бизнес-результате.",
    photoSrc: "/images/team/naurbiev.png",
    icon: "strategy",
  },
  {
    id: "pugoev",
    firstName: "Исмаил",
    lastName: "Пугоев",
    bio: "Формулирует технический план, распределяет задачи backend-команды, следит за архитектурой, сроками и качеством реализации.",
    photoSrc: "/images/team/pugoev.png",
    icon: "tech",
  },
  {
    id: "badiev",
    firstName: "Адам",
    lastName: "Бадиев",
    bio: "Отвечает за управленческие решения, развитие компании и помогает выстраивать процессы так, чтобы команда двигалась к понятным результатам.",
    photoSrc: "/images/team/badiev.png",
    icon: "ops",
  },
  {
    id: "altynbaev",
    firstName: "Талгат",
    lastName: "Алтынбаев",
    bio: "Отвечает за управление финансами компании, обеспечение её финансовой устойчивости, планирование бюджета, контроль денежных потоков.",
    photoSrc: "/images/team/altynbaev.png",
    icon: "finance",
  },
  {
    id: "tuleubaeva",
    firstName: "Анар",
    lastName: "Тулеубаева",
    bio: "Отвечает за определение стратегии компании, принятие ключевых управленческих решений, руководство топ-менеджментом.",
    photoSrc: "/images/team/tuleubaeva.png",
    icon: "mgmt",
  },
  {
    id: "tsoy",
    firstName: "Игорь",
    lastName: "Цой",
    bio: "Отвечает за всю коммерцию компании. Его задача — обеспечить рост выручки и прибыли в долгосрочной перспективе.",
    photoSrc: "/images/team/tsoy.png",
    icon: "commerce",
  },
];

export const teamIconSrc: Record<TeamMember["icon"], string> = {
  strategy: "/icons/team-phone.png",
  tech: "/icons/team-window.png",
  ops: "/icons/team-flow.png",
  finance: "/icons/team-window.png",
  mgmt: "/icons/team-phone.png",
  commerce: "/icons/team-flow.png",
};

export const site = {
  email: "insaitiq.systems@gmail.com",
  phone: "+7 705 555 7233",
  phoneHref: "tel:+77055557233",
  emailHref: "mailto:insaitiq.systems@gmail.com",
  whatsappHref: "https://wa.me/77055557233",
  instagramHref:
    "https://www.instagram.com/insaitiq.systems?stkn=ZWl6bWo4NzlmMXJs",
} as const;
