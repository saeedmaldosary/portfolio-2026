// All text on the site lives here, in English (en) and Arabic (ar).
// Source of truth: Saeed_Aldosary-Lead_Software_Engineer-CV.pdf

export type Lang = "en" | "ar";
type Text = Record<Lang, string>;

export const links = {
  linkedin: "https://linkedin.com/in/smaldosary",
  email: "mailto:Saeedmaldosary@gmail.com",
  emailText: "Saeedmaldosary@gmail.com",
  resume:
    "https://drive.google.com/file/d/1qdmf5FVxrGfM7QB294XY_v6gRWOh8BSK/view?usp=sharing",
};

export type Job = {
  company: string;
  companyNote: Text;
  role: Text;
  period: Text;
  stack: string;
  points: Text[]; // short summary (shown by default)
  details: Text[]; // full version from the CV
};

export const experience: Job[] = [
  {
    company: "HUMAIN",
    companyNote: { en: "formerly SCAI", ar: "سابقاً SCAI" },
    role: { en: "Lead Software Engineer", ar: "قائد فريق هندسة البرمجيات" },
    period: { en: "Aug 2023 – Present", ar: "أغسطس 2023 – الآن" },
    stack: "Next.js · Spring Boot · RabbitMQ · Keycloak · GitLab CI/CD",
    points: [
      // The systems themselves are in "Selected work", so these cover the rest of the role.
      {
        en: "Set technical direction, review code and mentor engineers.",
        ar: "Technical Direction و Code Reviews و Mentoring للفريق.",
      },
      {
        en: "Own delivery from Jira ticket to production.",
        ar: "مسؤول عن الـ Delivery من تذكرة Jira إلى الـ Production.",
      },
      {
        en: "Fixed findings from security audits and penetration tests.",
        ar: "عالجت ملاحظات الـ Security Audits والـ Penetration Testing.",
      },
      {
        en: "Built a shared design system with shadcn/ui and Tailwind CSS.",
        ar: "أسست Design System موحّد بـ shadcn/ui و Tailwind CSS.",
      },
    ],
    details: [
      {
        en: "Set technical direction, run code reviews, mentor engineers, and own delivery from Jira ticket to production.",
        ar: "Technical Direction و Code Reviews و Mentoring للفريق، ومسؤول عن الـ Delivery من تذكرة Jira إلى الـ Production.",
      },
      {
        en: "Built enterprise web applications in Next.js, improving performance and scalability.",
        ar: "طورت تطبيقات Enterprise بـ Next.js، وحسّنت الـ Performance والـ Scalability.",
      },
      {
        en: "Architected RESTful and event-driven Spring Boot microservices (clean/hexagonal architecture) with RabbitMQ messaging and JobRunr background jobs.",
        ar: "صممت Microservices بـ Spring Boot مبنية على REST و Event-driven (Clean / Hexagonal Architecture)، واستخدمت RabbitMQ للـ Messaging و JobRunr للـ Background Jobs.",
      },
      {
        en: "Designed a multi-tenant architecture with per-tenant data isolation, theming, and configuration, serving multiple organizations from one codebase.",
        ar: "صممت Multi-tenant Architecture فيها Data Isolation و Theming و Configuration لكل Tenant، وتخدم أكثر من جهة من نفس الـ Codebase.",
      },
      {
        en: "Built a feature-flag system for progressive rollouts, A/B testing, and environment toggles, decoupling deployment from release.",
        ar: "بنيت نظام Feature Flags للـ Progressive Rollouts والـ A/B Testing، بحيث يكون الـ Deployment منفصل عن الـ Release.",
      },
      {
        en: "Secured services with Keycloak (OAuth2/JWT) and role-based access, and remediated findings from security audits and penetration tests.",
        ar: "أمّنت الخدمات بـ Keycloak (OAuth2/JWT) و Role-based Access، وعالجت ملاحظات الـ Security Audits والـ Penetration Testing.",
      },
      {
        en: "Shipped through GitLab CI/CD pipelines, with Prometheus and Grafana monitoring.",
        ar: "الـ Deployment عن طريق GitLab CI/CD، والـ Monitoring بـ Prometheus و Grafana.",
      },
      {
        en: "Established a shared, accessible design system with shadcn/ui and Tailwind CSS, keeping UI consistent across features.",
        ar: "أسست Design System موحّد بـ shadcn/ui و Tailwind CSS يحافظ على تناسق الـ UI في كل الـ Features.",
      },
    ],
  },
  {
    company: "stc",
    companyNote: { en: "Saudi Telecom Company", ar: "شركة الاتصالات السعودية" },
    role: { en: "Software Engineer", ar: "مهندس برمجيات" },
    period: { en: "Apr 2021 – Aug 2023", ar: "أبريل 2021 – أغسطس 2023" },
    stack: "JavaScript · webMethods · Node.js · Scrum",
    points: [
      {
        en: "Built front-end features and reusable UI components in JavaScript.",
        ar: "طورت Front-end Features و Reusable Components بـ JavaScript.",
      },
      {
        en: "Integrated enterprise APIs on webMethods Integration Server.",
        ar: "ربطت Enterprise APIs على webMethods Integration Server.",
      },
      {
        en: "Built a Node.js chatbot with Wit.ai and handed it over to stc teams.",
        ar: "بنيت Chatbot بـ Node.js و Wit.ai وسلّمته لفرق stc.",
      },
    ],
    details: [
      {
        en: "Developed responsive front-end features in JavaScript for stc web applications, building reusable UI components.",
        ar: "طورت Responsive UI بـ JavaScript لتطبيقات stc على الويب، مع Reusable Components.",
      },
      {
        en: "Developed and integrated enterprise APIs on Software AG webMethods Integration Server, connecting core internal systems.",
        ar: "طورت وربطت Enterprise APIs على webMethods Integration Server من Software AG تربط الـ Core Systems الداخلية.",
      },
      {
        en: "Built a chatbot with Node.js and Wit.ai NLU and handed it over, including documentation review and integration into stc systems.",
        ar: "بنيت Chatbot بـ Node.js و Wit.ai، وسلّمته مع الـ Documentation والربط مع أنظمة stc.",
      },
      {
        en: "Worked in Scrum teams (PSM I certified): sprint planning, estimation, and sprint reviews with stakeholders.",
        ar: "اشتغلت ضمن فرق Scrum (حاصل على PSM I): Sprint Planning و Estimation و Sprint Reviews مع الـ Stakeholders.",
      },
    ],
  },
];

