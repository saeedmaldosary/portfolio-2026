export type Lang = "en" | "ar";

export const links = {
  github: "https://github.com/saeedmaldosary",
  linkedin: "https://linkedin.com/in/smaldosary",
  email: "mailto:Saeedmaldosary@gmail.com",
  emailText: "Saeedmaldosary@gmail.com",
  resume:
    "https://drive.google.com/file/d/1ATLhgErIMLo7KlIoAVgJGGbOORyH6k9j/view?usp=sharing",
};

export const skillGroups = [
  {
    key: "frontend",
    items: ["TypeScript", "React", "Next.js", "Vue", "Nuxt", "Tailwind CSS"],
  },
  {
    key: "backend",
    items: ["Java", "Spring Boot", "Go", "Node.js", "Python", "REST APIs"],
  },
  {
    key: "platform",
    items: ["NATS", "WebSockets", "SQL", "Docker", "Git", "webMethods"],
  },
] as const;

export const projects = [
  {
    name: "FlowLearn",
    repo: "https://github.com/saeedmaldosary/message-craft",
    tags: ["NATS", "Spring Boot", "Next.js", "STOMP"],
    desc: {
      en: "Full-stack platform demonstrating enterprise message-queue patterns — real-time messaging, async processing and resilient delivery over SockJS + STOMP.",
      ar: "منصة متكاملة تستعرض أنماط طوابير الرسائل على مستوى المؤسسات — رسائل لحظية، ومعالجة غير متزامنة، وتوصيل موثوق عبر SockJS و STOMP.",
    },
    featured: true,
  },
  {
    name: "Go JWT Auth",
    repo: "https://github.com/saeedmaldosary/Go-Authentication-JWT",
    tags: ["Go", "JWT", "REST"],
    desc: {
      en: "Modular token-based authentication service in Go: sign-up, login and JWT validation, built to drop into existing services.",
      ar: "خدمة مصادقة مبنية بلغة Go باستخدام JWT: تسجيل ودخول والتحقق من الرموز، مصممة لتندمج بسهولة مع الخدمات الحالية.",
    },
  },
  {
    name: "RSS Aggregator",
    repo: "https://github.com/saeedmaldosary/Go-RSS-Aggregator",
    tags: ["Go", "PostgreSQL", "API"],
    desc: {
      en: "API for collecting RSS feeds with user accounts, feed management and per-user subscriptions.",
      ar: "واجهة برمجية لتجميع خلاصات RSS مع حسابات للمستخدمين وإدارة الخلاصات والاشتراكات.",
    },
  },
  {
    name: "Nuxt Mapbox",
    repo: "https://github.com/saeedmaldosary/nuxt3-mapbox",
    tags: ["Nuxt 3", "Vue", "Mapbox"],
    desc: {
      en: "Interactive maps in Nuxt 3 — draw polygons and animate routes on Mapbox.",
      ar: "خرائط تفاعلية باستخدام Nuxt 3 — رسم المضلعات وتحريك المسارات على Mapbox.",
    },
  },
  {
    name: "Spring Quiz",
    repo: "https://github.com/saeedmaldosary/spring-quiz-app",
    tags: ["Java", "Spring Boot"],
    desc: {
      en: "Quiz application backend built with Spring Boot.",
      ar: "خلفية تطبيق اختبارات مبنية باستخدام Spring Boot.",
    },
  },
];

export const certifications = [
  {
    org: "Scrum.org",
    name: { en: "Professional Scrum Master", ar: "Professional Scrum Master" },
    url: "https://www.credly.com/badges/981a4f52-3525-48ea-a840-0d4dc49f3fcb/",
  },
  {
    org: "Software AG",
    name: {
      en: "Certified webMethods Integration Associate",
      ar: "Certified webMethods Integration Associate",
    },
    url: "https://www.credly.com/badges/8b34d82f-2d79-4f5a-8aa4-c7c76f158d51/linked_in_profile",
  },
  {
    org: "API Academy",
    name: { en: "API Designer", ar: "API Designer" },
    url: "https://drive.google.com/file/d/1KM065zcvTLEuT02AJNxkZDAFosnH5zZ1/view?usp=sharing",
  },
  {
    org: "Udacity",
    name: {
      en: "Intermediate JavaScript Nanodegree",
      ar: "Intermediate JavaScript Nanodegree",
    },
    url: "https://confirm.udacity.com/A23Y9ZJG",
  },
  {
    org: "Udacity",
    name: {
      en: "Front-End Web Developer Nanodegree",
      ar: "Front-End Web Developer Nanodegree",
    },
    url: "https://confirm.udacity.com/AYHGV7J4",
  },
];

