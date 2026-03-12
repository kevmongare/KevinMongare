export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'VibePrint',
    description: 'Full B2B/B2C e-commerce platform for a branding company. Built with React, REST APIs, and performance-first architecture.',
    image: './VibePrint_KevinM.png',
    tags: ['React', 'REST API', 'E-commerce', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Viagens Safaris',
    description: 'Dynamic tours & ticketing platform for a fast-growing Africa-focused travel company.',
    image: './Viagens_Kev.png',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'MyKlub',
    description: 'Portfolio & collaboration platform built for creative professionals to showcase and connect.',
    image: './MyKlub.png',
    tags: ['MERN Stack', 'MongoDB', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default projects;
