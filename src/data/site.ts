// ============================================================
//  MINDLab Website — Single Source of Truth
//  Edit this file to update all content on the site.
//  No coding knowledge required beyond basic text editing.
// ============================================================

// ──────────────────────────────────────────────────────────
//  LAB INFO
// ──────────────────────────────────────────────────────────
export const lab = {
  name: "MIND Lab",
  fullName: "Machine Intelligence and Data (MIND) Lab",
  university: "Boise State University",
  department: "Department of Computer Science",
  college: "College of Engineering",
  tagline: "Trustworthy AI Systems for the Real World",
  description:
    "We develop machine learning and data science methods that are trustworthy, personalized, and socially intelligent — with applications in healthcare, education, and fact-checking. Our research spans generative AI, multimodal learning, and LLM agents.",
  email: "mindlab20250820@gmail.com",
  phone: "(208) 426-5766",
  address: "1910 University Dr, Boise, ID 83725",
  room: "City Center Plaza (CCP), Room 255",
  github: "https://github.com/MINDLab25",
  twitter: "https://twitter.com/",
  linkedin: "https://www.linkedin.com", // TODO: add lab LinkedIn URL
  googleScholar: "",
  joinLink:
    "https://mail.google.com/mail/?view=cm&to=mindlab20250820@gmail.com&su=Prospective%20Student%20Inquiry",
};

// ──────────────────────────────────────────────────────────
//  HOME PAGE
// ──────────────────────────────────────────────────────────
export const home = {
  stats: [
    { value: "30+", label: "Publications" },
    { value: "—", label: "Lab Members" }, // TODO: fill in
    { value: "20", label: "h-index" },
    { value: "1", label: "Year at BSU" },
  ],
  // IDs referencing items in the publications and news arrays below
  featuredPublicationIds: [
    "multimodal-llms-synthetic-participants-2026",
    "conspiracy-theories-icwsm-2026",
    "chatbot-influence-arxiv-2025",
  ],
  featuredNewsIds: ["icwsm-2026-papers", "wsdm-2026-dc", "bsu-welcome-2025"],
};

// ──────────────────────────────────────────────────────────
//  RESEARCH AREAS
// ──────────────────────────────────────────────────────────
export const researchAreas = [
  {
    id: "trustworthy-ai",
    title: "Trustworthy Generative AI",
    description:
      "Developing methods to improve the factual accuracy and reliability of large language models, with a focus on hallucination detection, grounding, and fact-checking at scale.",
    icon: "🛡️",
    memberIds: ["xinyi-zhou"],
  },
  {
    id: "personalized-llms",
    title: "Personalized & Socially Intelligent LLMs",
    description:
      "Building language models that adapt to individual users and social contexts — personalizing responses, modeling user intent, and navigating complex interpersonal dynamics.",
    icon: "🤝",
    memberIds: ["xinyi-zhou"],
  },
  {
    id: "multimodal-ml",
    title: "Multimodal Machine Learning",
    description:
      "Learning rich representations across text, images, and structured data to support reasoning tasks that span multiple modalities — from medical imaging to social media.",
    icon: "🌐",
    memberIds: ["xinyi-zhou", "prabal-shrestha"],
  },
  {
    id: "llm-agents",
    title: "LLM Agents & Tool-Use",
    description:
      "Studying how large language models can act as autonomous agents that plan, use external tools, and complete multi-step tasks reliably and safely.",
    icon: "🤖",
    memberIds: ["xinyi-zhou"],
  },
  {
    id: "applied-ai",
    title: "Applied AI in High-Stakes Domains",
    description:
      "Translating research into practical systems for healthcare, education, and fact-checking — domains where accuracy, fairness, and interpretability are non-negotiable.",
    icon: "🏥",
    memberIds: ["xinyi-zhou", "benjamin-lee-peterson"],
  },
];

// ──────────────────────────────────────────────────────────
//  TEAM
// ──────────────────────────────────────────────────────────

export type TeamRole = "pi" | "postdoc" | "phd" | "ms" | "undergrad" | "alumni";

