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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique iaculis tortor, ut consequat mauris pellentesque nec. Quisque sed ante laoreet, sodales elit vitae, suscipit est. Ut diam odio, molestie at urna bibendum, laoreet sagittis dolor. Phasellus tristique et lectus nec lobortis. Etiam ultricies sit amet quam quis vestibulum.',
  skills: ['skill1', 'skill2', 'skill3']
}
const spbuDescription: SchoolType = {
  name: 'Saint-Petersburg State University',
  startYear: '2021',
  endYear: '2022',
  gpa: '4.5',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique iaculis tortor, ut consequat mauris pellentesque nec. Quisque sed ante laoreet, sodales elit vitae, suscipit est. Ut diam odio, molestie at urna bibendum, laoreet sagittis dolor. Phasellus tristique et lectus nec lobortis. Etiam ultricies sit amet quam quis vestibulum.',
  skills: []
}
const aaltoDescription: SchoolType = {
  name: 'Aalto University',
  startYear: '2022',
  endYear: null,
  gpa: '4.85',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique iaculis tortor, ut consequat mauris pellentesque nec. Quisque sed ante laoreet, sodales elit vitae, suscipit est. Ut diam odio, molestie at urna bibendum, laoreet sagittis dolor. Phasellus tristique et lectus nec lobortis. Etiam ultricies sit amet quam quis vestibulum.',
  skills: []
}

export const schools = [schoolDescription, spbuDescription, aaltoDescription]

const StudyScheduleProject: ProjectInfoType = {
  name: 'Study Schedule',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique iaculis tortor, ut consequat mauris pellentesque nec. Quisque sed ante laoreet...',
  technologies: ['Typescript', 'React', 'CI/CD', 'MongoDB', 'Express'],
  isPrivate: false,
  link: 'https://github.com/Dereden399/study-schedule-project'
}

const PortfolioWebsiteProject: ProjectInfoType = {
  name: 'My Portfolio Website',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique iaculis tortor, ut consequat mauris pellentesque nec. Quisque sed ante laoreet...',
  technologies: ['Typescript', 'Vue.js', 'Three.js'],
  isPrivate: false,
  link: 'https://github.com/Dereden399/resume-website'
}

const VoiceEmotionRecognitionProject: ProjectInfoType = {
  name: 'Voice Emotion Recognition',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique iaculis tortor, ut consequat mauris pellentesque nec.Quisque sed ante laoreet...Quisque sed ante laoreet...Quisque sed ante laoreet...Quisque sed ante laoreet...Quisque sed ante laoreet...Quisque sed ante laoreet... Quisque sed ante laoreet...Quisque sed ante laoreet...Quisque sed ante laoreet...Quisque sed ante laoreet...Quisque sed ante laoreet...Quisque sed ante laoreet...Quisque sed ante laoreet...Quisque sed ante laoreet...',
  technologies: ['Python', 'Tensorflow', 'Keras', 'Numpy'],
  isPrivate: false,
  link: 'https://github.com/Dereden399/voice-emotion-recognition'
}

const BeamexAR: ProjectInfoType = {
  name: 'BeamexAR',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique iaculis tortor, ut consequat mauris pellentesque nec. Quisque sed ante laoreet...',
  technologies: ['Typescript', 'React Native', 'Scrum', 'Figma', 'CI/CD'],
  isPrivate: true
}

const ProceduralImageGeneratorProject: ProjectInfoType = {
  name: 'Procedural Image Generator',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique iaculis tortor, ut consequat mauris pellentesque nec. Quisque sed ante laoreet...',
  technologies: ['Scala', 'ScalaFX'],
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
