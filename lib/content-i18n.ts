import { counters, demos, industries, team } from "@/lib/content";
import type {
  CounterItem,
  DemoItem,
  IndustryItem,
  Locale,
  TeamMember,
} from "@/types";

/**
 * Переводы контента из `lib/content.ts` (русский — базовый язык).
 * Имена и фамилии команды не переводятся.
 */
type ContentTranslation = {
  counters: Pick<CounterItem, "value" | "label" | "prefix" | "suffix">[];
  industries: Record<string, Pick<IndustryItem, "title" | "description">>;
  demos: Record<string, Pick<DemoItem, "title" | "description" | "imageAlt">>;
  team: Record<string, Pick<TeamMember, "bio">>;
};

const en: ContentTranslation = {
  counters: [
    { value: "2-4X", label: "Faster processes", prefix: "2-", suffix: "X" },
    { value: "UP TO 30%", label: "Lower OPEX", prefix: "UP TO ", suffix: "%" },
  ],
  industries: {
    finance: {
      title: "Finance & Banking",
      description:
        "Automation and AI for customer services and internal operations.",
    },
    edtech: {
      title: "Education / EdTech",
      description:
        "Digital platforms, AI learning systems and personalization.",
    },
    health: {
      title: "Healthcare / HealthTech",
      description:
        "AI and digital solutions for working with data and analytics.",
    },
    industry: {
      title: "Mining & Industry",
      description: "Automation, production analytics, digital systems.",
    },
    oil: {
      title: "Oil & Gas",
      description: "Enterprise systems, analytics, document management.",
    },
    gov: {
      title: "Public Sector",
      description: "Scalable digital platforms for complex tasks.",
    },
  },
  demos: {
    "ai-school": {
      title: "AI School",
      description:
        "A digital education platform with an AI mentor for students, teachers and administrators. The system explains topics in plain language, helps with assignments, generates tests, grades work and shows learning progress.",
      imageAlt: "AI School platform preview",
    },
    "ai-assistant": {
      title: "AI Assistant",
      description:
        "An intelligent business assistant that helps entrepreneurs handle accounting, legal and administrative tasks in one place. Users can send documents, ask questions, get consultations, create requests and track the status of specialists' work.",
      imageAlt: "AI Assistant preview",
    },
    crm: {
      title: "CRM",
      description:
        "A platform for managing requests, clients, projects, tasks, finances and team accountability. The system records inquiries, assigns work, controls deadlines, statuses and budget, and automates recurring processes.",
      imageAlt: "CRM interface preview",
    },
    "restaurant-os": {
      title: "Restaurant OS",
      description:
        "An operating system for restaurants: QR menu, order taking, waiter, kitchen, bar and admin panels with real-time statuses.",
      imageAlt: "Restaurant OS interface preview",
    },
    gargalo: {
      title: "Gargalo",
      description:
        "Gargalo is a trusted social network for bringing together relatives, families and loved ones.\n\nThe platform lets users create verified profiles, build family connections, share news, photos and videos, and stay in touch with their loved ones.\n\nThe key feature of Gargalo is a global genealogy network that unites users into family trees and helps discover kinship between people.\n\nThe service also provides separate communities for each family clan (teip), where members can share important events, communicate and create private family groups.",
      imageAlt: "Gargalo preview",
    },
    ecolife: {
      title: "EcoLife",
      description:
        "Collection and management of municipal solid waste is a socially important service that affects the sanitary condition and quality of life of residents of the Republic of Ingushetia.\n\nECOLIFE LLC is the regional operator for municipal solid waste management, providing collection, transportation and removal of waste in accordance with established standards and tariffs.\n\nOur goal is uninterrupted and transparent service: from signing contracts and keeping to collection schedules to accurate billing and handling requests from citizens and organisations.\n\nWe operate within current legislation, develop infrastructure and improve the quality of service, making it accessible, clear and reliable.",
      imageAlt: "EcoLife website preview",
    },
    talimger: {
      title: "Talimger",
      description:
        "Talimger is a cloud education platform for schools and kindergartens in Kazakhstan that brings together learning management, document flow, analytics and communication with parents in a single digital system.\n\nThe platform automates administrative processes, manages timetables and academic performance, keeps electronic documents, generates reports and offers an AI assistant for working with the organisation's data.\n\nThe key feature of Talimger is a single secure system with separate access for administrators, teachers and parents. Each school works in its own isolated space, keeping its data confidential and its processes independent.",
      imageAlt: "Talimger platform preview",
    },
  },
  team: {
    naurbiev: {
      bio: "Sets the company's direction, leads strategy and partnerships, and helps the team stay focused on business results.",
    },
    pugoev: {
      bio: "Builds the technical plan, distributes backend tasks, and oversees architecture, deadlines and implementation quality.",
    },
    badiev: {
      bio: "Responsible for management decisions and company growth, and helps build processes so the team moves toward clear results.",
    },
    altynbaev: {
      bio: "Manages the company's finances, ensures its financial stability, plans the budget and controls cash flows.",
    },
    tuleubaeva: {
      bio: "Defines the company's strategy, makes key management decisions and leads top management.",
    },
    tsoy: {
      bio: "Leads all of the company's commercial activity. His goal is long-term growth in revenue and profit.",
    },
  },
};

