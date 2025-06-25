export const navbarHeight = '2rem'

export const navbarHeightNum = 2

export const educationTimelineSize = 4000

export const aboutMeDescription =
  "<p>I'm an <b>ambitious programmer</b> and current student at Aalto University. With many years of experience in <b>full-stack web development</b> and <b>mobile software development</b>, I have a passion for creating innovative and efficient solutions. My expertise extends to a variety of technologies, including <b>C++</b>, <b>Scala</b>, and <b>Python</b>, making me a versatile and well-rounded developer.</p>" +
  '<p>I consider myself a well-rounded specialist, with a strong interest in numerous coding-related technologies. My curiosity and enthusiasm drive me to explore different areas, from <b>graphic engineering</b> to <b>machine learning</b>. This curiosity helps me approach problems from various angles and develop comprehensive solutions that make the most of the latest tech advancements</p>'

export const mySkills = [
  'Typescript',
  'Javascript',
  'C++',
  'Scala',
  'Python',
  'Swift',
  'React',
  'Vue.js',
  'SQL',
  'React Native',
  'OpenGL',
  'Metal'
]

export interface SchoolType {
  name: string
  startYear: string
  endYear: string | null
  gpa: string | null
  description: string
  badges: string[]
  skills: string[]
}

export interface ProjectInfoType {
  name: string
  description: string
  technologies: string[]
  isPrivate: boolean
  link?: string
}

const spbuDescription: SchoolType = {
  name: 'Saint-Petersburg State University',
  startYear: '2021',
  endYear: '2022',
  gpa: '4.5',
  badges: ['B.S.', 'Dropped'],
  description:
    'Major <b>"Applied Math and Informatics"</b>. Courses included <b>calculus</b>, <b>algebra</b>, <b>geometry</b>, and <b>discrete math</b>. I also took courses about low-level <b>C/C++</b> concepts.',
  skills: ['Linear Algebra', 'Calculus', 'Discrete math', 'C/C++']
}
const aaltoDescription: SchoolType = {
  name: 'Aalto University',
  startYear: '2022',
  endYear: '2025',
  badges: ['B.S.'],
  gpa: '4.9',
  description:
    'Major <b>Computer Science</b>. Have taken variety of CS courses, such as <b>Data Structures and Algorithms</b>, <b>Parallel Computing</b>, and <b>Operating Systems</b>. Completed numerous projects, with one being honored as one of the best in the course. Developed strong <b>teamwork</b>, <b>agile skills</b>, and essential <b>soft skills</b>. Actively participated in <b>hackathons</b>, winning one.',
  skills: [
    'Data Structures and Algorithms',
    'Parallel Computing',
    'Computer Graphics',
    'Web Development',
    'Teamwork',
    'Agile Methodologies',
    'Soft skills'
  ]
}

const ntuDescription: SchoolType = {
  name: 'Nanyang Technological University',
  startYear: '2024',
  endYear: '2024',
  badges: ['Exchange'],
  gpa: '4.5',
  description:
    'Exchange semester at NTU, Singapore. Courses included languages and CS related stuff.',
  skills: ['Soft skills', 'Information Security', 'Embedded Systems']
}

const aaltoMastersDescription: SchoolType = {
  name: 'Aalto University',
  startYear: '2025',
  endYear: null,
  badges: ['M.S.'],
  gpa: null,
  description:
    'Major <b>Machine Learning, Data Science and Artificial Intelligence</b>',
  skills: []
}

export const schools = [
  spbuDescription,
  aaltoDescription,
  ntuDescription,
  aaltoMastersDescription
]

const StudyScheduleProject: ProjectInfoType = {
  name: 'Study Schedule',
  description:
    'A full-stack web application to plan study schedules, employing best practices like automated testing and containerized development. Features a responsive mobile-first design and dark theme, utilizing Chakra UI',
  technologies: [
    'Typescript',
    'React',
    'CI/CD',
    'MongoDB',
    'Express',
    'Redux',
    'Cypress'
  ],
  isPrivate: false,
  link: 'https://github.com/Dereden399/study-schedule-project'
}

const PortfolioWebsiteProject: ProjectInfoType = {
  name: 'My Portfolio Website',
  description:
    'While this project may not be as technologically sophisticated as others, it was built with entirely new technologies for me, showcasing my ability to adapt and learn quickly. The site features a clean, minimalistic design and is fully responsive, ensuring a good experience across different screen sizes',
  technologies: ['Typescript', 'Vue.js'],
  isPrivate: false,
  link: 'https://github.com/Dereden399/resume-website'
}

const VoiceEmotionRecognitionProject: ProjectInfoType = {
  name: 'Voice Emotion Recognition',
  description:
    'My first steps in Machine Learning. A research project, that studies an accuracy of different approaches to classify emotions based on audio sample with a notable 80% accuracy. The project comes with a small PDF article you can read for more details',
  technologies: ['Python', 'Tensorflow', 'Keras', 'Numpy'],
  isPrivate: false,
  link: 'https://github.com/Dereden399/voice-emotion-recognition'
}

const BeamexAR: ProjectInfoType = {
  name: 'BeamexAR',
  description:
    'A Proof of Concept mobile application for Beamex that I developed with a team over an entire year during a Software Project course. This innovative app uses augmented reality (AR) to guide specialists during the calibration process. It was executed using Scrum techniques and received an excellent grade.',
  technologies: ['Typescript', 'React Native', 'Scrum', 'Figma', 'CI/CD'],
  isPrivate: true
}

const ProceduralImageGeneratorProject: ProjectInfoType = {
  name: 'Procedural Image Generator',
  description:
    'A ScalaFX app that generates procedural images based on user-defined JSON rules. Users can customize shapes, colors, and other parameters to create unique images from imported tiles. The UI features native macOS design patterns and was designed with Figma. I also improved my UML understanding during development. This open-source project is available on GitHub',
  technologies: ['Scala', 'ScalaFX', 'UML'],
  isPrivate: false,
  link: 'https://github.com/Dereden399/procedural-image-generator'
}

const OpenGLRendererProject: ProjectInfoType = {
  name: 'Simple OpenGL Renderer',
  description:
    'A simple OpenGL renderer that I developed to learn the basics of OpenGL and GLSL. The project features different computer graphics technics, such as texture maps, hierarchical modelling and bloom. I also experimented with different shaders to understand how they affect the scene. This project is open-source and available on GitHub.',
  technologies: ['C++', 'OpenGL', 'GLSL'],
  isPrivate: false,
  link: 'https://github.com/Dereden399/simple-opengl-renderer'
}

const MetalRendererProject: ProjectInfoType = {
  name: 'Simple Metal Renderer',
  description:
    'Metal/Swift variation of my OpenGL renderer. The project uses SwiftUI and works on MacOS and IOS. Renderer implements some of advanced features like multipass rendering and shadows.',
  technologies: ['Swift', 'Metal', 'SwiftUI'],
  isPrivate: false,
  link: 'https://github.com/Dereden399/simple-metal-renderer'
}

export const projects = [
  BeamexAR,
  VoiceEmotionRecognitionProject,
  OpenGLRendererProject,
  MetalRendererProject,
  StudyScheduleProject,
  ProceduralImageGeneratorProject,
  PortfolioWebsiteProject
]
