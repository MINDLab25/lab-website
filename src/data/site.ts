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
  email: "xinyizhou@boisestate.edu",
  phone: "(208) 426-5766",
  address: "1910 University Dr, Boise, ID 83725",
  room: "City Center Plaza (CCP), Room 255",
  github: "https://github.com/mindlab-bsu",
  twitter: "https://twitter.com/mindlab_bsu",
  googleScholar: "https://scholar.google.com/citations?user=9U_Ge4MAAAAJ",
  joinLink: "mailto:xinyizhou@boisestate.edu?subject=Prospective%20Student%20Inquiry",
}

// ──────────────────────────────────────────────────────────
//  HOME PAGE
// ──────────────────────────────────────────────────────────
export const home = {
  stats: [
    { value: "30+", label: "Publications" },
    { value: "—", label: "Lab Members" },   // TODO: fill in
    { value: "20", label: "h-index" },
    { value: "3", label: "Years at BSU" },
  ],
  // IDs referencing items in the publications and news arrays below
  featuredPublicationIds: ["social-rag-chi-2025", "correcting-misinfo-2024", "fake-news-survey-csur-2020"],
  featuredNewsIds: ["rising-star-mit-2024", "rising-star-ds-2024", "wsdm-2026"],
}

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
    memberIds: ["xinyi-zhou"],
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
    memberIds: ["xinyi-zhou"],
  },
]

// ──────────────────────────────────────────────────────────
//  TEAM
// ──────────────────────────────────────────────────────────

export type TeamRole = "pi" | "postdoc" | "phd" | "ms" | "undergrad" | "alumni"

export interface TeamMember {
  id: string
  name: string
  role: TeamRole
  /** Displayed title (e.g. "Assistant Professor", "PhD Student") */
  title: string
  /** Filename inside /public/images/team/ — leave "" to show initials avatar */
  photo: string
  bio: string
  interests: string[]
  links: {
    email?: string
    website?: string
    github?: string
    twitter?: string
    googleScholar?: string
    linkedin?: string
  }
  /** Year they joined the lab */
  joinYear?: number
  /** Alumni only: year they graduated */
  gradYear?: number
  /** Alumni only: where they are now */
  currentPosition?: string
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
    joinYear: 2023,
  },

  // ── PhD Students ────────────────────────────────────────
  // TODO: replace with real lab members
  {
    id: "phd-student-placeholder-1",
    name: "PhD Student (Coming Soon)",
    role: "phd",
    title: "PhD Student",
    photo: "",
    bio: "This profile is a placeholder. Real lab member info will be added here soon.",
    interests: ["[Research Interest]", "[Research Interest]"],
    links: {},
    joinYear: undefined,
  },
  {
    id: "phd-student-placeholder-2",
    name: "PhD Student (Coming Soon)",
    role: "phd",
    title: "PhD Student",
    photo: "",
    bio: "This profile is a placeholder. Real lab member info will be added here soon.",
    interests: ["[Research Interest]", "[Research Interest]"],
    links: {},
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
    links: {},
    joinYear: undefined,
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
]

// ──────────────────────────────────────────────────────────
//  PUBLICATIONS
// ──────────────────────────────────────────────────────────

export type PubType = "conference" | "journal" | "workshop" | "preprint"

export interface Publication {
  id: string
  title: string
  /** List authors by full name; lab members will be auto-bolded if names match */
  authors: string[]
  venue: string
  year: number
  type: PubType
  abstract: string
  links: {
    pdf?: string
    code?: string
    project?: string
    slides?: string
    demo?: string
  }
  tags: string[]
  /** Show on home page */
  featured: boolean
  /** e.g. "Oral", "Spotlight", "Best Paper Award" */
  award?: string
}

