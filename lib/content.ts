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
    description: "Автоматизация, производственная аналитика, цифровые системы.",
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

/** CRM + проекты от magaserho (09.10): Gargalo, EcoLife, Talimger */
export const demos: DemoItem[] = [
  {
    id: "crm",
    title: "CRM",
    description:
      "Платформа для управления заявками, клиентами, проектами, задачами, финансами и ответственностью команды. Система фиксирует обращения, распределяет работу, контролирует сроки, статусы и бюджет, а также автоматизирует повторяющиеся процессы.",
    cta: "Протестировать",
    href: "https://crm.devais.tech/",
    imageSrc: "/images/demo/crm.jpg",
    imageFull: true,
    imageAlt: "Превью интерфейса CRM",
  },
  {
    id: "gargalo",
    title: "Gargalo",
    description:
      "Gargalo — доверенная социальная сеть, созданная для объединения родственников, семей и близких людей.\n\nПлатформа позволяет создавать подтверждённые профили, выстраивать родственные связи, обмениваться новостями, фотографиями, видео и поддерживать общение с близкими.\n\nКлючевая особенность Gargalo — глобальная родословная сеть, объединяющая пользователей в семейные деревья и позволяющая находить родственные связи между людьми.\n\nСервис также предоставляет отдельные сообщества для каждого семейства (тейпа), где участники могут делиться важными событиями, общаться и создавать закрытые семейные группы.",
    cta: "Протестировать",
    href: "https://gargalo.ru/",
    imageSrc: "/images/demo/gargalo.webp",
    imageAlt: "Превью Gargalo",
  },
  {
    id: "ecolife",
    title: "EcoLife",
    description:
      "Вывоз и обращение с твёрдыми коммунальными отходами — социально значимая услуга, влияющая на санитарное состояние и качество жизни жителей Республики Ингушетия.\n\nООО «ЭКОЛАЙФ» — региональный оператор по обращению с ТКО, обеспечивающий сбор, транспортирование и вывоз отходов в соответствии с установленными нормативами и тарифами.\n\nНаша задача — бесперебойное и прозрачное предоставление услуг: от заключения договоров и соблюдения графиков вывоза до корректных начислений и обработки обращений граждан и организаций.\n\nМы работаем в рамках действующего законодательства, развиваем инфраструктуру и повышаем качество сервиса, делая услугу доступной, понятной и надёжной.",
    cta: "Протестировать",
    href: "https://ecolaif.ru/",
    imageSrc: "/images/demo/ecolife.webp",
    imageFull: true,
    imageAlt: "Превью сайта EcoLife",
  },
  {
    id: "talimger",
    title: "Talimger",
    description:
      "Talimger — облачная образовательная платформа для школ и детских садов Казахстана, объединяющая управление учебным процессом, документооборот, аналитику и взаимодействие с родителями в единой цифровой системе.\n\nПлатформа позволяет автоматизировать административные процессы, управлять расписанием и успеваемостью, вести электронные документы, формировать отчёты и использовать AI-ассистента для работы с данными образовательной организации.\n\nКлючевая особенность Talimger — единая защищённая система с разграничением доступа для администрации, педагогов и родителей. Каждая школа работает в собственном изолированном пространстве, сохраняя конфиденциальность данных и независимость процессов.",
    cta: "Протестировать",
    href: "https://eduquality-stage.vindarix.ru/dashboard",
    imageSrc: "/images/demo/talimger.webp",
    imageAlt: "Превью платформы Talimger",
  },
];

/**
 * Портреты команды (public/images/team/*).
 * Иконки ролей: team-phone / team-window / team-flow
 */
// Джамалдин Наурбиев, Исмаил Пугоев и Игорь Цой убраны по просьбе magaserho (08.10)
export const team: TeamMember[] = [
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
