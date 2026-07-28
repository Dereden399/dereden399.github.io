export interface MLProject {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  highlight: string
  link: string | null
}

export interface EngProject {
  title: string
  description: string
  tags: string[]
  link?: string
}

export interface TimelineEntry {
  year: string
  role: string
  org: string
  detail: string
  badge?: string
}

export interface ExperienceEntry {
  role: string
  org: string
  detail: string
  dateLabel: string
  start: number
  end: number
}

export const name = 'Denis Kuznetsov'

export const tagline =
  'I like building things that work. Some of them write, draw, and see.'

export const roleTyped = 'ML Engineer and Researcher · Software Engineer'

export const sidebarRole = 'ML ENGINEER · FULL-STACK DEV\nAALTO UNIVERSITY'

export const about =
  "I'm an M.Sc. student in Machine Learning, Data Science & AI at Aalto University, with hands-on experience deploying AI features to production systems used by thousands of people. I've built and shipped end-to-end ML pipelines, from data preprocessing and model training to integration into real applications, and bring several years of full-stack engineering experience building scalable, production-grade systems. I like working across the whole lifecycle of applied ML: ideation, implementation, deployment, and iteration."

export const resumeUrl = encodeURI('/Resume.pdf')

export const email = 'denisk399@gmail.com'
export const github = 'dereden399'
export const linkedin = 'dereden'

export const mlProjects: MLProject[] = [
  {
    id: 'thesis',
    title: 'Real-Time Methods for Enhancing Image Quality in Computer Graphics',
    subtitle: "Bachelor's Thesis · Aalto University · 2025",
    description:
      'Literature review of different approaches for real-time image quality enhancement in computer graphics, including both older traditional techniques and newer ML approaches. Reviewed how these methods trade off quality, latency, and compute for production real-time use.',
    tags: ['Computer Graphics', 'Real-Time Rendering', 'Super-Resolution'],
    highlight: 'Supervised by Jaakko Lehtinen (Aalto / NVIDIA) · top grade',
    link: null
  },
  {
    id: 'toxicity',
    title: 'Multilingual Toxicity Detection',
    subtitle: 'Aalto University · Course Project · 2026',
    description:
      'Team research project investigating toxicity detection for languages absent from standard training corpora, under strict compute constraints. Explored cross-lingual transfer learning with multilingual models (mBERT, XLM-R) in zero-shot and few-shot settings - target languages had zero labeled training samples. Compared performance of different methods.',
    tags: ['Python', 'NLP', 'HuggingFace', 'Zero-shot', 'XLM-RoBERTa'],
    highlight: 'Zero labeled samples in target languages',
    link: null
  },
  {
    id: 'emotion',
    title: 'Voice Emotion Recognition',
    subtitle: 'Course Project · 2023',
    description:
      'Built a neural network model achieving 80% accuracy classifying 8 emotions from voice samples.',
    tags: ['Audio ML', 'Python'],
    highlight: '~80% accuracy across 7 emotion classes',
    link: 'https://github.com/Dereden399/voice-emotion-recognition'
  }
]

export const engProjects: EngProject[] = [
  {
    title: 'BeamexAR',
    description:
      'AR mobile app guiding industrial calibration specialists. Team project over a full academic year, using Scrum; received excellent grade.',
    tags: ['React Native', 'TypeScript', 'AR']
  },
  {
    title: 'OpenGL Renderer',
    description:
      'Graphics engine with texture maps, hierarchical modelling, bloom, and custom GLSL shaders.',
    tags: ['C++', 'OpenGL', 'GLSL'],
    link: 'https://github.com/Dereden399/simple-opengl-renderer'
  },
  {
    title: 'Metal Renderer',
    description:
      'macOS/iOS graphics with multipass rendering and shadow mapping in Swift and Metal.',
    tags: ['Swift', 'Metal', 'SwiftUI'],
    link: 'https://github.com/Dereden399/simple-metal-renderer'
  },
  {
    title: 'Study Schedule',
    description:
      'Full-stack app with automated testing, containerised development, and Redux state management.',
    tags: ['TypeScript', 'React', 'MongoDB', 'CI/CD'],
    link: 'https://github.com/Dereden399/study-schedule-project'
  },
  {
    title: 'Procedural Image Gen.',
    description:
      'ScalaFX app generating procedural images from user-defined JSON rules and assets',
    tags: ['Scala', 'ScalaFX', 'UML'],
    link: 'https://github.com/Dereden399/procedural-image-generator'
  }
]

export const education: TimelineEntry[] = [
  {
    year: '2025 –',
    role: 'M.Sc. Machine Learning, Data Science & AI',
    org: 'Aalto University',
    detail: "Master's Programme",
    badge: 'M.Sc.'
  },
  {
    year: '2022 – 25',
    role: 'B.Sc. Computer Science',
    org: 'Aalto University',
    detail: 'GPA 4.85 / 5.0',
    badge: 'B.Sc.'
  },
  {
    year: '2024',
    role: 'Exchange Semester',
    org: 'Nanyang Technological University',
    detail: 'Singapore',
    badge: 'Exchange'
  },
  {
    year: '2021 – 22',
    role: 'B.Sc. Applied Mathematics & Informatics',
    org: 'Saint-Petersburg State University',
    detail: 'Transferred to Aalto',
    badge: 'Dropped'
  }
]

export const experience: ExperienceEntry[] = [
  {
    role: 'Launchpad Software Engineer',
    org: 'Smartly',
    detail:
      'Building and shipping ad-platform integrations for Snapchat and LinkedIn used by advertisers managing large-scale campaigns',
    dateLabel: '05/2026 – present',
    start: 2026.33,
    end: 2026.58
  },
  {
    role: 'Software Developer',
    org: 'Nordic Fun Gaming',
    detail:
      'Owned web games end-to-end - frontend, backend, infrastructure, deployment - supporting tens of thousands of concurrent players; delivered products generating 80%+ of company revenue',
    dateLabel: '12/2024 – present',
    start: 2024.92,
    end: 2026.58
  },
  {
    role: 'Research Assistant',
    org: 'Aalto University',
    detail:
      'AI-powered TA assistant integrating model APIs with custom prompt pipelines, chatbot and helping features, and a file submission system that significantly cut memory usage - production platform serving thousands of students',
    dateLabel: '11/2023 – 07/2024, 01/2025 – 05/2026',
    start: 2023.83,
    end: 2026.4
  },
  {
    role: 'Teaching Assistant',
    org: 'Aalto University',
    detail:
      "Coached student groups in programming courses, one team delivering a notable course project. Also supported students across various math courses, including Calculus, Probability, and Discrete Math in Aalto's Laskutupa",
    dateLabel: '09/2023 – 04/2024, 01/2025 – 04/2025, 01/2026 - 04/2026',
    start: 2023.67,
    end: 2026.4
  }
]
