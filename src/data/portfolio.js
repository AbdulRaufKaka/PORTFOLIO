import satintelChat from '../assets/Chat_Interface.jpeg'
import satintelLight from '../assets/Landing_page_Light_Mode.jpeg'
import satintelStats from '../assets/Stats.jpeg'
import satintelTesting from '../assets/Testing_Result.jpeg'
import satintelDark from '../assets/landing_page_Dark_Mode.jpeg'
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

export const GENERAL_INFO = {
  name: 'Abdul Rauf Kaka',
  firstName: 'Abdul Rauf',
  email: 'arauf9229@gmail.com',
  emailSubject: "Let's collaborate on a project",
  emailBody: 'Hi Abdul Rauf, I came across your portfolio and would like to talk about...',
}

export const SOCIAL_LINKS = [
  { name: 'github', url: 'https://github.com/AbdulRaufKaka' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/abdulraufkaka' },
  { name: 'email', url: `mailto:${GENERAL_INFO.email}` },
]

export const MENU_LINKS = [
  { name: 'Home', id: 'banner' },
  { name: 'About Me', id: 'about-me' },
  { name: 'My Stack', id: 'my-stack' },
  { name: 'Projects', id: 'selected-projects' },
]

export const HERO = {
  titleTop: 'FULL-STACK',
  titleBottom: 'DEVELOPER',
  intro:
    'A frontend focused Full Stack Developer building scalable and responsive web solutions.',
  availability: 'Available for full-time opportunities',
}

export const ABOUT = {
  statement:
    'I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.',
  greeting: "Hi, I'm Abdul Rauf Kaka.",
  paragraphs: [
    "I'm a frontend-focused full-stack developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.",
    'My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.',
  ],
}

export const MY_STACK = {
  frontend: [
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
    { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
  ],
  database: [
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  ],
  tools: [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  ],
}

export const STATS = [
  { value: `${Object.values(MY_STACK).flat().length}+`, label: 'Technologies' },
  { value: '02', label: 'Featured Projects' },
  { value: '100%', label: 'Commitment' },
]

export const PROJECTS = [
  {
    slug: 'satintel',
    title: 'SatIntel',
    subtitle: 'Final Year Project with SUPARCO Resolve Lab',
    year: '2025',
    techStack: ['Multimodal AI', 'RemoteCLIP', 'Phi-3.5-Mini', 'LoRA', 'GroundingDINO', 'SAM2'],
    gradient: ['#00F05A', '#00BFF0'],
    images: [
      { src: satintelDark, label: 'Landing — Dark' },
      { src: satintelLight, label: 'Landing — Light' },
      { src: satintelChat, label: 'Chat Interface' },
      { src: satintelStats, label: 'Benchmark Stats' },
      { src: satintelTesting, label: 'Detection Results' },
    ],
    liveUrl: '',
    sourceUrl: '',
    description:
      'An end-to-end multimodal AI for satellite image intelligence, developed in collaboration with SUPARCO.',
    highlights: [
      'Integrated RemoteCLIP as a vision encoder with Phi-3.5-Mini (3.8B LLM) via a custom MLP projector.',
      'Trained across a 3-stage pipeline: Feature Alignment and Visual Instruction Tuning.',
      'Applied LoRA fine-tuning for efficient GPU training.',
      'Incorporated GroundingDINO and SAM2 for zero-shot object detection and segmentation via autonomous tool routing.',
      'Evaluated on RSICD and RSVQA-LR benchmarks, achieving results comparable to GeoChat and LLaVA-RE.',
    ],
  },
  {
    slug: 'thrift-store',
    title: 'Thrift Store',
    subtitle: 'E-Commerce Web Application',
    year: '2024',
    techStack: ['React.js', 'MongoDB', 'Axios', 'Redis', 'Stripe', 'JWT'],
    gradient: ['#F7B500', '#FF3D7F'],
    liveUrl: '',
    sourceUrl: '',
    description:
      'A full-stack e-commerce application with dynamic product listings, secure authentication and real-time payments.',
    highlights: [
      'Developed a full-stack e-commerce application using React.js, implementing dynamic product listings, client-side routing, and efficient state management.',
      'Implemented secure user authentication and authorization using JWT access and refresh tokens to improve session management and data protection.',
      'Integrated Stripe payment gateway to enable secure payment and checkout processing with real-time transaction handling.',
      'Leveraged Redis caching to optimize data retrieval for frequently accessed endpoints, reducing server response latency.',
      'Used Axios and React Hooks for efficient API communication and asynchronous state management across application workflows.',
    ],
  },
]