export const publications: Publication[] = [
  // ── 2025 ────────────────────────────────────────────────
  {
    id: "social-rag-chi-2025",
    title: "Social-RAG: Retrieving from Group Interactions to Socially Ground AI Generation",
    authors: ["Ruotong Wang", "Xinyi Zhou", "Lin Qiu", "Joseph Chee Chang", "Jonathan Bragg", "Amy X. Zhang"],
    venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI)",
    year: 2025,
    type: "conference",
    abstract:
      "Social-RAG is a workflow for socially grounding AI agents by retrieving context from prior group interactions, selecting relevant social signals, and feeding them into a language model to generate socially aligned messages. Deployed in PaperPing — a paper-recommendation agent for research group chats — across 18 channels reaching 500+ researchers over three months.",
    links: {
      pdf: "https://arxiv.org/abs/2411.02353",
      project: "https://dl.acm.org/doi/10.1145/3706598.3713749",
    },
    tags: ["LLMs", "Social Computing", "RAG", "Human-AI Interaction"],
    featured: true,
  },
  {
    id: "paperping-cscw-2025",
    title: "PaperPing: A Socially-aware AI Agent that Recommends Academic Papers to Research Group Chats with Contextualized Explanations",
    authors: ["Xinyi Zhou"],
    venue: "Companion Proceedings of the ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW Companion)",
    year: 2025,
    type: "workshop",
    abstract: "[Abstract coming soon.]",
    links: {},
    tags: ["LLM Agents", "Social Computing", "Human-AI Interaction"],
    featured: false,
  },

  // ── 2024 ────────────────────────────────────────────────
  {
    id: "correcting-misinfo-2024",
    title: "Correcting Misinformation on Social Media with a Large Language Model",
    authors: ["Xinyi Zhou", "Ashish Sharma", "Amy X. Zhang", "Tim Althoff"],
    venue: "arXiv preprint",
    year: 2024,
    type: "preprint",
    abstract:
      "We propose MUSE, an LLM augmented with vision-language modeling and web retrieval over credible sources to detect and explain misinformation in social media posts. MUSE outperforms GPT-4 by 37% and high-quality human responses by 29%, and generalizes across modalities, domains, and political leanings.",
    links: {
      pdf: "https://arxiv.org/abs/2403.11169",
    },
    tags: ["LLMs", "Misinformation", "Social Media", "Fact-Checking"],
    featured: true,
  },
  {
    id: "fact-checking-cscw-2024",
    title: "Human-centered NLP Fact-checking: Co-Designing with Fact-checkers using Matchmaking for AI",
    authors: ["Xinyi Zhou"],
    venue: "Proceedings of the ACM on Human-Computer Interaction (CSCW)",
    year: 2024,
    type: "conference",
    abstract: "[Abstract coming soon.]",
    links: {
      project: "https://dl.acm.org/doi/10.1145/3686962",
    },
    tags: ["Fact-Checking", "Human-AI Interaction", "NLP"],
    featured: false,
  },

  // ── 2022 ────────────────────────────────────────────────
  {
    id: "fake-intent-www-2022",
    title: "'This is Fake! Shared it by Mistake': Assessing the Intent of Fake News Spreaders",
    authors: ["Xinyi Zhou", "Kai Shu", "Vir V. Phoha", "Huan Liu", "Reza Zafarani"],
    venue: "The Web Conference (WWW)",
    year: 2022,
    type: "conference",
    abstract: "[Abstract coming soon.]",
    links: {},
    tags: ["Fake News", "Misinformation", "Social Media", "NLP"],
    featured: false,
  },

  // ── 2020 ────────────────────────────────────────────────
  {
    id: "fake-news-survey-csur-2020",
    title: "A Survey of Fake News: Fundamental Theories, Detection Methods, and Opportunities",
    authors: ["Xinyi Zhou", "Reza Zafarani"],
    venue: "ACM Computing Surveys (CSUR)",
    year: 2020,
    type: "journal",
    abstract:
      "A comprehensive survey of fake news research covering psychological and social theories behind misinformation spread, computational detection methods (knowledge-based, style-based, propagation-based, source-based), and open challenges. One of the most-cited works in the automated fact-checking literature.",
    links: {},
    tags: ["Fake News", "Survey", "Misinformation", "NLP"],
    featured: true,
  },
  {
    id: "safe-pakdd-2020",
    title: "SAFE: Similarity-Aware Multi-Modal Fake News Detection",
    authors: ["Xinyi Zhou", "Jindi Wu", "Reza Zafarani"],
    venue: "Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD)",
    year: 2020,
    type: "conference",
    abstract: "[Abstract coming soon.]",
    links: {},
    tags: ["Fake News", "Multimodal ML", "NLP"],
    featured: false,
  },
  {
    id: "recovery-cikm-2020",
    title: "ReCOVery: A Multimodal Repository for COVID-19 News Credibility Research",
    authors: ["Xinyi Zhou", "Apurva Mulay", "Emilio Ferrara", "Reza Zafarani"],
    venue: "ACM International Conference on Information and Knowledge Management (CIKM)",
    year: 2020,
    type: "conference",
    abstract: "[Abstract coming soon.]",
    links: {},
    tags: ["Dataset", "COVID-19", "Misinformation", "Multimodal ML"],
    featured: false,
  },
]