export interface TeamMember {
  id: string;
  name: string;
  role: TeamRole;
  /** Displayed title (e.g. "Assistant Professor", "PhD Student") */
  title: string;
  /** Filename inside /public/images/team/ — leave "" to show initials avatar */
  photo: string;
  bio: string;
  interests: string[];
  links: {
    email?: string;
    website?: string;
    github?: string;
    twitter?: string;
    googleScholar?: string;
    linkedin?: string;
  };
  /** Year they joined the lab */
  joinYear?: number;
  /** Alumni only: year they graduated */
  gradYear?: number;
  /** Alumni only: where they are now */
  currentPosition?: string;
}

export const team: TeamMember[] = [
  // ── Principal Investigator ──────────────────────────────
  {
    id: "xinyi-zhou",
    name: "Dr. Xinyi Zhou",
    role: "pi",
    title: "Assistant Professor of Computer Science",
    photo: "",
    bio: "Dr. Xinyi Zhou is an Assistant Professor of Computer Science at Boise State University, where she directs the MIND Lab. She earned her Ph.D. in Computer and Information Science and Engineering from Syracuse University (2022), advised by Reza Zafarani, and completed a postdoctoral fellowship at the University of Washington's Paul G. Allen School of Computer Science & Engineering, working with Amy X. Zhang and Tim Althoff. Her research develops trustworthy, personalized, and socially intelligent AI systems with applications in healthcare, education, and misinformation detection. She was named a Rising Star in EECS by MIT (2024) and a Rising Star in Data Science by UCSD, UChicago, and Stanford (2024).",
    interests: [
      "Trustworthy Generative AI",
      "Personalized LLMs",
      "Multimodal Machine Learning",
      "LLM Agents",
      "Applied AI in Healthcare & Education",
    ],
    links: {
      email: "xinyizhou@boisestate.edu",
      website: "https://xinyizhou.xyz",
      googleScholar: "https://scholar.google.com/citations?user=9U_Ge4MAAAAJ",
    },
    joinYear: 2025,
  },

  // ── PhD Students ────────────────────────────────────────
  // TODO: replace with real lab members
  {
    id: "benjamin-lee-peterson",
    name: "Benjamin Lee Peterson",
    role: "phd",
    title: "PhD Student in Computer Science",
    photo: "",
    bio: `Ben Peterson is a PhD student in Computer Science in the School of Computing at Boise State University. His research centers on human-centered AI, with a particular focus on AI in education and the design of educational chatbots. He holds a bachelor's degree in Computer Engineering from Brigham Young University.
Ben's work connects research, teaching, and service around a common thread: how people learn with and about AI. Alongside his doctoral studies, he serves as an IT Systems Administrator in the Computer Science department at Boise State and teaches as an adjunct professor, leading sections of CS 121 and CS 153. Beyond the university, he is Lead Coach for local FIRST Tech Challenge (FTC) and FIRST LEGO League teams, and he serves on the K-12 AI Standards writing committee for the State of Idaho, helping shape how students across the state learn about artificial intelligence.`,
    interests: ["Human Centered AI"],
    links: {
      email: "benjaminpeterson@boisestate.edu",
      github: "https://github.com/blpeter",
      linkedin: "https://www.linkedin.com/in/ben-peterson-4901646",
      googleScholar:
        "https://scholar.google.com/citations?user=fWvBixgAAAAJ&hl=en",
    },
    joinYear: 2025,
  },
  {
    id: "phd-student-placeholder-1",
    name: "PHD Student (Coming Soon)",
    role: "phd",
    title: "PHD Student",
    photo: "",
    bio: "This profile is a placeholder. Real lab member info will be added here soon.",
    interests: ["[Research Interest]"],
    links: {
      email: "benjaminpeterson@boisestate.edu",
      github: "https://github.com/blpeter",
      linkedin: "https://www.linkedin.com/in/ben-peterson-4901646",
      googleScholar:
        "https://scholar.google.com/citations?user=fWvBixgAAAAJ&hl=en",
    },
    joinYear: undefined,
  },

  // ── MS Students ─────────────────────────────────────────
  // TODO: replace with real lab members
  {
    id: "ms-student-placeholder-1",
    name: "MS Student (Coming Soon)",
    role: "ms",
    title: "MS Student",
    photo: "",
    bio: "This profile is a placeholder. Real lab member info will be added here soon.",
    interests: ["[Research Interest]"],
    links: {
      email: "benjaminpeterson@boisestate.edu",
      github: "https://github.com/blpeter",
      linkedin: "https://www.linkedin.com/in/ben-peterson-4901646",
      googleScholar:
        "https://scholar.google.com/citations?user=fWvBixgAAAAJ&hl=en",
    },
    joinYear: undefined,
  },
  {
    id: "prabal-shrestha",
    name: "Prabal Shrestha",
    role: "ms",
    title: "MS Student in Computer Science",
    photo: "",
    bio: "MS CS student at Boise State University researching multimodal LLMs, video-based fact-checking, and LLM-powered human simulation. Interested in how AI systems perceive and reason about video content, and in building systems that leverage language and vision models for real-world information integrity.",
    interests: ["Multimodal Machine Learning", "LLM Agents"],
    links: {
      email: "prabalshrestha2@gmail.com",
      github: "github.com/prabalshrestha",
      linkedin: "linkedin.com/in/prabalshrestha",
    },
    joinYear: 2025,
  },

  // ── Undergraduate Researchers ───────────────────────────
  // TODO: replace with real lab members
  {
    id: "undergrad-placeholder-1",
    name: "Undergraduate Researcher (Coming Soon)",
    role: "undergrad",
    title: "Undergraduate Researcher",
    photo: "",
    bio: "This profile is a placeholder. Real lab member info will be added here soon.",
    interests: ["[Research Interest]"],
    links: {},
    joinYear: undefined,
  },
];

