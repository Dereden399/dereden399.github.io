export const navbarHeight = '4rem'

export const navbarHeightNum = 4

export const educationTimelineSize = 3000

export const aboutMeDescription = `
            I'm Denis Kuznetsov, an Aalto University student and ambitious 
            programmer. I have many years of coding experience in full-stack web
            development and also mobile software development and several other
            technologies, such as C++, Scala, and Python. I participated in
            multiple coding challenges during my studies at school. I am highly
            enthusiastic and open to any programming activity, especially web
            and mobile development, as well as machine learning.
`

export interface SchoolType {
  name: string
  startYear: string
  endYear: string | null
  gpa: string
  description: string
  skills: string[]
}

export const schoolDescription: SchoolType = {
  name: 'Gymnasium 399',
  startYear: '2019',
  endYear: '2021',
  gpa: '5.0',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique iaculis tortor, ut consequat mauris pellentesque nec. Quisque sed ante laoreet, sodales elit vitae, suscipit est. Ut diam odio, molestie at urna bibendum, laoreet sagittis dolor. Phasellus tristique et lectus nec lobortis. Etiam ultricies sit amet quam quis vestibulum.',
  skills: ['skill1', 'skill2', 'skill3']
}
export const spbuDescription: SchoolType = {
  name: 'Saint Petersburg State University',
  startYear: '2021',
  endYear: '2022',
  gpa: '4.5',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique iaculis tortor, ut consequat mauris pellentesque nec. Quisque sed ante laoreet, sodales elit vitae, suscipit est. Ut diam odio, molestie at urna bibendum, laoreet sagittis dolor. Phasellus tristique et lectus nec lobortis. Etiam ultricies sit amet quam quis vestibulum.',
  skills: []
}
export const aaltoDescription: SchoolType = {
  name: 'Aalto University',
  startYear: '2022',
  endYear: null,
  gpa: '4.85',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique iaculis tortor, ut consequat mauris pellentesque nec. Quisque sed ante laoreet, sodales elit vitae, suscipit est. Ut diam odio, molestie at urna bibendum, laoreet sagittis dolor. Phasellus tristique et lectus nec lobortis. Etiam ultricies sit amet quam quis vestibulum.',
  skills: []
}
