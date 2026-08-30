export const profile = {
  name: "徐天桐",
  nameLatin: "TIANTONG XU",
  role: "计算机专业本科生",
  location: "江苏 · 苏州",
  welcome: "欢迎来到徐天桐的个人网站",
  motto: "日拱一卒无有尽，功不唐捐终入海",
  intro:
    "我是一名关注数字病理与计算机视觉的本科生。目前主持「影航 YingHang」病理 AI 平台，负责多智能体框架设计与系统整合；同时参与 GraphSAM 的论文复现与写作，长期跟进细胞核实例分割与病理基础模型。",
  introSecondary:
    "我习惯从「论文 → 代码 → 指标」逐层验证一个想法是否真正成立，也享受用前端、后端与自动化工具，把复杂研究变成清晰、可用的东西。",
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
  { id: "contact", label: "联系" },
];

export const stats = [
  { value: "400+", label: "病理 WSI 病例" },
  { value: "6", label: "分割模型复现" },
  { value: "23", label: "文献精读计划" },
  { value: "4+", label: "独立 / 协作项目" },
];

export const projects = [
  {
    id: "yinghang",
    index: "01",
    title: "影航 YingHang",
    subtitle: "面向病理图像的多智能体因果验证与可解释性研究",
    description:
      "一个由多智能体协作驱动的病理诊断平台，让模型不仅能给出结论，还能解释为什么。作为项目负责人，我负责整体架构、Agent 流程设计与系统整合。",
    tags: ["Multi-Agent", "WSI", "Explainable AI", "Medical AI"],
    accent: "#9fc4a3",
    motif: "cell",
  },
  {
    id: "graphsam",
    index: "02",
    title: "GraphSAM",
    subtitle: "图引导的细胞核实例分割",
    description:
      "将图结构与 SAM 结合，探索更结构化的分割范式。完成论文精读、代码复现、训练实验与 CVPR 投稿全流程，熟悉从研究问题到写作回应的完整闭环。",
    tags: ["Graph Neural Network", "SAM", "Nuclei Segmentation"],
    accent: "#d4a25c",
    motif: "graph",
  },
  {
    id: "reproduce",
    index: "03",
    title: "病理分割复现",
    subtitle: "HoVer-Net · CellViT · CA-SAM2 · SAM2",
    description:
      "围绕细胞核实例分割建立可复现的模型基准，在统一数据与指标下验证多个方法的真实性能，沉淀训练记录与实验报告。",
    tags: ["Instance Segmentation", "PyTorch", "Benchmark"],
    accent: "#87a9a0",
    motif: "layers",
  },
  {
    id: "bridge",
    index: "04",
    title: "飞书遥控 Codex 桥接",
    subtitle: "让日常工作流被 AI 远程驱动",
    description:
      "用 Python 搭建飞书与 Codex 之间的桥接器，支持消息触发、文档评论 @ 与定时任务，把重复劳动变成可自动化、可追踪的流程。",
    tags: ["Automation", "LLM", "Tooling", "Python"],
    accent: "#b7b19a",
    motif: "flow",
  },
];

export const strengths = [
  {
    index: "A",
    title: "研究复现",
    description: "从论文到代码、再到指标，逐层验证想法的真实边界。",
    detail: "HoVer-Net / SAM2 / CA-SAM2 / CellViT",
    icon: "microscope",
  },
  {
    index: "B",
    title: "系统整合",
    description: "把模型、Agent 与交互界面拼成一个可用的产品。",
    detail: "React · Node · Python · 飞书自动化",
    icon: "layers",
  },
  {
    index: "C",
    title: "跨学科协作",
    description: "在计算机与临床医学之间翻译需求，并推动项目落地。",
    detail: "数字病理 · 多智能体诊断",
    icon: "network",
  },
  {
    index: "D",
    title: "持续学习",
    description: "用周报和文献清单，把散点阅读变成稳定积累。",
    detail: "病理周报 · 论文精读 · 实验记录",
    icon: "pulse",
  },
];

export const timeline = [
  {
    date: "2026.08",
    title: "病理模型追踪",
    text: "跟进 NuLite、FreqPath-Net 等新方法，整理轻量化与多模态两条落地路径。",
  },
  {
    date: "2026.08",
    title: "蒸馏趋势判断",
    text: "研究 DistillPath 与 SmartStu，把知识蒸馏纳入平台轻量化选型。",
  },
  {
    date: "2026.07",
    title: "数据集盘点",
    text: "整理 19 项病理数据集与 10 项通用视觉数据集，建立统一评测清单。",
  },
  {
    date: "2026.06",
    title: "GraphSAM 复现",
    text: "完成 prompter / segmentor 训练与指标对照，梳理拒稿原因与下一版计划。",
  },
  {
    date: "2026.05",
    title: "影航平台启动",
    text: "搭建项目骨架、多 Agent 流程与飞书协作工作流。",
  },
];

export const footerCopy = {
  kicker: "一起做点有意义的事",
  heading: "如果你也关心 AI 如何真正进入临床，",
  subheading: "欢迎聊聊想法、实习或合作。",
};