export type CaseStudy = {
  title: Text;
  challenge: Text;
  approach: Text;
  steps: string[]; // diagram boxes, top to bottom
  focus: string; // the step to highlight in the diagram
};

// "Selected work": systems from the HUMAIN role, described from the CV.
export const caseStudies: CaseStudy[] = [
  {
    title: { en: "Multi-tenant platform", ar: "منصة Multi-tenant" },
    challenge: {
      en: "Serve several organizations from one codebase, without a separate copy per organization.",
      ar: "نخدم أكثر من جهة من نفس الـ Codebase، بدون نسخة منفصلة لكل جهة.",
    },
    approach: {
      en: "Per-tenant data isolation, theming and configuration, with Keycloak SSO and role-based access.",
      ar: "Data Isolation و Theming و Configuration لكل Tenant، مع Keycloak للـ SSO والـ Role-based Access.",
    },
    steps: ["Org A · Org B · Org C", "Next.js", "Keycloak SSO", "Spring Boot", "Tenant Isolation"],
    focus: "Tenant Isolation",
  },
  {
    title: { en: "Event-driven microservices", ar: "Event-driven Microservices" },
    challenge: {
      en: "Keep services independent, and run slow work outside the user's request.",
      ar: "خدمات مستقلة عن بعض، والشغل الثقيل يتنفذ خارج الـ Request.",
    },
    approach: {
      en: "Spring Boot microservices (clean/hexagonal) talking through RabbitMQ topic exchanges and durable queues, with JobRunr for background jobs.",
      ar: "Microservices بـ Spring Boot (Clean / Hexagonal) تتواصل عن طريق RabbitMQ (Topic Exchanges و Durable Queues)، و JobRunr للـ Background Jobs.",
    },
    steps: ["Spring Boot Services", "RabbitMQ Exchange", "Durable Queues", "Consumer Services"],
    focus: "RabbitMQ Exchange",
  },
  {
    title: { en: "Safe releases with feature flags", ar: "إطلاق آمن بالـ Feature Flags" },
    challenge: {
      en: "Ship often, without risky big-bang releases.",
      ar: "نطلق بشكل متكرر، بدون مخاطرة الإطلاقات الكبيرة.",
    },
    approach: {
      en: "A feature-flag system for gradual rollouts and A/B tests, on top of GitLab CI/CD and Prometheus/Grafana monitoring.",
      ar: "نظام Feature Flags للـ Progressive Rollouts والـ A/B Testing، مع GitLab CI/CD والـ Monitoring بـ Prometheus و Grafana.",
    },
    steps: ["Merge", "GitLab CI/CD", "Feature Flags", "Gradual Rollout", "Prometheus & Grafana"],
    focus: "Feature Flags",
  },
];

