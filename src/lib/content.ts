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
  points: Text[];
};

export const experience: Job[] = [
  {
    company: "HUMAIN",
    companyNote: { en: "formerly SCAI", ar: "سابقاً SCAI" },
    role: { en: "Lead Software Engineer", ar: "قائد فريق هندسة البرمجيات" },
    period: { en: "Aug 2023 – Present", ar: "أغسطس 2023 – الآن" },
    points: [
      {
        en: "Lead a team of 3 engineers: set technical direction, run code reviews, mentor, and own delivery from Jira ticket to production.",
        ar: "أقود فريق من 3 مهندسين: Technical Direction و Code Reviews و Mentoring، ومسؤول عن الـ Delivery من تذكرة Jira إلى الـ Production.",
      },
      {
        en: "Led architecture and development of enterprise web applications in Next.js, improving performance and scalability.",
        ar: "قدت تصميم وتطوير تطبيقات Enterprise بـ Next.js، وحسّنت الـ Performance والـ Scalability.",
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
    points: [
      {
        en: "Developed responsive front-end features in JavaScript for stc web applications, building reusable UI components.",
        ar: "طورت Responsive UI بـ JavaScript لتطبيقات stc على الويب، مع Reusable Components.",
      },
      {
        en: "Developed and integrated enterprise APIs on Software AG webMethods Integration Server, connecting core internal systems.",
        ar: "طورت وربطت Enterprise APIs على webMethods Integration Server من Software AG تربط الـ Core Systems الداخلية.",
      },
      {
        en: "Built a chatbot with Node.js and Wit.ai NLU and led its handover, including documentation review and integration into stc systems.",
        ar: "بنيت Chatbot بـ Node.js و Wit.ai، وقدت الـ Handover مع الـ Documentation والربط مع أنظمة stc.",
      },
      {
        en: "Worked in Scrum teams (PSM I certified): sprint planning, estimation, and sprint reviews with stakeholders.",
        ar: "اشتغلت ضمن فرق Scrum (حاصل على PSM I): Sprint Planning و Estimation و Sprint Reviews مع الـ Stakeholders.",
      },
    ],
  },
];

export const education = {
  school: { en: "Imam Muhammad Ibn Saud Islamic University", ar: "جامعة الإمام محمد بن سعود الإسلامية" },
  degree: { en: "B.Sc. in Information Systems", ar: "بكالوريوس نظم المعلومات" },
  period: { en: "Feb 2016 – Dec 2020", ar: "فبراير 2016 – ديسمبر 2020" },
};

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
    metaTitle: "Saeed Aldosary — Lead Software Engineer",
    metaDesc:
      "Lead software engineer with almost 6 years of full-stack experience in Next.js, React and Spring Boot microservices. Based in Riyadh.",
    nav: { experience: "Experience", skills: "Skills", certs: "Certifications", contact: "Contact" },
    theme: "Toggle theme",
    hello: "Hi, I'm",
    name: "Saeed Aldosary",
    initials: "SA",
    shortRole: "Lead Software Engineer",
    role: "Lead Software Engineer · Full-Stack",
    location: "Riyadh, Saudi Arabia",
    summary:
      "Lead engineer with almost 6 years of full-stack experience building enterprise web platforms with Next.js, React, and Spring Boot microservices. Currently leading a team of 3 engineers, owning architecture, code quality, and delivery from design to production. Strong in event-driven systems, application security, and CI/CD.",
    resume: "Resume",
    contactCta: "Get in touch",
    experienceTitle: "Experience",
    educationTitle: "Education",
    skillsTitle: "Skills",
    certsTitle: "Certifications",
    verify: "Verify",
    contactTitle: "Get in touch",
    contactBody: "Have a role, a project or a question? Email me or connect on LinkedIn.",
  },
  ar: {
    dir: "rtl" as const,
    metaTitle: "سعيد الدوسري — قائد فريق هندسة البرمجيات",
    metaDesc: "مهندس برمجيات Full-Stack بخبرة قرابة 6 سنوات في Next.js و React و Spring Boot، أقود فريق تطوير في الرياض.",
    nav: { experience: "الخبرات", skills: "المهارات", certs: "الشهادات", contact: "تواصل" },
    theme: "الوضع الليلي / النهاري",
    hello: "هلا، أنا",
    name: "سعيد الدوسري",
    initials: "س",
    shortRole: "Lead Software Engineer",
    role: "قائد فريق هندسة البرمجيات · Full-Stack",
    location: "الرياض، السعودية",
    summary:
      "مهندس برمجيات Full-Stack بخبرة قرابة 6 سنوات في بناء منصات Enterprise بـ Next.js و React و Spring Boot Microservices. أقود حالياً فريق من 3 مهندسين، ومسؤول عن الـ Architecture والـ Code Quality والـ Delivery من الـ Design إلى الـ Production. متخصص في Event-driven Systems و Application Security و CI/CD.",
    resume: "السيرة الذاتية",
    contactCta: "تواصل معي",
    experienceTitle: "الخبرة العملية",
    educationTitle: "التعليم",
    skillsTitle: "المهارات",
    certsTitle: "الشهادات",
    verify: "تحقق",
    contactTitle: "تواصل معي",
    contactBody: "عندك فرصة وظيفية أو مشروع أو استفسار؟ راسلني على الإيميل أو تواصل معي في LinkedIn.",
  },
};
