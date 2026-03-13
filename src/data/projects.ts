// src/data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  buttonText?: string;
  url?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "VibePrint",
    description: "A full B2B/B2C e-commerce platform for a branding company - VibePrint.",
    image: "./VibePrint_KevinM.png",
    buttonText: "Check Website",
    url: "https://vibeprint.co.ke",
  },
  {
    id: 2,
    title: "Viagens Safaris",
    description: "Viagens Africa Safaris is a dynamic and fast growing Tours and Ticketing Company.",
    image: "./Viagens_Kev.png",
    buttonText: "Check Website",
    url: "https://viagensafricasafaris.com",
  },
  {
    id: 3,
    title: "Adarah",
    description: "Adarah helps mothers understand symptoms and know when to seek urgent care.",
    image: "./Adarah.png",
    buttonText: "Check Website",
    url: "https://adarah.vercel.app/",
  },
  {
    id: 4,
    title: "PrimeEdgeAi",
    description: "Prime Edge AI helps businesses worldwide gain a decisive edge through AI education, intelligent automation, and custom AI solutions — built to reduce costs, accelerate growth, and.",
    image: "./PrimeEdgeAIpic.png",
    buttonText: "Check Website",
    url: "https://primeedgeai.net",
  },
];

export default projects;
