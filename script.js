const translations = {
  zh: {
    meta: {
      title: "Qili Chen — 软件工程师与开源爱好者",
      description: "Qili Chen 的个人主页。软件工程师、开源爱好者，专注 Web、CLI、自动化与 AI 产品。",
    },
    nav: { about: "关于", work: "项目", stack: "技术栈", contact: "联系我" },
    hero: {
      eyebrow: "软件工程师 · 开源爱好者",
      title: "<span>把有用的想法，</span><em>做成真正好用的工具。</em>",
      intro: "你好，我是 <strong>Qili Chen</strong>。我喜欢把真实问题变成简单、可靠的产品——从 Web 应用到开发者工具，从自动化到 AI。",
      github: "查看 GitHub",
      explore: "浏览我的项目",
      scroll: "向下探索",
    },
    portrait: { based: "所在地", location: "中国 · 上海" },
    metrics: {
      repos: "公开仓库",
      languages: "核心语言",
      curiosity: "持续创造",
      note: "持续学习。<br />持续交付。",
    },
    about: {
      kicker: "关于我",
      title: "<span>工程是手段，</span><span>创造价值才是目的。</span>",
      p1: "我是一名软件工程师与开源爱好者，关注产品背后的真实需求。喜欢深入技术细节，也在意最终体验是否直观、顺手、值得信赖。",
      p2: "最近的工作横跨 DevOps CLI、React 产品与自动化工具。工作之外，我在旅行、持续写代码和保持运动之间寻找节奏。",
    },
    work: {
      kicker: "精选项目",
      title: "项目不是清单，<br /><em>是解决问题的轨迹。</em>",
    },
    filters: { all: "全部", backend: "后端" },
    projects: {
      workHour: "面向个人与团队的工时管理工具，支持大小周、节假日、OCR 截图导入与多端同步。",
      gitlab: "兼容老版本 GitLab 的零依赖命令行客户端，覆盖 MR、分支、Tag、Pipeline 与待办管理。",
      jumpserver: "轻量级 JumpServer 客户端，将服务器 Shell、文件管理和数据库临时凭证带进终端。",
      jenkins: "为日常发布流程设计的交互式工具：查 Job、选 Tag、触发构建并持续查看日志。",
      tiktik: "一个短视频分享体验，包含登录、视频浏览与上传，并通过 Sanity 管理内容。",
      exam: "基于 Gin 与 Gorm 构建的考试系统，探索清晰的前后端边界与工程化实践。",
    },
    stack: {
      kicker: "技术栈",
      title: "从后端到界面，<br /><em>选择合适的工具。</em>",
      intro: "技术会更新，但清晰的思考、可靠的实现和持续交付不会过时。",
      languages: "编程语言",
      web: "前端",
      data: "数据",
      devops: "工程化",
    },
    contact: { kicker: "有个想法？", title: "一起做点<br /><em>真正值得用的东西。</em>" },
    footer: { top: "回到顶部 ↑" },
    aria: {
      home: "返回首页",
      portrait: "Qili Chen 的 GitHub 头像",
      metrics: "个人概览",
      filters: "筛选项目",
    },
  },
  en: {
    meta: {
      title: "Qili Chen — Software Engineer & Open Source Enthusiast",
      description: "Qili Chen's personal portfolio — software engineering, open source, web products, developer tools, automation, and AI.",
    },
    nav: { about: "ABOUT", work: "WORK", stack: "STACK", contact: "LET'S TALK" },
    hero: {
      eyebrow: "SOFTWARE ENGINEER · OPEN SOURCE",
      title: "<span>Building useful tools,</span><em>one idea at a time.</em>",
      intro: "Hi, I'm <strong>Qili Chen</strong>. I turn real problems into simple, dependable products—from web experiences and developer tools to automation and AI.",
      github: "VIEW GITHUB",
      explore: "EXPLORE MY WORK",
      scroll: "SCROLL TO EXPLORE",
    },
    portrait: { based: "BASED IN", location: "SHANGHAI, CN" },
    metrics: {
      repos: "PUBLIC REPOSITORIES",
      languages: "CORE LANGUAGES",
      curiosity: "CURIOSITY FOR BUILDING",
      note: "Always learning.<br />Always shipping.",
    },
    about: {
      kicker: "ABOUT ME",
      title: "<span>Engineering is the craft.</span><span>Value is the point.</span>",
      p1: "I'm a software engineer and open-source enthusiast focused on the real needs behind products. I enjoy diving into technical details while making the final experience intuitive, useful, and trustworthy.",
      p2: "My recent work spans DevOps CLIs, React products, and automation tools. Away from work, I find my rhythm through travel, consistent coding, and exercise.",
    },
    work: {
      kicker: "SELECTED WORK",
      title: "Projects aren't a list.<br /><em>They're a trail of solved problems.</em>",
    },
    filters: { all: "All", backend: "Backend" },
    projects: {
      workHour: "A work-hour manager for individuals and teams, with alternating-week schedules, public holidays, OCR screenshot import, and cross-device sync.",
      gitlab: "A zero-dependency CLI compatible with legacy GitLab, covering merge requests, branches, tags, pipelines, and todos.",
      jumpserver: "A lightweight JumpServer client that brings server shells, file management, and temporary database credentials into the terminal.",
      jenkins: "An interactive release tool for finding jobs, selecting tags, triggering builds, and following logs from the terminal.",
      tiktik: "A short-video sharing experience with authentication, video browsing and uploads, backed by Sanity content management.",
      exam: "An examination system built with Gin and Gorm, exploring clean front-end/back-end boundaries and practical engineering patterns.",
    },
    stack: {
      kicker: "TOOLBOX",
      title: "From backend to interface,<br /><em>choose the right tool.</em>",
      intro: "Technology changes. Clear thinking, reliable implementation, and consistent delivery do not.",
      languages: "LANGUAGES",
      web: "WEB",
      data: "DATA",
      devops: "DEVOPS",
    },
    contact: { kicker: "HAVE AN IDEA?", title: "Let's build something<br /><em>worth using.</em>" },
    footer: { top: "BACK TO TOP ↑" },
    aria: {
      home: "Back to home",
      portrait: "GitHub portrait of Qili Chen",
      metrics: "Profile overview",
      filters: "Filter projects",
    },
  },
};