// ──────────────────────────────────────────────────────────
//  PUBLICATIONS
// ──────────────────────────────────────────────────────────

export type PubType = "conference" | "journal" | "workshop" | "preprint";

export interface Publication {
  id: string;
  title: string;
  /** List authors by full name; lab members will be auto-bolded if names match */
  authors: string[];
  venue: string;
  year: number;
  type: PubType;
  abstract: string;
  links: {
    pdf?: string;
    code?: string;
    project?: string;
    slides?: string;
    demo?: string;
  };
  tags: string[];
  /** Show on home page */
  featured: boolean;
  /** e.g. "Oral", "Spotlight", "Best Paper Award" */
  award?: string;
}

export const publications: Publication[] = [
  // ── 2026 ────────────────────────────────────────────────
  {
    id: "multimodal-llms-synthetic-participants-2026",
    title:
      "Multimodal Large Language Models as Synthetic Participants in Video-Based Studies: An Evaluation",
    authors: [
      "Prabal Shrestha",
      "Bohan Jiang",
      "Haoning Xue",
      "Huan Liu",
      "Xinyi Zhou",
    ],
    venue:
      "Workshop on Large Language Models for Social Reasoning and Simulation (SocialLLM) @ ICWSM",
    year: 2026,
    type: "workshop",
    abstract:
      "Multimodal large language models (MLLMs) have shown strong performance on objective tasks such as video understanding and reasoning. However, it remains unclear whether they can approximate subjective human responses, which depend not only oncontent comprehension but also on individuals’ social contexts. To address this gap, we evaluate MLLMs as synthetic participants in an emerging task: assessing perceived sensory engagement with short videos. Grounded in the Perceived Message Sensation Value (PMSV) framework, we compare ratings from recruited human participants and profile-conditioned MLLM simulations (n = 673) using a 17-item scale measuring emotional arousal, dramatic impact, and novelty. We find that even leading MLLMs (Gemini 3 Flash and Qwen 3 Omni) show limited agreement with human participants. The models exhibit distinct downward mean-shift and central-tendency biases in their rating distributions. They both introduce and flatten subgroup differences, while showing inconsistent sensitivity to participant profiles. Prompting strategies affect these metrics differently, modestly improving some aspects while worsening others. These results highlight both the challenges and opportunities of developing MLLMs as synthetic participants in videobased research.",
    links: {
      pdf: "https://workshop-proceedings.icwsm.org/pdf/2026_66.pdf",
      code: "https://github.com/MINDLab25/mllmhuman-simulation-eval",
    },
    tags: ["Multimodal ML", "LLMs", "Human Simulation", "Video Understanding"],
    featured: true,
  },
  {
    id: "conspiracy-theories-icwsm-2026",
    title:
      "Can Large Language Models Assess the Social Impact of Conspiracy Theories?",
    authors: [
      "Bohan Jiang",
      "Dawei Li",
      "Zhen Tan",
      "Xinyi Zhou",
      "Ashwin Rao",
      "Kristina Lerman",
      "H. Russell Bernard",
      "Huan Liu",
    ],
    venue: "AAAI International Conference on Web and Social Media (ICWSM)",
    year: 2026,
    type: "conference",
    abstract: "[Abstract coming soon.]",
    links: {
      pdf: "https://arxiv.org/abs/2412.07019",
    },
    tags: ["LLMs", "Misinformation", "Social Media", "Conspiracy Theories"],
    featured: false,
  },
  {
    id: "chatgpt-info-seeking-sr-2026",
    title:
      "Users' Prompting Strategies and ChatGPT's Contextual Adaptation Shape Conversational Information-Seeking Experiences",
    authors: [
      "Haoning Xue",
      "Yoo Jung Oh",
      "Xinyi Zhou",
      "Xinyu Zhang",
      "Berit Oxley",
    ],
    venue: "Scientific Reports",
    year: 2026,
    type: "journal",
    abstract: "[Abstract coming soon.]",
    links: {
      pdf: "https://arxiv.org/abs/2509.25513",
    },
    tags: ["LLMs", "Human-AI Interaction", "Information Seeking"],
    featured: false,
  },

  // ── 2025 (lab founded 2025-08-20) ───────────────────────
  {
    id: "chatbot-influence-arxiv-2025",
    title:
      "A Crowdsourced Study of ChatBot Influence in Value-Driven Decision Making Scenarios",
    authors: [
      "Anthony Wise",
      "Xinyi Zhou",
      "Martin Reimann",
      "Anind Dey",
      "Leilani Battle",
    ],
    venue: "arXiv preprint",
    year: 2025,
    type: "preprint",
    abstract: "[Abstract coming soon.]",
    links: {
      pdf: "https://arxiv.org/abs/2511.15857",
    },
    tags: ["LLMs", "Human-AI Interaction", "Decision Making"],
    featured: true,
  },
  {
    id: "paperping-cscw-2025",
    title:
      "PaperPing: A Socially-aware AI Agent that Recommends Academic Papers to Research Group Chats with Contextualized Explanations",
    authors: [
      "Ruotong Wang",
      "Xinyi Zhou",
      "Lin Qiu",
      "Joseph Chee Chang",
      "Jonathan Bragg",
      "Amy X. Zhang",
    ],
    venue:
      "Companion Proceedings of the ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW Companion)",
    year: 2025,
    type: "workshop",
    abstract: "[Abstract coming soon.]",
    links: {
      project: "https://dl.acm.org/doi/10.1145/3715070.3757230",
    },
    tags: ["LLM Agents", "Social Computing", "Human-AI Interaction"],
    featured: false,
  },
];

