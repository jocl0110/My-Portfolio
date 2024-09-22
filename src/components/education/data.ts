interface Skill {
  skill: string;
  id: number;
  icon: string;
}
interface Education {
  when: string;
  name: string;
  location: string;
  school: React.ReactNode | string;
  id: number;
}
const skills: Skill[] = [
  { skill: "HTML5", id: 1, icon: "/svg/html5.svg" },
  { skill: "JavaScript", id: 2, icon: "/svg/javascript.svg" },
  { skill: "React", id: 3, icon: "/svg/react.svg" },
  { skill: "React Router", id: 4, icon: "/svg/reactrouter.svg" },
  { skill: "GitHub", id: 5, icon: "/svg/github.svg" },
  { skill: "TypeScript", id: 6, icon: "/svg/typescript.svg" },
  { skill: "Git", id: 7, icon: "/svg/git.svg" },
  { skill: "C++", id: 8, icon: "/svg/c++.svg" },
  { skill: "Tailwind", id: 9, icon: "/svg/tailwindcss.svg" },
];
const learning = [
  { skill: "Node.js", id: 1, icon: "/svg/nodejs.svg" },
  { skill: "Express.js", id: 2, icon: "/svg/expressjs.svg" },
  { skill: "MySQL", id: 3, icon: "/svg/mysql.svg" },
  { skill: "MongoDB", id: 4, icon: "/svg/mongodb.svg" },
  { skill: "Python", id: 5, icon: "/svg/python.svg" },
  { skill: "Angular", id: 6, icon: "/svg/angular.svg" },
];

const education: Education[] = [
  {
    when: "Graduated 05/2019",
    name: "High School",
    location: "Pinar del Rio, Cuba",
    school: "Friedrich Engels",
    id: 1,
  },
  {
    when: "Finished 03/2022(Not Graduated)",
    name: "Bachelor' Degree",
    location: "Havana, Cuba",
    school: "University of Informatics Sciences",
    id: 2,
  },
  {
    when: "Finished 05/2023",
    name: "Responsive Web Design Developer Certification",
    location: "Online",
    school: "freeCodeCamp",
    id: 3,
  },
  {
    when: "Finished 01/26/2024",
    name: "Programming Basics",
    location: "Online",
    school: "Code The Dream",
    id: 4,
  },
  {
    when: "Finished 06/27/2024",
    name: "React.JS",
    location: "Online",
    school: "Code The Dream",
    id: 5,
  },
];

const tabs = [
  { name: "Knowledge", content: { skills } },
  { name: "Learning", content: { learning } },
];

// Temporal Projects
const projects = [
  { description: "Cow", img: "/images/cow.webp", alt: "cow image" },
  {
    description: "Flower",
    img: "/images/flower.webp",
    alt: "flower image",
  },
  {
    description: "Turtle",
    img: "/images/turtle.webp",
    alt: "turtle image",
  },
];

export { skills, education, learning, tabs, projects };
