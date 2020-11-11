export const projects = [
  {
    title: 'Is This Jollof ?',
    summary:
      'Using Machine Learning (Convultional Neural Networks), we identify if that plate of food is jollof rice or not',
    description: `A twitter bot that converts tweets to audio using Machine Learning.<br />
                  Mention @threadspeaker at the last tweet of a thread and it sends you a link to the audio.`,
    location: {
      url: 'https://isthisjollof.com',
      name: 'View Project',
    },
    image: {
      url:
        'https://res.cloudinary.com/cheapflix/image/upload/v1604265689/isthisjollof-card.png',
      alt: '',
    },
    featured: true,
    github: {
      url: null,
      name: null,
    },
    tags: ['Web', 'Twitter Bot'],
    stack: ['NodeJs', 'Google Cloud Platform'],
  },
  {
    title: '@threadspeaker',
    summary:
      'A twitter bot that converts tweets to audio using text-to-speech synthesis',
    description: `A twitter bot that converts tweets to audio using Machine Learning.<br />
                  Mention @threadspeaker at the last tweet of a thread and it sends you a link to the audio.`,
    location: {
      url: 'https://threadspeaker.app',
      name: 'View Project',
    },
    image: {
      url:
        'https://res.cloudinary.com/cheapflix/image/upload/v1600531602/threadspeaker/card.png',
      alt: '',
    },
    featured: true,

    github: {
      url: null,
      name: null,
    },
    tags: ['Web', 'Twitter Bot'],
    stack: ['NodeJs', 'Google Cloud Platform'],
  },
  {
    title: 'Cloud Functions For Firebase Boilerplate',
    summary:
      'A cloud functions template for writing scalable and maintainable code',
    description: `An ever-evolving, opinionated architecture and development environment for writing and structuring google cloud functions for firebase.
    It takes into account performance of cloud functions, and developer productivity.`,
    location: {
      url: null,
      alt: null,
    },
    featured: true,

    image: {
      url:
        'https://res.cloudinary.com/cheapflix/image/upload/v1598585539/projects-images/Cloud_functions_for_firebase_boilerplate_2.png',
      alt: 'Cloud functions boilerplate',
    },
    github: {
      url: 'https://github.com/chidindu-ogbonna/cloud-functions-boilerplate',
      name: '',
    },
    tags: ['Web', 'Twitter'],
    stack: ['TypeScript', 'Cloud Functions for Firebase'],
  },
  {
    title: 'Estimating the Rt of COVID-19 in Nigeria',
    summary: 'Statistical models and analysis on coronavirus in Nigeria',
    description: `A data analysis project done during the coronavirus pandemic. This project offers visual insights
      and statiscal analysis into the development and spread of the virus within Nigeria. It also shows estimated
      calculations on the Effective Reproduction Number (Rt) of the virus.`,
    location: {
      url:
        'https://nbviewer.jupyter.org/github/6ones/covid-19/blob/master/Real-time%20Rt%20in%20Nigeria.ipynb',
      name: 'View notebook',
    },
    featured: false,

    image: {
      url:
        'https://res.cloudinary.com/cheapflix/image/upload/v1598585539/projects-images/covid-19-rt_2.png',
      alt: '',
    },
    github: {
      url: 'https://github.com/chidindu-ogbonna/datahorror',
      name: '',
    },
    tags: ['Web', 'Twitter'],
    stack: ['Python', 'Pandas'],
  },
]

export const articles = [
  {
    title: 'How is Nigeria Faring in the Fight Against COVID-19',
    description:
      ' A data-centric assessment into the control of the coronavirus pandemic in Nigeria',

    createdAt: 'Apr 25, 2020',
    isExternal: true,
    external: {
      link:
        'https://medium.com/@6ones/how-is-nigeria-faring-in-the-fight-against-covid-19-f52bfc81b8a?source=---------2------------------',
      text: 'medium',
    },
    image:
      'https://res.cloudinary.com/cheapflix/image/upload/v1598585539/projects-images/Nigeria-against-covid-19_6.png',
    tags: ['Coronavirus', 'Data Analysis'],
  },
]

export const experiences = [
  {
    location: 'Charlotte, North Carolina. USA & Nigeria',
    role: 'Software Engineer & Data Scientist',
    company: {
      name: 'Medherd',
      url: 'https://medherd.com',
    },
    period: 'August 2019 - Present',
    summary: `I've built front-ends, deployed cloud functions, and web scrapers on Google Cloud Platform.
              Currently experimenting with Data to offer useful insights to our users.
              I work remotely from Nigeria.`,
  },
  {
    location: 'Lagos, Nigeria',
    role: 'Frontend Developer',
    company: {
      name: 'Enterfive',
      url: 'https://enterfive.com',
    },
    period: 'June 2018 - June 2019',
    summary: ` I built Progressive Web Apps (PWAs), to aid quick adoption of services in emerging markets.
              Optimizing for speed, and performance was essential, especially when you know your users are using low end devices`,
  },
]