// ──────────────────────────────────────────────────────────
//  NEWS
// ──────────────────────────────────────────────────────────

export type NewsType = "paper" | "award" | "grant" | "event" | "press" | "misc";

export interface NewsItem {
  id: string;
  /** ISO date string: "2024-12-01" */
  date: string;
  type: NewsType;
  title: string;
  description: string;
  /** Optional URL for a "Read more" link */
  link?: string;
}

export const news: NewsItem[] = [
  {
    id: "icwsm-2026-papers",
    date: "2026-06-01",
    type: "paper",
    title: "Two Papers Accepted at ICWSM 2026",
    description:
      "Two papers accepted at the AAAI International Conference on Web and Social Media (ICWSM) 2026: 'Can Large Language Models Assess the Social Impact of Conspiracy Theories?' and 'Multimodal Large Language Models as Synthetic Participants in Video-Based Studies: An Evaluation' (SocialLLM Workshop).",
  },
  {
    id: "chatgpt-sr-2026",
    date: "2026-01-01",
    type: "paper",
    title: "Paper Published in Scientific Reports",
    description:
      "Our paper 'Users' Prompting Strategies and ChatGPT's Contextual Adaptation Shape Conversational Information-Seeking Experiences' has been published in Scientific Reports and presented at ICA 2026.",
  },
  {
    id: "wsdm-2026-dc",
    date: "2026-02-22",
    type: "event",
    title: "Dr. Zhou Co-Chairs WSDM 2026 Doctoral Consortium",
    description:
      "Dr. Zhou served as Co-Chair of the Doctoral Consortium at WSDM 2026, held in Boise, Idaho — bringing the conference to her home institution.",
    link: "https://wsdm-conference.org/2026/index.php/call-for-wsdm-doctoral-consortium/",
  },
  {
    id: "chatbot-influence-2025",
    date: "2025-11-19",
    type: "paper",
    title: "New Preprint: ChatBot Influence in Value-Driven Decision Making",
    description:
      "New preprint: 'A Crowdsourced Study of ChatBot Influence in Value-Driven Decision Making Scenarios' now available on arXiv.",
    link: "https://arxiv.org/abs/2511.15857",
  },
  {
    id: "paperping-cscw-2025-news",
    date: "2025-10-01",
    type: "paper",
    title: "PaperPing Presented at CSCW Companion 2025",
    description:
      "Our paper 'PaperPing: A Socially-aware AI Agent that Recommends Academic Papers to Research Group Chats with Contextualized Explanations' was presented at CSCW Companion 2025.",
  },
  {
    id: "chatgpt-info-seeking-2025",
    date: "2025-09-29",
    type: "paper",
    title: "New Preprint: ChatGPT User Prompting Strategies",
    description:
      "New preprint: 'Users' Prompting Strategies and ChatGPT's Contextual Adaptation Shape Conversational Information-Seeking Experiences' now available on arXiv.",
    link: "https://arxiv.org/abs/2509.25513",
  },
  {
    id: "bsu-welcome-2025",
    date: "2025-09-29",
    type: "misc",
    title: "Dr. Zhou Joins Boise State University as Assistant Professor",
    description:
      "Dr. Xinyi Zhou has joined the Department of Computer Science at Boise State University as an Assistant Professor, where she directs the Machine Intelligence and Data (MIND) Lab.",
    link: "https://www.boisestate.edu/coen-cs/2025/09/29/computer-science-welcomes-new-faculty-fall-2025/",
  },
];

// ──────────────────────────────────────────────────────────
//  RESOURCES
// ──────────────────────────────────────────────────────────

export type ResourceCategory =
  | "dataset"
  | "code"
  | "reading-list"
  | "tutorial"
  | "tool";

export interface Resource {
  id: string;
  category: ResourceCategory;
  title: string;
  description: string;
  url: string;
  tags: string[];
  /** Optional: link to the related paper */
  paperUrl?: string;
}

// TODO: replace with real resources
export const resources: Resource[] = [
  {
    id: "resource-placeholder-1",
    category: "code",
    title: "[Code Repository — Placeholder]",
    description:
      "[Description coming soon. Replace this with a real code release, dataset, or reading list from the lab.]",
    url: "https://github.com/mindlab-bsu",
    tags: ["[Tag]"],
  },
  {
    id: "resource-placeholder-2",
    category: "reading-list",
    title: "[Reading List — Placeholder]",
    description:
      "[Description coming soon. Replace this with a real reading list or tutorial resource from the lab.]",
    url: "https://github.com/mindlab-bsu",
    tags: ["[Tag]"],
  },
];
