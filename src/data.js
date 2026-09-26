export const profile = {
  name: "徐天桐",
  nameLatin: "TIANTONG XU",
  role: "计算机专业本科生",
  location: "江苏 · 苏州",
  welcome: "欢迎来到徐天桐的个人网站",
  motto: "日拱一卒无有尽，功不唐捐终入海",
  intro:
    "我是一名计算机专业本科生，喜欢把问题拆清楚，再用模型、代码和工具把方案落地。做过研究复现、AI 系统整合与自动化工具，也参与过从实验验证到产品实现的完整流程。",
  introSecondary:
    "相比追逐概念，我更在意结果能否复现、系统是否好用，以及它能否解决真实问题；也享受用前端、后端和自动化，把复杂想法变成清晰可用的东西。",
  email: "hi@tiantong.dev",
  github: "https://github.com/your-github",
  locationText: "江苏苏州",
  availability: "开放合作 · 实习 / 科研 / 项目",
};

export const navLinks = [
  { id: "about", label: "关于" },
  { id: "work", label: "作品" },
  { id: "strengths", label: "优势" },
  { id: "journal", label: "日常" },
];

export const stats = [
  { value: "400+", label: "图像样本分析" },
  { value: "6", label: "视觉模型复现" },
  { value: "23", label: "文献精读计划" },
  { value: "4+", label: "独立 / 协作项目" },
];

export const projects = [
  {
    id: "yinghang",
    index: "01",
    visualLabel: "RESEARCH / AI SYSTEMS",
    title: "病理 AI 研究实践",
    subtitle: "从模型复现、实验验证到智能系统整合",
    description:
      "在影航与 GraphSAM 等项目中参与多智能体流程设计、论文复现和系统整合，围绕真实任务验证方法效果，并把实验能力组织成可持续迭代的工具。",
    tags: ["Multi-Agent", "Computer Vision", "Reproducible Research", "AI Systems"],
    accent: "#9fc4a3",
    motif: "cell",
  },
  {
    id: "codex-bridge",
    index: "02",
    visualLabel: "TOOLS / AUTOMATION",
    title: "飞书遥控 Codex 桥接",
    subtitle: "让日常工作流被 AI 远程驱动",
    description:
      "用 Python 搭建飞书与 Codex 之间的桥接器，支持消息触发、文档评论 @ 与定时任务，把重复劳动变成可自动化、可追踪的流程。",
    tags: ["Automation", "LLM", "Tooling", "Python"],
    accent: "#b7b19a",
    motif: "flow",
  },
  {
    id: "portfolio",
    index: "03",
    visualLabel: "DESIGN / FRONTEND",
    title: "个人作品集",
    subtitle: "把经历与作品整理成持续更新的窗口",
    description:
      "基于 React 与 Vite 构建个人网站，重新梳理项目、技能与阶段记录；通过清晰的信息层级、响应式布局和轻量动效，让内容更容易浏览和持续维护。",
    tags: ["React", "Vite", "Responsive Design", "UI Engineering"],
    accent: "#87a9a0",
    motif: "layers",
  },
];

export const strengths = [
  {
    index: "A",
    title: "研究复现",
    description: "从资料梳理、代码实现到对照实验，逐步确认方法是否成立。",
    detail: "论文复现 · 对照实验 · 结果分析",
    icon: "book",
  },
  {
    index: "B",
    title: "系统与工具",
    description: "把模型、Agent、前后端和自动化流程组合成可用工具。",
    detail: "React · Node · Python · 工作流自动化",
    icon: "layers",
  },
  {
    index: "C",
    title: "跨领域协作",
    description: "连接研究、产品与工程视角，把不同角色的需求推进到可交付结果。",
    detail: "需求拆解 · 团队协作 · 项目推进",
    icon: "network",
  },
  {
    index: "D",
    title: "持续学习",
    description: "通过阅读、项目实践和阶段复盘，形成可复用的方法与判断。",
    detail: "技术跟进 · 笔记沉淀 · 工程实践",
    icon: "pulse",
  },
];

export const timeline = [
  {
    date: "2026.08",
    title: "协作工具自动化",
    text: "搭建飞书与 Codex 的消息桥接，把远程触发、任务流转和日常记录串联起来。",
  },
  {
    date: "2026.07",
    title: "个人网站改版",
    text: "重新整理项目与阶段记录，尝试用更清晰的视觉层级呈现研究、工程与个人方向。",
  },
  {
    date: "2026.06",
    title: "研究项目复现",
    text: "完成从文献梳理、代码复现、对照实验到结果写作的协作闭环。",
  },
  {
    date: "2026.05",
    title: "多智能体系统实践",
    text: "参与 Agent 流程设计与模块整合，探索多角色协作在复杂任务中的用法。",
  },
];

export const footerCopy = {
  kicker: "一起做点有意义的事",
  heading: "如果你也喜欢把复杂想法做成有用的东西，",
  subheading: "欢迎聊聊技术、实习或合作。",
};
