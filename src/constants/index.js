import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    tesla,
    robot,
    jobit,
    tripguide,
    threejs,
    restaurant,
    bank,
    chat,
    compar,
    maffin,
    flex,
    arti,
    jquery,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Haqqımda",
    },
    {
      id: "work",
      title: "İşlərim",
    },
    {
      id: "contact",
      title: "Əlaqə",
    },
  ];
  
  const services = [
    {
      title: "Front-end",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "UX/UI & Graphic Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Developer",
      company_name: "Compar Academy",
      icon: compar,
      iconBg: "#E6DEDD",
      date: "2018 - 2019",
      points: ["Compar Academy - də proqramlaşdırma kursu kursunu bitirdikdən sonra bir il orada mentor kimi təcrübə keçdim."],
    },
    {
      title: "Graphic & UX/UI Designer",
      company_name: "Maffin Agency",
      icon: maffin,
      iconBg: "#E6DEDD",
      date: "2019 - 2020",
      points: ["Maffin Agency - də qrafik və UX/UI dizayner kimi çalışmağa başladım."],
    },
    {
      title: "Frontend Developer, UX/UI Designer",
      company_name: "Flex Agency",
      icon: flex,
      iconBg: "#E6DEDD",
      date: "2020 - 2021",
      points: ["Flex Agency - də UX/UI dizayner və Front-end developer kimi fəaliyyətə başladım."],
    },
    {
      title: "Practitioner",
      company_name: "Innovative And Strategic Leadership - Training Conducted by ARTI",
      icon: arti,
      iconBg: "#E6DEDD",
      date: "2021 - 2022",
      points: ["ARTİ - nin keçirdiyi İnnovativ və Strateji Liderlik təlimində iştirak etdim."],
    },
  ];
  
  const projects = [
    {
      name: "AI App",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Open AI",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDb",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: robot,
      source_code_link: "https://gpt3-webproject.netlify.app/",
    },
    {
      name: "Metaversus",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Framer-motion",
          color: "pink-text-gradient",
        },
      ],
      image: robot,
      source_code_link: "https://gpt3-webproject.netlify.app/",
    },
    {
      name: "Wibe Studio",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Framer-motion",
          color: "pink-text-gradient",
        },
      ],
      image: robot,
      source_code_link: "https://gpt3-webproject.netlify.app/",
    },
    {
      name: "Studio hair",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Framer-motion",
          color: "pink-text-gradient",
        },
      ],
      image: robot,
      source_code_link: "https://gpt3-webproject.netlify.app/",
    },
    {
      name: "GPT-3",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: robot,
      source_code_link: "https://gpt3-webproject.netlify.app/",
    },
    {
      name: "Restaurant App",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: restaurant,
      source_code_link: "https://restaurant-project-akrmv.netlify.app/",
    },
    {
      name: "Bank App",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: bank,
      source_code_link: "https://fullresponsive-bank-app.netlify.app",
    },
    {
      name: "Travel Chat",
      description:
        "",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "vitejs",
          color: "pink-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://viator-chat.netlify.app/",
    },
    {
      name: "Pacman",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://viator-chat.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };