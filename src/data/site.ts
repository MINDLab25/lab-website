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
  googleScholar: "https://scholar.google.com/citations?user=PLACEHOLDER",
  joinLink: "mailto:xinyizhou@boisestate.edu?subject=Prospective%20Student%20Inquiry",
}

// ──────────────────────────────────────────────────────────
//  HOME PAGE
// ──────────────────────────────────────────────────────────
export const home = {
  stats: [
    { value: "20+", label: "Publications" },
    { value: "8", label: "Lab Members" },
    { value: "4", label: "Active Projects" },
    { value: "2", label: "Years at BSU" },
  ],
  // IDs referencing items in the publications and news arrays below
  featuredPublicationIds: ["csur-2024", "www-2024", "chi-2024"],
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
    /** IDs of team members working in this area */
    memberIds: ["xinyi-zhou", "alex-morgan", "priya-sharma", "kai-nakamura"],
  },
  {
    id: "personalized-llms",
    title: "Personalized & Socially Intelligent LLMs",
    description:
      "Building language models that adapt to individual users and social contexts — personalizing responses, modeling user intent, and navigating complex interpersonal dynamics.",
    icon: "🤝",
    memberIds: ["xinyi-zhou", "priya-sharma", "sara-patel"],
  },
  {
    id: "multimodal-ml",
    title: "Multimodal Machine Learning",
    description:
      "Learning rich representations across text, images, and structured data to support reasoning tasks that span multiple modalities — from medical imaging to social media.",
    icon: "🌐",
    memberIds: ["xinyi-zhou", "ming-chen"],
  },
  {
    id: "llm-agents",
    title: "LLM Agents & Tool-Use",
    description:
      "Studying how large language models can act as autonomous agents that plan, use external tools, and complete multi-step tasks reliably and safely.",
    icon: "🤖",
    memberIds: ["xinyi-zhou", "jordan-lee", "alex-morgan"],
  },
  {
    id: "applied-ai",
    title: "Applied AI in High-Stakes Domains",
    description:
      "Translating research into practical systems for healthcare, education, and fact-checking — domains where accuracy, fairness, and interpretability are non-negotiable.",
    icon: "🏥",
    memberIds: ["xinyi-zhou", "alex-morgan", "ming-chen", "sara-patel", "kai-nakamura"],
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
    bio: "Dr. Xinyi Zhou is an Assistant Professor of Computer Science and director of the MIND Lab. She earned her Ph.D. in Computer and Information Science and Engineering from Syracuse University and completed postdoctoral research at the University of Washington's Paul G. Allen School of Computer Science & Engineering. Her research develops trustworthy, personalized, and socially intelligent AI systems with applications in healthcare, education, and fact-checking. She was named a Rising Star in EECS by MIT (2024) and a Rising Star in Data Science by UCSD, UChicago, and Stanford (2024).",
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
      googleScholar: "https://scholar.google.com/citations?user=PLACEHOLDER",
    },
    joinYear: 2023,
  },

  // ── PhD Students ────────────────────────────────────────
  {
    id: "alex-morgan",
    name: "Alex Morgan",
    role: "phd",
    title: "PhD Student",
    photo: "",
    bio: "Alex is a second-year PhD student working on hallucination detection and mitigation in large language models, with a focus on news and healthcare fact-checking.",
    interests: ["Hallucination Detection", "Fact-Checking", "NLP"],
    links: {
      email: "alexmorgan@boisestate.edu",
      github: "https://github.com/alexmorgan-ml",
    },
    joinYear: 2023,
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "phd",
    title: "PhD Student",
    photo: "",
    bio: "Priya is a second-year PhD student studying personalized language models and socially intelligent dialogue systems, with applications in online education platforms.",
    interests: ["Personalized LLMs", "Dialogue Systems", "Educational AI"],
    links: {
      email: "priyasharma@boisestate.edu",
      github: "https://github.com/priyasharma-ai",
    },
    joinYear: 2023,
  },
  {
    id: "jordan-lee",
    name: "Jordan Lee",
    role: "phd",
    title: "PhD Student",
    photo: "",
    bio: "Jordan is a first-year PhD student exploring LLM agent architectures and tool-use, investigating how language models can reliably plan and execute multi-step tasks.",
    interests: ["LLM Agents", "Tool-Use", "Autonomous Systems"],
    links: {
      email: "jordanlee@boisestate.edu",
    },
    joinYear: 2024,
  },
  {
    id: "ming-chen",
    name: "Ming Chen",
    role: "phd",
    title: "PhD Student",
    photo: "",
    bio: "Ming is a first-year PhD student focused on multimodal machine learning, specifically cross-modal grounding of medical text and imaging data for clinical decision support.",
    interests: ["Multimodal ML", "Medical AI", "Vision-Language Models"],
    links: {
      email: "mingchen@boisestate.edu",
    },
    joinYear: 2024,
  },

  // ── MS Students ─────────────────────────────────────────
  {
    id: "sara-patel",
    name: "Sara Patel",
    role: "ms",
    title: "MS Student",
    photo: "",
    bio: "Sara is an MS student developing evaluation frameworks for LLM-generated health information, examining accuracy and potential biases across demographic groups.",
    interests: ["LLM Evaluation", "Health AI", "Fairness"],
    links: {
      email: "sarapatel@boisestate.edu",
      linkedin: "https://linkedin.com/in/sarapatel",
    },
    joinYear: 2024,
  },

  // ── Undergraduate Researchers ───────────────────────────
  {
    id: "kai-nakamura",
    name: "Kai Nakamura",
    role: "undergrad",
    title: "Undergraduate Researcher",
    photo: "",
    bio: "Kai is a junior Computer Science major working on data collection and annotation pipelines for multimodal fact-checking benchmarks.",
    interests: ["Data Engineering", "NLP", "Fact-Checking"],
    links: {
      email: "kainakamura@boisestate.edu",
      github: "https://github.com/kainakamura",
    },
    joinYear: 2024,
  },

  // ── Alumni ──────────────────────────────────────────────
  {
    id: "daniel-wu",
    name: "Daniel Wu",
    role: "alumni",
    title: "Postdoctoral Alumni",
    photo: "",
    bio: "Daniel collaborated with the lab during his postdoc on misinformation detection and LLM grounding. He is now a Research Scientist at a leading AI lab.",
    interests: ["Misinformation Detection", "NLP", "Trustworthy AI"],
    links: {
      googleScholar: "https://scholar.google.com/citations?user=PLACEHOLDER2",
    },
    joinYear: 2022,
    gradYear: 2023,
    currentPosition: "Research Scientist, AI Lab",
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
  {
    id: "csur-2024",
    title: "A Survey on Automated Fact-Checking with Large Language Models",
    authors: ["Xinyi Zhou", "Alex Morgan", "Priya Sharma"],
    venue: "ACM Computing Surveys (CSUR)",
    year: 2024,
    type: "journal",
    abstract:
      "We provide a comprehensive survey of automated fact-checking methods leveraging large language models, covering evidence retrieval, claim verification, and explanation generation. We identify open challenges around multi-hop reasoning, domain generalization, and real-time verification at scale.",
    links: {
      pdf: "https://dl.acm.org/doi/PLACEHOLDER",
    },
    tags: ["Fact-Checking", "LLMs", "Survey", "Trustworthy AI"],
    featured: true,
  },
  {
    id: "www-2024",
    title: "Grounding LLM Responses in Verified Sources for Accurate Health Information",
    authors: ["Xinyi Zhou", "Ming Chen", "Alex Morgan"],
    venue: "The Web Conference (WWW)",
    year: 2024,
    type: "conference",
    abstract:
      "We propose HealthGrounder, a retrieval-augmented generation framework that anchors LLM responses to curated medical knowledge bases. HealthGrounder reduces hallucination rates by 38% on a consumer health question-answering benchmark while maintaining response fluency and helpfulness.",
    links: {
      pdf: "https://arxiv.org/abs/2401.PLACEHOLDER",
      code: "https://github.com/mindlab-bsu/healthgrounder",
    },
    tags: ["Healthcare AI", "RAG", "LLMs", "Hallucination"],
    featured: true,
  },
  {
    id: "chi-2024",
    title: "How Users Perceive and Interact with AI-Generated Explanations in Fact-Checking",
    authors: ["Priya Sharma", "Xinyi Zhou"],
    venue: "ACM CHI Conference on Human Factors in Computing Systems",
    year: 2024,
    type: "conference",
    abstract:
      "A mixed-methods study examining how lay users interpret LLM-generated explanations in fact-checking interfaces. We find that explanation style and provenance disclosure significantly affect user trust calibration and identify design principles for trustworthy AI explanation UIs.",
    links: {
      pdf: "https://dl.acm.org/doi/PLACEHOLDER2",
    },
    tags: ["Human-AI Interaction", "Fact-Checking", "Trust", "User Study"],
    featured: true,
  },
  {
    id: "naacl-2024",
    title: "Personalized Stance Detection via User History Modeling",
    authors: ["Priya Sharma", "Jordan Lee", "Xinyi Zhou"],
    venue: "Annual Conference of the North American Chapter of the ACL (NAACL)",
    year: 2024,
    type: "conference",
    abstract:
      "We introduce a stance detection model that conditions on a user's historical posts to capture individual-level perspective shifts and belief updating over time, improving performance on polarized political and health topics.",
    links: {
      pdf: "https://arxiv.org/abs/2402.PLACEHOLDER",
      code: "https://github.com/mindlab-bsu/personalized-stance",
    },
    tags: ["Stance Detection", "Personalization", "NLP"],
    featured: false,
  },
  {
    id: "emnlp-2024",
    title: "Tool-Augmented LLMs for Multi-Step Fact Verification",
    authors: ["Jordan Lee", "Alex Morgan", "Xinyi Zhou"],
    venue: "Conference on Empirical Methods in Natural Language Processing (EMNLP)",
    year: 2024,
    type: "conference",
    abstract:
      "We develop FactAgent, an LLM-based agent that decomposes complex claims into verifiable sub-questions, selects appropriate search and knowledge tools, and aggregates evidence to render a final verdict. FactAgent outperforms pipeline and end-to-end baselines on FEVER, WiCE, and AVeriTeC.",
    links: {
      pdf: "https://arxiv.org/abs/2409.PLACEHOLDER",
      code: "https://github.com/mindlab-bsu/factagent",
    },
    tags: ["LLM Agents", "Fact-Checking", "Tool-Use"],
    featured: false,
  },
  {
    id: "acl-2023",
    title: "Claim Decomposition for Multi-Hop Fact-Checking",
    authors: ["Xinyi Zhou", "Alex Morgan"],
    venue: "Annual Meeting of the Association for Computational Linguistics (ACL)",
    year: 2023,
    type: "conference",
    abstract:
      "We propose a claim decomposition approach that breaks a complex claim into a chain of atomic, independently-verifiable sub-claims. Decomposition improves verification accuracy by 12 F1 points on multi-hop benchmarks and makes model reasoning more transparent.",
    links: {
      pdf: "https://arxiv.org/abs/2305.PLACEHOLDER",
      code: "https://github.com/mindlab-bsu/claim-decomp",
    },
    tags: ["Fact-Checking", "Claim Decomposition", "NLP"],
    featured: false,
  },
  {
    id: "www-2023",
    title: "Detecting Misinformation with Multi-Modal Evidence Fusion",
    authors: ["Xinyi Zhou", "Ming Chen"],
    venue: "The Web Conference (WWW)",
    year: 2023,
    type: "conference",
    abstract:
      "We present a multi-modal misinformation detection framework that fuses textual, visual, and social-network signals. Our method achieves state-of-the-art results on FakeNewsNet and MediaEval benchmarks, and we release a new multi-modal fake news dataset with 50K annotated articles.",
    links: {
      pdf: "https://arxiv.org/abs/2302.PLACEHOLDER",
      code: "https://github.com/mindlab-bsu/multimodal-misinfo",
    },
    tags: ["Misinformation", "Multimodal ML", "Social Media"],
    featured: false,
  },
  {
    id: "sigir-2023",
    title: "Evidence-Aware Retrieval for Automated Claim Verification",
    authors: ["Alex Morgan", "Xinyi Zhou"],
    venue: "ACM SIGIR Conference on Research and Development in Information Retrieval",
    year: 2023,
    type: "conference",
    abstract:
      "We propose an evidence-aware retrieval model that jointly ranks documents by their relevance to a claim and their informativeness for verification. Our approach improves retrieval recall at top-5 by 18% over BM25 and DPR baselines on the FEVER evidence retrieval subtask.",
    links: {
      pdf: "https://dl.acm.org/doi/PLACEHOLDER3",
    },
    tags: ["Information Retrieval", "Fact-Checking", "NLP"],
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
  {
    id: "emnlp-accept-2024",
    date: "2024-09-05",
    type: "paper",
    title: "Paper Accepted at EMNLP 2024: FactAgent",
    description:
      "Our paper on tool-augmented LLMs for multi-step fact verification (FactAgent) has been accepted at EMNLP 2024. Congratulations to Jordan Lee and Alex Morgan!",
  },
  {
    id: "chi-accept-2024",
    date: "2024-01-16",
    type: "paper",
    title: "Paper Accepted at CHI 2024: User Study on AI Explanations",
    description:
      "Our human-AI interaction study on how users perceive AI-generated fact-checking explanations has been accepted at ACM CHI 2024. Congratulations to Priya Sharma!",
  },
  {
    id: "www-accept-2024",
    date: "2024-01-25",
    type: "paper",
    title: "Paper Accepted at The Web Conference (WWW) 2024",
    description:
      "Our paper on grounding LLM responses in verified medical sources (HealthGrounder) has been accepted at WWW 2024. Congratulations to Ming Chen and Alex Morgan!",
  },
  {
    id: "jordan-ming-join",
    date: "2024-08-19",
    type: "misc",
    title: "Welcome, Jordan Lee and Ming Chen!",
    description:
      "Jordan Lee and Ming Chen join the MIND Lab as first-year PhD students. Jordan will work on LLM agents and tool-use; Ming will focus on multimodal ML for medical applications.",
  },
  {
    id: "sara-joins",
    date: "2024-08-19",
    type: "misc",
    title: "Welcome, Sara Patel!",
    description:
      "Sara Patel joins the lab as an MS student, working on evaluation frameworks for LLM-generated health information. We're excited to have her on the team!",
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

export const resources: Resource[] = [
  {
    id: "factagent-code",
    category: "code",
    title: "FactAgent",
    description:
      "Official implementation of FactAgent — a tool-augmented LLM agent for multi-step fact verification. Includes verification pipelines for FEVER, WiCE, and AVeriTeC benchmarks, plus tool integration scaffolding for search, calculator, and knowledge-base APIs.",
    url: "https://github.com/mindlab-bsu/factagent",
    tags: ["LLM Agents", "Fact-Checking", "Tool-Use", "Python"],
    paperUrl: "https://arxiv.org/abs/2409.PLACEHOLDER",
  },
  {
    id: "healthgrounder-code",
    category: "code",
    title: "HealthGrounder",
    description:
      "Retrieval-augmented generation framework that grounds LLM health responses in curated medical knowledge bases. Includes fine-tuning scripts, evaluation harness, and a demo interface.",
    url: "https://github.com/mindlab-bsu/healthgrounder",
    tags: ["RAG", "Healthcare AI", "LLMs", "Python"],
    paperUrl: "https://arxiv.org/abs/2401.PLACEHOLDER",
  },
  {
    id: "multimodal-misinfo-dataset",
    category: "dataset",
    title: "MM-FakeNews Dataset",
    description:
      "A multi-modal fake news dataset with 50K annotated articles spanning text, images, and social metadata from 2018–2023. Collected from 12 news domains; annotated by trained fact-checkers with claim labels and evidence links.",
    url: "https://github.com/mindlab-bsu/mm-fakenews",
    tags: ["Misinformation", "Multimodal", "Dataset", "NLP"],
    paperUrl: "https://arxiv.org/abs/2302.PLACEHOLDER",
  },
  {
    id: "claim-decomp-code",
    category: "code",
    title: "Claim Decomposition Toolkit",
    description:
      "Tools for decomposing complex claims into chains of atomic, independently-verifiable sub-claims. Supports GPT-4 and open-source LLM backends; includes evaluation against FEVER and MultiFC.",
    url: "https://github.com/mindlab-bsu/claim-decomp",
    tags: ["Fact-Checking", "Claim Decomposition", "NLP", "Python"],
    paperUrl: "https://arxiv.org/abs/2305.PLACEHOLDER",
  },
  {
    id: "reading-list-trustworthy-ai",
    category: "reading-list",
    title: "Trustworthy Generative AI — Essential Papers",
    description:
      "A curated reading list on hallucination, factual grounding, and reliability in large language models — from early work on knowledge-grounded generation to recent RLHF and retrieval-augmented approaches. Updated quarterly.",
    url: "https://github.com/mindlab-bsu/reading-lists/blob/main/trustworthy-ai.md",
    tags: ["Trustworthy AI", "LLMs", "Reading List"],
  },
  {
    id: "reading-list-fact-checking",
    category: "reading-list",
    title: "Automated Fact-Checking — Paper Collection",
    description:
      "Comprehensive collection of automated fact-checking papers organized by subtask: claim detection, evidence retrieval, claim verification, and explanation generation. Covers dataset papers and system papers from 2017 to present.",
    url: "https://github.com/mindlab-bsu/reading-lists/blob/main/fact-checking.md",
    tags: ["Fact-Checking", "NLP", "Reading List"],
  },
  {
    id: "llm-agents-tutorial",
    category: "tutorial",
    title: "Building LLM Agents with Tool-Use",
    description:
      "A practical tutorial for researchers new to LLM agent frameworks. Covers ReAct, tool-calling APIs, evaluation of agent trajectories, and common failure modes. Includes runnable Jupyter notebooks.",
    url: "https://github.com/mindlab-bsu/llm-agents-tutorial",
    tags: ["LLM Agents", "Tutorial", "Tool-Use", "Python"],
  },
  {
    id: "onboarding-guide",
    category: "tutorial",
    title: "MIND Lab Onboarding Guide",
    description:
      "Getting-started guide for new lab members: compute cluster access at Boise State HPC, experiment tracking with Weights & Biases, our paper writing workflow, and lab norms.",
    url: "https://github.com/mindlab-bsu/onboarding",
    tags: ["Tutorial", "Onboarding", "HPC"],
  },
]
