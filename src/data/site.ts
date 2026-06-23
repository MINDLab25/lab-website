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
    "Hello! This is Machine Intelligence and Data Lab (MIND Lab) in the Computer Science Department at Boise State University. Our research centers on machine learning and foundation models with and for real-world social impact, integrating data- and human-centric methods to pursue intelligent futures where people and AI co-thrive.",
  joinDescription: [
    "We welcome self-motivated doctoral, master's, and undergraduate students who are passionate about AI, data science, and human-centered computing.",
    "Please briefly tell us about yourself, your interests, and how your background aligns with our work, and send us your transcript and CV/resume.",
  ],
  email: "mindlab20250820@gmail.com",
  phone: "(208) 426-5766",
  address: "Boise, ID 83702",
  room: "City Center Plaza (CCP) 255, 777 W Main St",
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
    "correcting-misinformation-llm-2024",
  ],
  featuredNewsIds: [
    "xinyi-socialllm-icwsm-2026",
    "xinyi-coen-early-scholar-2026",
    "wsdm-2026-dc",
  ],
};

// ──────────────────────────────────────────────────────────
//  RESEARCH AREAS
// ──────────────────────────────────────────────────────────
export const researchAreas = [
  {
    id: "trust-and-safety",
    title: "Trust and Safety",
    description:
      "AI, especially generative AI, is increasingly used by millions to billions of people and is shaping high-stakes decisions, making trust and safety central concerns. We develop methods to evaluate these systems and make them more factually accurate, explainable, accountable, robust to manipulation, aligned with human values, and less biased or harmful across groups.",
    icon: "🛡️",
    memberIds: ["anh-bui"],
  },
  {
    id: "human-ai-collaboration",
    title: "Human–AI Collaboration",
    description:
      "Human and artificial intelligence are complementary, each offering distinct strengths. We study these differences and develop tools and systems that enable humans and AI to work together synergistically.",
    icon: "🤝",
    memberIds: ["benjamin-lee-peterson", "prabal-shrestha"],
  },
  {
    id: "multimodality",
    title: "Multimodality",
    description:
      "The web and the world are multimodal, spanning interconnected text, images, audio, and video. We extract actionable insights from these data, develop methods to learn from both content and relationships within and across modalities, and augment foundation models through effective multimodal retrieval.",
    icon: "🌐",
    memberIds: ["prabal-shrestha"],
  },
  {
    id: "future-of-work-health-education",
    title: "Future of Work, Health, and Education",
    description:
      "We develop use-inspired AI for high-stakes domains, with a special focus on improving workplaces, healthcare, and education.",
    icon: "🎯",
    memberIds: ["stephanie-grim", "benjamin-lee-peterson"],
  },
];

// ──────────────────────────────────────────────────────────
//  TEAM
// ──────────────────────────────────────────────────────────

export type TeamRole =
  | "pi"
  | "postdoc"
  | "phd"
  | "ms"
  | "undergrad"
  | "mascot"
  | "alumni";