export const skillGroups: { title: Text; items: string[] }[] = [
  {
    title: { en: "Frontend", ar: "Frontend" },
    items: ["TypeScript", "React", "Next.js", "TanStack Query", "Zustand", "React Hook Form", "Zod", "shadcn/ui", "Tailwind CSS"],
  },
  {
    title: { en: "Backend", ar: "Backend" },
    items: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "OpenFeign", "Node.js", "REST APIs", "WebSocket"],
  },
  {
    title: { en: "Messaging & Caching", ar: "Messaging & Caching" },
    items: ["RabbitMQ", "NATS", "JobRunr", "Redis"],
  },
  {
    title: { en: "Data", ar: "Data" },
    items: ["PostgreSQL", "MySQL", "SQL", "Liquibase", "S3/MinIO"],
  },
  {
    title: { en: "Identity & Access", ar: "Identity & Access" },
    items: ["Keycloak (SSO, role-based access)"],
  },
  {
    title: { en: "DevOps & Monitoring", ar: "DevOps & Monitoring" },
    items: ["GitLab CI/CD", "Docker", "Prometheus", "Grafana"],
  },
  {
    title: { en: "Leadership", ar: "Leadership" },
    items: ["Team leadership", "Mentoring", "Code review", "Scrum (PSM I)", "Stakeholder communication"],
  },
];

export const certifications: { name: string; org: string; date: Text; url?: string }[] = [
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    org: "CNCF / Linux Foundation",
    date: { en: "Nov 2023", ar: "نوفمبر 2023" },
  },
  {
    name: "Intermediate JavaScript Nanodegree",
    org: "Udacity",
    date: { en: "Oct 2022", ar: "أكتوبر 2022" },
    url: "https://confirm.udacity.com/A23Y9ZJG",
  },
  {
    name: "Professional Scrum Master (PSM I)",
    org: "Scrum.org",
    date: { en: "Jul 2022", ar: "يوليو 2022" },
    url: "https://www.credly.com/badges/981a4f52-3525-48ea-a840-0d4dc49f3fcb/",
  },
  {
    name: "Mastering React",
    org: "Code with Mosh",
    date: { en: "Jan 2022", ar: "يناير 2022" },
  },
  {
    name: "Front-End Web Development Nanodegree",
    org: "Udacity",
    date: { en: "Nov 2020", ar: "نوفمبر 2020" },
    url: "https://confirm.udacity.com/AYHGV7J4",
  },
];

export const t = {
  en: {
    dir: "ltr" as const,
    metaTitle: "Saeed Aldosary",
    metaDesc:
      "Lead software engineer with almost 6 years of full-stack experience in Next.js, React and Spring Boot microservices.",
    nav: { work: "Work", experience: "Experience", skills: "Skills", certs: "Certifications", contact: "Contact" },
    theme: "Toggle theme",
    name: "Saeed Aldosary",
    initials: "SA",
    headline: "Lead Software Engineer at HUMAIN, with almost 6 years of full-stack experience.",
    intro:
      "I build enterprise platforms with Next.js and Spring Boot, and own architecture, code quality and delivery from design to production.",
    resume: "Resume",
    contactCta: "Get in touch",
    workTitle: "Selected work",
    workSub: "Systems I designed and built at HUMAIN.",
    challenge: "Challenge",
    approach: "Approach",
    experienceTitle: "Experience",
    skillsTitle: "Skills",
    certsTitle: "Certifications",
    verify: "Verify",
    showDetails: "Show full details",
    showSummary: "Show summary",
    contactTitle: "Contact",
    contactBody: "Have a role, a project or a question? Email me or connect on LinkedIn.",
  },
  ar: {
    dir: "rtl" as const,
    metaTitle: "Saeed Aldosary",
    metaDesc: "مهندس برمجيات Full-Stack، 6 سنوات خبرة في Next.js و React و Spring Boot.",
    nav: { work: "الأعمال", experience: "الخبرات", skills: "المهارات", certs: "الشهادات", contact: "تواصل" },
    theme: "الوضع الليلي / النهاري",
    name: "سعيد الدوسري",
    initials: "SA",
    headline: "قائد فريق هندسة البرمجيات في HUMAIN، و 6 سنوات خبرة في الـ Full-Stack.",
    intro:
      "أبني منصات Enterprise بـ Next.js و Spring Boot، ومسؤول عن الـ Architecture والـ Code Quality والـ Delivery من الـ Design إلى الـ Production.",
    resume: "السيرة الذاتية",
    contactCta: "تواصل معي",
    workTitle: "أبرز الأعمال",
    workSub: "أنظمة صممتها وبنيتها في HUMAIN.",
    challenge: "التحدي",
    approach: "الحل",
    experienceTitle: "الخبرة العملية",
    skillsTitle: "المهارات",
    certsTitle: "الشهادات",
    verify: "تحقق",
    showDetails: "عرض التفاصيل",
    showSummary: "عرض الملخص",
    contactTitle: "تواصل",
    contactBody: "عندك فرصة وظيفية أو مشروع أو استفسار؟ راسلني على الإيميل أو تواصل معي في LinkedIn.",
  },
};
