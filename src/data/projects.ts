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
    title: "MyKlub",
    description: "Portfolio & collaboration platform for creatives.",
    image: "./MyKlub.png",
    buttonText: "Check Website",
    url: "https://myklub.io",
  },
];

export default projects;