export interface TeamMember {
  id: string;
  name: string;
  role: TeamRole;
  /** Displayed title (e.g. "Assistant Professor", "PhD Student") */
  title: string;
  /** Filename inside /public/images/team/ — leave "" to show initials avatar */
  photo: string;
  /** CSS object-position for the avatar crop (e.g. "center 20%") — defaults to centered */
  photoPosition?: string;
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
    name: "Xinyi Zhou",
    role: "pi",
    title: "Assistant Professor",
    photo: "xinyi_zhou.png",
    bio: "Xinyi Zhou is an Assistant Professor of Computer Science at Boise State University, where she directs the MIND Lab. She earned her Ph.D. in Computer and Information Science and Engineering from Syracuse University (2022), advised by Reza Zafarani, and completed a postdoctoral fellowship at the University of Washington's Paul G. Allen School of Computer Science & Engineering, working with Amy X. Zhang and Tim Althoff. Her research develops trustworthy, personalized, and socially intelligent AI systems with applications in healthcare, education, and misinformation detection. She was named a Rising Star in EECS by MIT (2024) and a Rising Star in Data Science by UCSD, UChicago, and Stanford (2024).",
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
    title: "PhD Student",
    photo: "peterson_ben.jpg",
    photoPosition: "center 20%",
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
    id: "stephanie-grim",
    name: "Stephanie Grim",
    role: "phd",
    title: "PhD Student (Fall 2026)",
    photo: "stephanie-grim.jpg",
    photoPosition: "center 20%",
    bio: 'Stephanie joins the lab as an incoming PhD student with over a decade of experience in human subjects and healthcare research. She has worked closely with patients, clinicians, and research teams, seeing firsthand how health technologies are used in practice. She hopes to draw on this experience in her work on machine learning and human-centered AI, particularly in understanding how tools such as large language models can be developed and implemented in ways that support patients, clinicians, and health systems. She is excited about combining rigorous yet responsible research methods with practical healthcare needs. Outside of research, Stephanie is an avid outdoorsperson who spends much of her free time snowboarding, trail running, and mountain biking. She also loves animals and frequently fosters rescue puppies while they wait for their "furever" homes. ',
    interests: ["Future of Work, Health, and Education"],
    links: {
      email: "stephgrim@gmail.com",
      linkedin: "https://www.linkedin.com/in/stephanie-grim-01841a111/",
      googleScholar:
        "https://scholar.google.com/citations?user=Oc7FM-4AAAAJ&hl=en",
    },
    joinYear: undefined,
  },

  // ── MS Students ─────────────────────────────────────────
  // TODO: replace with real lab members
  {
    id: "anh-bui",
    name: "Anh Bui",
    role: "ms",
    title: "MS Student",
    photo: "anh_bui.png",
    bio: "This profile is a placeholder. Real lab member info will be added here soon.",
    interests: ["Trust and Safety"],
    links: {
      email: "buianh1108@gmail.com",
      linkedin: "https://www.linkedin.com/in/anh-bui-b527b211b/",
    },
    joinYear: undefined,
  },
  {
    id: "prabal-shrestha",
    name: "Prabal Shrestha",
    role: "ms",
    title: "MS Student",
    photo: "prabal_shrestha.png",
    bio: "MS CS student at Boise State University researching multimodal LLMs, video-based fact-checking, and LLM-powered human simulation. Interested in how AI systems perceive and reason about video content, and in building systems that leverage language and vision models for real-world information integrity.",
    interests: ["Human–AI Collaboration", "Multimodality"],
    links: {
      email: "prabalshrestha2@gmail.com",
      github: "github.com/prabalshrestha",
      linkedin: "linkedin.com/in/prabalshrestha",
      googleScholar:
        "https://scholar.google.com/citations?user=a5BsiBIAAAAJ&hl=en",
    },
    joinYear: 2025,
  },

  // ── Undergraduate Researchers ───────────────────────────
  // TODO: replace with real lab members
  // {
  //   id: "undergrad-placeholder-1",
  //   name: "Undergraduate Researcher (Coming Soon)",
  //   role: "undergrad",
  //   title: "Undergraduate Researcher",
  //   photo: "",
  //   bio: "This profile is a placeholder. Real lab member info will be added here soon.",
  //   interests: ["[Research Interest]"],
  //   links: {},
  //   joinYear: undefined,
  // },

  // ── Lab Mascots ─────────────────────────────────────────
  {
    id: "funding",
    name: "Funding",
    role: "mascot",
    title: "Lab Mascot",
    photo: "funding.png",
    bio: "Funding is a super-friendly Westie who was born on May 30 in Denver, Colorado. He loves people, food, and slippers.",
    interests: [],
    links: {},
  },
  {
    id: "pumpkin",
    name: "Pumpkin",
    role: "mascot",
    title: "Lab Mascot",
    photo: "pumpkin.png",
    bio: "Pumpkin is a six-year-old British Shorthair who believes dogs are bad and curiosity didn't kill the cat.",
    interests: [],
    links: {},
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
    artt?: string;
    slides?: string;
    poster?: string;
    demo?: string;
  };
  /** BibTeX entry shown by the "Cite" button — auto-generated; review/edit as needed */
  bibtex?: string;
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
      "Multimodal large language models (MLLMs) have shown strong performance on objective tasks such as video understanding and reasoning. However, it remains unclear whether they can approximate subjective human responses, which depend not only on content comprehension but also on individuals’ social contexts. To address this gap, we evaluate MLLMs as synthetic participants in an emerging task: assessing perceived sensory engagement with short videos. Grounded in the Perceived Message Sensation Value (PMSV) framework, we compare ratings from recruited human participants and profile-conditioned MLLM simulations (n = 673) using a 17-item scale measuring emotional arousal, dramatic impact, and novelty. We find that even leading MLLMs (Gemini 3 Flash and Qwen 3 Omni) show limited agreement with human participants. The models exhibit distinct downward mean-shift and central-tendency biases in their rating distributions. They both introduce and flatten subgroup differences, while showing inconsistent sensitivity to participant profiles. Prompting strategies affect these metrics differently, modestly improving some aspects while worsening others. These results highlight both the challenges and opportunities of developing MLLMs as synthetic participants in video-based research.",
    links: {
      pdf: "https://workshop-proceedings.icwsm.org/pdf/2026_66.pdf",
      code: "https://github.com/MINDLab25/mllm-human-simulation-eval",
      poster:
        "https://drive.google.com/file/d/1OGv12vCDLkVxIIPibSXjo7UF9rgBf4Yx/view?usp=drive_link",
      slides:
        "https://drive.google.com/file/d/1LdIbn39RRcgDTZu4c0BM28TajSaxS1vy/view?usp=drive_link",
    },
    bibtex: `@misc{shrestha2026multimodallargelanguagemodels,
      title={Multimodal Large Language Models as Synthetic Participants in Video-Based Studies: An Evaluation},
      author={Prabal Shrestha and Bohan Jiang and Haoning Xue and Huan Liu and Xinyi Zhou},
      year={2026},
      eprint={2606.07541},
      archivePrefix={arXiv},
      primaryClass={cs.HC},
      url={https://arxiv.org/abs/2606.07541},
}`,
    featured: true,
  },

  // ── 2024 ────────────────────────────────────────────────
  {
    id: "correcting-misinformation-llm-2024",
    title:
      "Correcting misinformation on social media with a large language model",
    authors: ["Xinyi Zhou", "Ashish Sharma", "Amy X Zhang", "Tim Althoff"],
    venue: "arXiv preprint",
    year: 2024,
    type: "preprint",
    abstract:
      'Real-world information, often multimodal, can be misinformed or potentially misleading due to factual errors, outdated claims, missing context, misinterpretation, and more. Such "misinformation" is understudied, challenging to address, and harms many social domains -- particularly on social media, where it can spread rapidly. Manual correction that identifies and explains its (in)accuracies is widely accepted but difficult to scale. While large language models (LLMs) can generate human-like language that could accelerate misinformation correction, they struggle with outdated information, hallucinations, and limited multimodal capabilities. We propose MUSE, an LLM augmented with vision-language modeling and web retrieval over relevant, credible sources to generate responses that determine whether and which part(s) of the given content can be misinformed or potentially misleading, and to explain why with grounded references. We further define a comprehensive set of rubrics to measure response quality, ranging from the accuracy of identifications and factuality of explanations to the relevance and credibility of references. Results show that MUSE consistently produces high-quality outputs across diverse social media content (e.g., modalities, domains, political leanings), including content that has not previously been fact-checked online. Overall, MUSE outperforms GPT-4 by 37% and even high-quality responses from social media users by 29%. Our work provides a general methodological and evaluative framework for correcting misinformation at scale.',
    links: {
      pdf: "https://arxiv.org/pdf/2403.11169",
      code: "https://github.com/Social-Futures-Lab/MUSE",
      artt: "https://artt.discourselabs.org/post/how-were-adding-ai-to-the-artt-tool",
    },
    bibtex: `@misc{zhou2026correctingmisinformationsocialmedia,
      title={Correcting misinformation on social media with a large language model},
      author={Xinyi Zhou and Ashish Sharma and Amy X. Zhang and Tim Althoff},
      year={2026},
      eprint={2403.11169},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2403.11169},
}`,
    featured: true,
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
  /** Optional URL for a single "Learn more" link */
  link?: string;
  /** Optional named links (e.g. Paper, Slides, Poster) rendered side-by-side */
  links?: { label: string; url: string }[];
}

