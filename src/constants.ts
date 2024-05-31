export const navbarHeight = '3rem'

export const navbarHeightNum = 3

export const educationTimelineSize = 3000

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
  'React Native'
]

export interface SchoolType {
  name: string
  startYear: string
  endYear: string | null
  gpa: string
  description: string
  skills: string[]
}

export interface ProjectInfoType {
  name: string
  description: string
  technologies: string[]
  isPrivate: boolean
  link?: string
}

const schoolDescription: SchoolType = {
  name: 'Gymnasium 399',
  startYear: '2019',
  endYear: '2021',
  gpa: '5.0',
  description:
    'My programming journey began early when I discovered a deep interest in coding and <b>competitive programming</b>. During high school, I participated in multiple coding challenges, winning many of them. Theses experiences sharpened my <b>problem-solving skills</b> and fueled my enthusiasm for technology.',
  skills: ['C++', 'Python', 'Competitive programming']
}
const spbuDescription: SchoolType = {
  name: 'Saint-Petersburg State University',
  startYear: '2021',
  endYear: '2022',
  gpa: '4.5',
  description:
    'I spent a year studying <b>"Applied Math and Informatics"</b>, where I immersed myself in a variety of mathematical concepts, including <b>calculus</b>, <b>algebra</b>, <b>geometry</b>, and <b>discrete math</b>. This experience helped me build a solid foundation in <b>analytical thinking</b>. I also delved into low-level <b>C/C++</b> concepts, broadening my understanding beyond mathematics. Although I enjoyed the rigorous math curriculum, I realized my true passion lay in Computer Science. This led me to make a pivotal decision to pursue my interest further.',
  skills: ['Linear Algebra', 'Calculus', 'Problem Solving', 'C/C++']
}
const aaltoDescription: SchoolType = {
  name: 'Aalto University',
  startYear: '2022',
  endYear: null,
  gpa: '4.9',
  description:
    "I'm currently studying <b>Computer Science</b> at Aalto University, where I've immersed myself in essential concepts such as <b>Data Structures and Algorithms</b>, <b>Parallel Computing</b>, and <b>Operating Systems</b>. I've completed numerous projects, with one being honored as one of the best in the course. Through my coursework and extracurricular activities, I've developed strong <b>teamwork</b>, <b>agile skills</b>, and essential <b>soft skills</b>. I've also actively participated in <b>hackathons</b>, winning one. My experiences here have made me <b>proficient in tackling real-world problems</b> with <b>innovative solutions</b>.",
  skills: [
    'Data Structures and Algorithms',
    'Parallel Computing',
    'Teamwork',
    'Agile Methodologies',
    'Soft skills',
    'Scala'
  ]
}

export const schools = [schoolDescription, spbuDescription, aaltoDescription]

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

export const projects = [
  StudyScheduleProject,
  PortfolioWebsiteProject,
  VoiceEmotionRecognitionProject,
  ProceduralImageGeneratorProject,
  BeamexAR
]