const kz: ContentTranslation = {
  counters: [
    {
      value: "2-4X",
      label: "Процестерді жеделдету",
      prefix: "2-",
      suffix: "X",
    },
    {
      value: "30%-ҒА ДЕЙІН",
      label: "OPEX-ті төмендету",
      prefix: "",
      suffix: "%-ҒА ДЕЙІН",
    },
  ],
  industries: {
    finance: {
      title: "Қаржы және банктер",
      description:
        "Клиенттік сервистер мен ішкі операцияларға арналған автоматтандыру және AI.",
    },
    edtech: {
      title: "Білім беру / EdTech",
      description:
        "Цифрлық платформалар, AI оқыту жүйелері және дербестендіру.",
    },
    health: {
      title: "Медицина / HealthTech",
      description:
        "Деректермен және аналитикамен жұмыс істеуге арналған AI және цифрлық шешімдер.",
    },
    industry: {
      title: "Тау-кен металлургия кешені және өнеркәсіп",
      description: "Автоматтандыру, өндірістік аналитика, цифрлық жүйелер.",
    },
    oil: {
      title: "Мұнай-газ секторы",
      description: "Enterprise-жүйелер, аналитика, құжат айналымы.",
    },
    gov: {
      title: "Мемлекеттік сектор",
      description: "Күрделі міндеттерге арналған ауқымды цифрлық платформалар.",
    },
  },
  demos: {
    "ai-school": {
      title: "AI School",
      description:
        "Оқушыларға, мұғалімдерге және әкімшілікке арналған AI-тәлімгері бар цифрлық білім беру платформасы. Жүйе тақырыптарды қарапайым тілмен түсіндіреді, тапсырмаларды орындауға көмектеседі, тесттер құрастырады, жұмыстарды тексереді және оқу барысын көрсетеді.",
      imageAlt: "AI School платформасының превьюі",
    },
    "ai-assistant": {
      title: "AI ассистент",
      description:
        "Кәсіпкерлерге бухгалтерлік, заңдық және әкімшілік міндеттерді бір терезеде шешуге көмектесетін зияткерлік бизнес-ассистент. Пайдаланушы құжаттар жіберіп, сұрақтар қойып, кеңес алып, өтінімдер құрып, мамандар жұмысының мәртебесін бақылай алады.",
      imageAlt: "AI ассистенттің превьюі",
    },
    crm: {
      title: "CRM",
      description:
        "Өтінімдерді, клиенттерді, жобаларды, тапсырмаларды, қаржыны және команданың жауапкершілігін басқаруға арналған платформа. Жүйе өтініштерді тіркейді, жұмысты бөледі, мерзімдерді, мәртебелерді және бюджетті бақылайды, сондай-ақ қайталанатын процестерді автоматтандырады.",
      imageAlt: "CRM интерфейсінің превьюі",
    },
    "restaurant-os": {
      title: "Restaurant OS",
      description:
        "Мейрамханаға арналған жұмыс контуры: QR-мәзір, тапсырыстарды қабылдау, даяшы, ас үй, бар және әкімші панельдері нақты уақыттағы мәртебелермен.",
      imageAlt: "Restaurant OS интерфейсінің превьюі",
    },
    gargalo: {
      title: "Gargalo",
      description:
        "Gargalo — туыстарды, отбасыларды және жақын адамдарды біріктіруге арналған сенімді әлеуметтік желі.\n\nПлатформа расталған профильдер жасауға, туыстық байланыстарды құруға, жаңалықтармен, фотосуреттермен, бейнелермен бөлісуге және жақындармен байланыста болуға мүмкіндік береді.\n\nGargalo-ның басты ерекшелігі — пайдаланушыларды отбасылық ағаштарға біріктіріп, адамдар арасындағы туыстық байланыстарды табуға мүмкіндік беретін жаһандық шежірелік желі.\n\nСервис сондай-ақ әр әулетке (тейпке) арналған жеке қауымдастықтар ұсынады, онда қатысушылар маңызды оқиғалармен бөлісіп, араласып, жабық отбасылық топтар құра алады.",
      imageAlt: "Gargalo превьюі",
    },
    ecolife: {
      title: "EcoLife",
      description:
        "Қатты тұрмыстық қалдықтарды шығару және олармен жұмыс істеу — Ингушетия Республикасы тұрғындарының санитарлық жағдайы мен өмір сапасына әсер ететін әлеуметтік маңызды қызмет.\n\n«ЭКОЛАЙФ» ЖШҚ — ҚТҚ-мен жұмыс істеу жөніндегі өңірлік оператор, белгіленген нормативтер мен тарифтерге сәйкес қалдықтарды жинауды, тасымалдауды және шығаруды қамтамасыз етеді.\n\nБіздің міндетіміз — қызметті үздіксіз және ашық көрсету: шарттар жасасу мен шығару кестелерін сақтаудан бастап дұрыс есептеулер мен азаматтар және ұйымдардың өтініштерін өңдеуге дейін.\n\nБіз қолданыстағы заңнама аясында жұмыс істейміз, инфрақұрылымды дамытамыз және қызмет сапасын арттырып, оны қолжетімді, түсінікті және сенімді етеміз.",
      imageAlt: "EcoLife сайтының превьюі",
    },
    talimger: {
      title: "Talimger",
      description:
        "Talimger — Қазақстандағы мектептер мен балабақшаларға арналған бұлтты білім беру платформасы. Ол оқу процесін басқаруды, құжат айналымын, аналитиканы және ата-аналармен өзара әрекеттесуді бірыңғай цифрлық жүйеге біріктіреді.\n\nПлатформа әкімшілік процестерді автоматтандыруға, сабақ кестесі мен үлгерімді басқаруға, электрондық құжаттарды жүргізуге, есептер жасауға және білім беру ұйымының деректерімен жұмыс істеу үшін AI-ассистентті пайдалануға мүмкіндік береді.\n\nTalimger-дің басты ерекшелігі — әкімшілікке, педагогтерге және ата-аналарға қолжетімділігі бөлінген бірыңғай қорғалған жүйе. Әр мектеп өзінің оқшауланған кеңістігінде жұмыс істейді, деректердің құпиялылығы мен процестердің дербестігін сақтайды.",
      imageAlt: "Talimger платформасының превьюі",
    },
  },
  team: {
    naurbiev: {
      bio: "Компанияның бағытын айқындайды, стратегия мен серіктестіктерге жауап береді және команданың бизнес-нәтижеге назар аударуына көмектеседі.",
    },
    pugoev: {
      bio: "Техникалық жоспарды қалыптастырады, backend-команданың міндеттерін бөледі, архитектураны, мерзімдерді және іске асыру сапасын қадағалайды.",
    },
    badiev: {
      bio: "Басқарушылық шешімдер мен компанияның дамуына жауап береді және команда нақты нәтижелерге қарай жылжуы үшін процестерді құруға көмектеседі.",
    },
    altynbaev: {
      bio: "Компания қаржысын басқаруға, оның қаржылық тұрақтылығын қамтамасыз етуге, бюджетті жоспарлауға және ақша ағындарын бақылауға жауап береді.",
    },
    tuleubaeva: {
      bio: "Компания стратегиясын айқындауға, негізгі басқарушылық шешімдер қабылдауға және топ-менеджментке басшылық етуге жауап береді.",
    },
    tsoy: {
      bio: "Компанияның барлық коммерциясына жауап береді. Оның міндеті — ұзақ мерзімді перспективада түсім мен пайданың өсуін қамтамасыз ету.",
    },
  },
};

const translations: Partial<Record<Locale, ContentTranslation>> = { en, kz };

export type LocalizedContent = {
  counters: CounterItem[];
  industries: IndustryItem[];
  demos: DemoItem[];
  team: TeamMember[];
};

export function getLocalizedContent(locale: Locale): LocalizedContent {
  const tr = translations[locale];
  if (!tr) return { counters, industries, demos, team };

  return {
    counters: counters.map((item, index) => ({
      ...item,
      ...tr.counters[index],
    })),
    industries: industries.map((item) => ({
      ...item,
      ...tr.industries[item.id],
    })),
    demos: demos.map((item) => ({ ...item, ...tr.demos[item.id] })),
    team: team.map((member) => ({ ...member, ...tr.team[member.id] })),
  };
}