export const news: NewsItem[] = [
  {
    id: "xinyi-socialllm-icwsm-2026",
    date: "2026-06-26",
    type: "event",
    title: "Xinyi Presented at SocialLLM @ ICWSM 2026",
    description:
      'Xinyi presented "Multimodal Large Language Models as Synthetic Participants in Video-Based Studies: An Evaluation" at the Large Language Models for Social Reasoning and Simulation Workshop at ICWSM 2026 in Los Angeles, CA. Check out our paper, slides, and poster!',
    links: [
      {
        label: "Paper",
        url: "https://arxiv.org/abs/2606.07541",
      },
      {
        label: "Slides",
        url: "https://drive.google.com/file/d/1LdIbn39RRcgDTZu4c0BM28TajSaxS1vy/view?usp=drive_link",
      },
      {
        label: "Poster",
        url: "https://drive.google.com/file/d/1OGv12vCDLkVxIIPibSXjo7UF9rgBf4Yx/view?usp=drive_link",
      },
    ],
  },
  {
    id: "xinyi-ai-institute-2026",
    date: "2026-05-14",
    type: "event",
    title: "Xinyi Spoke at 2026 AI Institute for Teaching and Learning",
    description:
      "Xinyi spoke as a panelist at Boise State University's 2026 AI Institute for Teaching and Learning Workshop, discussing ethics and integrity in an AI-enhanced campus.",
  },
  {
    id: "welcome-anh-2026",
    date: "2026-05-11",
    type: "misc",
    title: "Welcome Anh to the Lab",
    description:
      "We're excited to welcome Anh Bui to the lab as a summer intern working on an AI safety project, in collaboration with the fantastic Dr. Casey Kennington!",
    // link: "https://shorturl.at/XoPuq",
  },
  {
    id: "socialllm-icwsm-2026-accepted",
    date: "2026-04-30",
    type: "paper",
    title: "Paper Accepted to SocialLLM @ ICWSM 2026",
    description:
      'The paper, "Multimodal Large Language Models as Synthetic Participants in Video-Based Studies: An Evaluation," by Prabal Shrestha, Bohan Jiang (ASU), Haoning Xue (Utah), Huan Liu (ASU), Xinyi Zhou, was accepted to the Large Language Models for Social Reasoning and Simulation Workshop at ICWSM 2026. Congratulations to Prabal on being the lead author, and many thanks to our wonderful collaborators!',
    link: "https://workshop-proceedings.icwsm.org/abstract.php?id=2026_66",
  },
  {
    id: "xinyi-coen-early-scholar-2026",
    date: "2026-04-29",
    type: "award",
    title: "Xinyi Received COEN Early Scholar Award",
    description:
      "Congratulations to Xinyi, the sole recipient of the Early Career Scholar Award from the College of Engineering at Boise State University!",
  },
  {
    id: "prabal-ben-grad-showcase-2026",
    date: "2026-04-08",
    type: "event",
    title: "Ben and Prabal Presented at Boise State Graduate Showcase",
    description:
      "Ben and Prabal presented posters on their research in AI for human simulation and learning at Boise State University's Graduate Student Showcase.",
  },
  {
    id: "ben-nsf-access-grant-2026",
    date: "2026-03-30",
    type: "award",
    title: "Ben Received NSF ACCESS Travel Grant",
    description:
      "Congratulations to Ben on receiving a travel grant to the AI Unlocked Workshop by NSF ACCESS, NAIRR Pilot, and CU Boulder!",
    link: "https://www.colorado.edu/rc/ai-unlocked-empowering-higher-education-through-research-and-discovery",
  },
  {
    id: "wsdm-2026-dc",
    date: "2026-02-22",
    type: "event",
    title: "Xinyi Chaired WSDM 2026 Doctoral Consortium",
    description:
      "Xinyi co-chaired the Doctoral Consortium track at WSDM 2026 with Dr. Antonela Tommasel (CONICET) in Boise, a vibrant city in ID. Grateful to all who contributed and participated, including the PhD students, keynote speaker, mentors, panelists, and audience, for making the Consortium a success!",
    link: "https://www.linkedin.com/posts/xyzhou59_wsdm2026-share-7431193814897291264-Sirb/",
  },
  {
    id: "welcome-ben-prabal-2026",
    date: "2026-01-12",
    type: "misc",
    title: "Welcome Ben and Prabal to the Lab",
    description:
      "Excited to welcome Ben Peterson as the lab's first PhD student and Prabal Shrestha as its first MS student!",
  },
  {
    id: "xinyi-idaho-tech-council-2026",
    date: "2026-01-09",
    type: "event",
    title: "Xinyi Spoke at Idaho Technology Council",
    description:
      "Xinyi spoke as a panelist in the Idaho Technology Council Spark Series online workshops, discussing emerging tech trends to watch in 2026.",
  },
  {
    id: "xinyi-sioc-seminar-2025",
    date: "2025-12-08",
    type: "event",
    title: "Xinyi Spoke at the Social Impacts of Computing Seminar",
    description:
      "Xinyi gave an invited talk at Boise State University's Social Impacts of Computing (SioC) Seminar on her research in AI for societal impact.",
  },
  {
    id: "xinyi-ece-seminar-2025",
    date: "2025-11-12",
    type: "event",
    title: "Xinyi Spoke at Boise State ECE Seminar",
    description:
      "Xinyi gave an invited talk at Boise State University's ECE Seminar on her research in AI for societal impact.",
  },
  {
    id: "mind-lab-day-one-2025",
    date: "2025-08-20",
    type: "misc",
    title: "Day One of MIND Lab",
    description:
      "Excited to announce the establishment of MIND Lab, with research centered around AI, data, and people.",
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