export const t = {
  en: {
    dir: "ltr" as const,
    metaTitle: "Saeed Aldosary — Software Engineer",
    metaDesc:
      "Saeed Aldosary is a full-stack software engineer building real-time systems, APIs and modern web apps.",
    nav: { about: "About", work: "Work", skills: "Skills", certs: "Certifications", contact: "Contact" },
    switchLang: "العربية",
    status: "Open to interesting projects",
    hello: "Hi, I'm",
    name: "Saeed Aldosary",
    role: "Software Engineer · Full-Stack Developer",
    intro:
      "I design and build reliable software end to end — from real-time messaging systems and APIs to fast, polished web interfaces.",
    resume: "Resume",
    contactCta: "Get in touch",
    aboutTitle: "About",
    aboutBody: [
      "I'm a software engineer with deep experience across the full application lifecycle — understanding the problem, designing the solution, and shipping it to production.",
      "My work spans Java/Spring Boot and Go on the backend, TypeScript with React, Next.js and Vue on the frontend, and event-driven integration with NATS and webMethods.",
    ],
    stats: [
      { value: "5+", label: "Certifications" },
      { value: "50+", label: "Repositories" },
      { value: "6+", label: "Languages & runtimes" },
    ],
    workTitle: "Selected work",
    workSub: "A few things I've built recently.",
    viewCode: "View code",
    allRepos: "All repositories",
    skillsTitle: "Skills",
    skillGroups: { frontend: "Frontend", backend: "Backend", platform: "Integration & tools" },
    certsTitle: "Certifications",
    verify: "Verify",
    contactTitle: "Let's build something",
    contactBody: "Have a project, a role or an idea? My inbox is open — I'd love to hear from you.",
    footer: "Built with Next.js & shadcn/ui.",
    theme: "Toggle theme",
  },
  ar: {
    dir: "rtl" as const,
    metaTitle: "سعيد الدوسري — مهندس برمجيات",
    metaDesc: "سعيد الدوسري مهندس برمجيات متكامل يبني أنظمة لحظية وواجهات برمجية وتطبيقات ويب حديثة.",
    nav: { about: "عني", work: "أعمالي", skills: "المهارات", certs: "الشهادات", contact: "تواصل" },
    switchLang: "English",
    status: "متاح للمشاريع المميزة",
    hello: "مرحباً، أنا",
    name: "سعيد الدوسري",
    role: "مهندس برمجيات · مطور متكامل",
    intro: "أصمم وأبني برمجيات موثوقة من البداية للنهاية — من أنظمة الرسائل اللحظية والواجهات البرمجية إلى واجهات ويب سريعة ومتقنة.",
    resume: "السيرة الذاتية",
    contactCta: "تواصل معي",
    aboutTitle: "عني",
    aboutBody: [
      "مهندس برمجيات بخبرة واسعة في دورة حياة التطبيقات كاملة — من فهم المشكلة وتصميم الحل إلى إطلاقه في بيئة الإنتاج.",
      "أعمل على الخلفية باستخدام Java و Spring Boot و Go، وعلى الواجهات باستخدام TypeScript مع React و Next.js و Vue، وفي التكامل المعتمد على الأحداث باستخدام NATS و webMethods.",
    ],
    stats: [
      { value: "+5", label: "شهادات" },
      { value: "+50", label: "مستودع" },
      { value: "+6", label: "لغات وبيئات" },
    ],
    workTitle: "أعمال مختارة",
    workSub: "بعض ما بنيته مؤخراً.",
    viewCode: "عرض الكود",
    allRepos: "كل المستودعات",
    skillsTitle: "المهارات",
    skillGroups: { frontend: "الواجهات", backend: "الخلفية", platform: "التكامل والأدوات" },
    certsTitle: "الشهادات",
    verify: "تحقق",
    contactTitle: "لنبنِ شيئاً معاً",
    contactBody: "عندك مشروع أو فرصة أو فكرة؟ يسعدني أسمع منك.",
    footer: "مبني باستخدام Next.js و shadcn/ui.",
    theme: "تبديل المظهر",
  },
} as const;