// ──────────────────────────────────────────────────────────
//  NEWS
// ──────────────────────────────────────────────────────────

export type NewsType = "paper" | "award" | "grant" | "event" | "press" | "misc"

export interface NewsItem {
  id: string
  /** ISO date string: "2024-12-01" */
  date: string
  type: NewsType
  title: string
  description: string
  /** Optional URL for a "Read more" link */
  link?: string
}

export const news: NewsItem[] = [
  // ── Real news items ─────────────────────────────────────
  {
    id: "rising-star-mit-2024",
    date: "2024-10-15",
    type: "award",
    title: "Dr. Zhou Named MIT Rising Star in EECS 2024",
    description:
      "Dr. Xinyi Zhou has been recognized as a Rising Star in Electrical Engineering and Computer Science by MIT, one of the most competitive early-career honors in the field.",
    link: "https://risingstars.mit.edu",
  },
  {
    id: "rising-star-ds-2024",
    date: "2024-09-20",
    type: "award",
    title: "Rising Star in Data Science — UCSD, UChicago & Stanford",
    description:
      "Dr. Zhou was honored as a Rising Star in Data Science by the University of California San Diego, the University of Chicago, and Stanford University in 2024.",
  },
  {
    id: "wsdm-2026",
    date: "2024-08-01",
    type: "misc",
    title: "Dr. Zhou Appointed Co-Chair, WSDM 2026 Doctoral Consortium",
    description:
      "Dr. Zhou will serve as Co-Chair of the Doctoral Consortium at the ACM International Conference on Web Search and Data Mining (WSDM) 2026.",
  },

  // ── Placeholder news items ──────────────────────────────
  // TODO: replace with real news
  {
    id: "news-placeholder-1",
    date: "2024-01-01",
    type: "paper",
    title: "[Paper Acceptance — Placeholder]",
    description: "[News description coming soon. Replace this with a real paper acceptance, award, or lab update.]",
  },
  {
    id: "news-placeholder-2",
    date: "2024-01-01",
    type: "misc",
    title: "[Lab Update — Placeholder]",
    description: "[News description coming soon. Replace this with a real lab update, welcome post, or event announcement.]",
  },
]

// ──────────────────────────────────────────────────────────
//  RESOURCES
// ──────────────────────────────────────────────────────────

export type ResourceCategory = "dataset" | "code" | "reading-list" | "tutorial" | "tool"

export interface Resource {
  id: string
  category: ResourceCategory
  title: string
  description: string
  url: string
  tags: string[]
  /** Optional: link to the related paper */
  paperUrl?: string
}

// TODO: replace with real resources
export const resources: Resource[] = [
  {
    id: "resource-placeholder-1",
    category: "code",
    title: "[Code Repository — Placeholder]",
    description: "[Description coming soon. Replace this with a real code release, dataset, or reading list from the lab.]",
    url: "https://github.com/mindlab-bsu",
    tags: ["[Tag]"],
  },
  {
    id: "resource-placeholder-2",
    category: "reading-list",
    title: "[Reading List — Placeholder]",
    description: "[Description coming soon. Replace this with a real reading list or tutorial resource from the lab.]",
    url: "https://github.com/mindlab-bsu",
    tags: ["[Tag]"],
  },
]
