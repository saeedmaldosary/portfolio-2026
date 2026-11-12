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
  points: Text[];
};

export const experience: Job[] = [
  {
    company: "HUMAIN",
    companyNote: { en: "formerly SCAI", ar: "سابقاً SCAI" },
    role: { en: "Lead Software Engineer", ar: "قائد فريق هندسة البرمجيات" },
    period: { en: "Aug 2023 – Present", ar: "أغسطس 2023 – الآن" },
    stack: "Next.js · Spring Boot · RabbitMQ · Keycloak · GitLab CI/CD",
    points: [
      {
        en: "Set technical direction, review code and mentor engineers, from Jira ticket to production.",
        ar: "Technical Direction و Code Reviews و Mentoring للفريق، من تذكرة Jira إلى الـ Production.",
      },
      {
        en: "Designed Spring Boot microservices and a multi-tenant architecture serving several organizations from one codebase.",
        ar: "صممت Microservices بـ Spring Boot و Multi-tenant Architecture تخدم أكثر من جهة من نفس الـ Codebase.",
      },
      {
        en: "Built a feature-flag system for gradual rollouts and A/B testing.",
        ar: "بنيت نظام Feature Flags للـ Progressive Rollouts والـ A/B Testing.",
      },
      {
        en: "Secured services with Keycloak (OAuth2/JWT) and fixed security audit findings.",
        ar: "أمّنت الخدمات بـ Keycloak (OAuth2/JWT) وعالجت ملاحظات الـ Security Audits.",
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
    metaTitle: "Saeed Aldosary",
    metaDesc:
      "Lead software engineer with almost 6 years of full-stack experience in Next.js, React and Spring Boot microservices.",
    nav: { experience: "Experience", skills: "Skills", certs: "Certifications", contact: "Contact" },
    theme: "Toggle theme",
    name: "Saeed Aldosary",
    initials: "SA",
    headline: "Lead Software Engineer with almost 6 years of full-stack experience.",
    intro:
      "I build enterprise platforms with Next.js and Spring Boot, and own architecture, code quality and delivery from design to production.",
    resume: "Resume",
    contactCta: "Get in touch",
    experienceTitle: "Experience",
    educationTitle: "Education",
    skillsTitle: "Skills",
    certsTitle: "Certifications",
    verify: "Verify",
    contactTitle: "Contact",
    contactBody: "Have a role, a project or a question? Email me or connect on LinkedIn.",
  },
  ar: {
    dir: "rtl" as const,
    metaTitle: "Saeed Aldosary",
    metaDesc: "مهندس برمجيات Full-Stack، 6 سنوات خبرة في Next.js و React و Spring Boot.",
    nav: { experience: "الخبرات", skills: "المهارات", certs: "الشهادات", contact: "تواصل" },
    theme: "الوضع الليلي / النهاري",
    name: "سعيد الدوسري",
    initials: "SA",
    headline: "قائد فريق هندسة البرمجيات، و 6 سنوات خبرة في الـ Full-Stack.",
    intro:
      "أبني منصات Enterprise بـ Next.js و Spring Boot، ومسؤول عن الـ Architecture والـ Code Quality والـ Delivery من الـ Design إلى الـ Production.",
    resume: "السيرة الذاتية",
    contactCta: "تواصل معي",
    experienceTitle: "الخبرة العملية",
    educationTitle: "التعليم",
    skillsTitle: "المهارات",
    certsTitle: "الشهادات",
    verify: "تحقق",
    contactTitle: "تواصل",
    contactBody: "عندك فرصة وظيفية أو مشروع أو استفسار؟ راسلني على الإيميل أو تواصل معي في LinkedIn.",
  },
};