const getTranslation = (locale, path) =>
  path.split(".").reduce((value, key) => value?.[key], translations[locale]);

const languageToggle = document.querySelector(".language-toggle");
const descriptionMeta = document.querySelector('meta[name="description"]');

const detectLanguage = () => {
  try {
    const saved = localStorage.getItem("portfolio-language");
    if (saved === "zh" || saved === "en") return saved;
  } catch (_) {
    // Storage may be unavailable in strict privacy modes; browser language still works.
  }
  return (navigator.language || "en").toLowerCase().startsWith("zh") ? "zh" : "en";
};

const setLanguage = (locale, persist = false) => {
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.locale = locale;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(locale, element.dataset.i18n);
    if (typeof value === "string") element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = getTranslation(locale, element.dataset.i18nHtml);
    if (typeof value === "string") element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = getTranslation(locale, element.dataset.i18nAria);
    if (typeof value === "string") element.setAttribute("aria-label", value);
  });

  document.title = translations[locale].meta.title;
  descriptionMeta.setAttribute("content", translations[locale].meta.description);
  languageToggle.textContent = locale === "zh" ? "EN" : "中文";
  languageToggle.setAttribute("aria-label", locale === "zh" ? "Switch to English" : "切换到中文");

  if (persist) {
    try {
      localStorage.setItem("portfolio-language", locale);
    } catch (_) {
      // The selected language still applies for this page view.
    }
  }
};

languageToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.locale === "zh" ? "en" : "zh";
  setLanguage(next, true);
});

const filterButtons = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    projects.forEach((project) => {
      project.hidden = filter !== "All" && project.dataset.category !== filter;
    });
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(detectLanguage());
