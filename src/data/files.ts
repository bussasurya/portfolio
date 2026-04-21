import { VscCode, VscJson, VscFileMedia, VscTerminalCmd } from "react-icons/vsc";
import { SiTypescript, SiJavascript, SiReact, SiCss, SiHtml5 } from "react-icons/si";
import { IconType } from "react-icons";

export interface FileType {
  name: string;
  language: string;
  content: string;
  icon: IconType;
  color: string;
}

export const filesData: FileType[] = [
  {
    name: "home.tsx",
    language: "typescript",
    icon: SiReact,
    color: "#61dafb",
    content: `// Welcome to my portfolio!
// I'm a passionate developer building interactive web experiences.

const developer = {
  name: "Surya",
  roles: ["Frontend Engineer", "Full Stack Developer", "UX Enthusiast"],
  status: "Open to new opportunities",
  greeting: () => "Hello, World!"
};

export default function Home() {
  return (
    <div className="hero">
      <h1>{developer.greeting()}</h1>
      <p>I am {developer.name}, a {developer.roles[0]} building things for the web.</p>
    </div>
  );
}
`
  },
  {
    name: "about.ts",
    language: "typescript",
    icon: SiTypescript,
    color: "#3178c6",
    content: `/**
 * ABOUT ME
 * 
 * Hi! I'm Surya, a developer specializing in modern web building.
 * I enjoy creating seamless digital experiences that feel robust and intuitive.
 */

export const aboutMe = {
  background: "I started coding because I loved the idea of creating something from nothing but thought.",
  hobbies: ["Coding", "Reading", "Gaming", "Exploring AI"],
  philosophy: "Write code that humans can read and machines can execute quickly."
};

console.log("Learning never stops.");
`
  },
  {
    name: "projects.js",
    language: "javascript",
    icon: SiJavascript,
    color: "#f7df1e",
    content: `// Featured Projects

export const projects = [
  {
    name: "VS Code Portfolio",
    description: "A highly interactive portfolio mimicking the VS Code interface.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/surya/vscode-portfolio"
  },
  {
    name: "DSA Mentorship Platform",
    description: "A modern platform for connecting mentors and mentees.",
    techStack: ["React", "Firebase", "TailwindCSS"],
    link: "https://dsamentor.com"
  },
  {
    name: "Space Portfolio 3D",
    description: "Futuristic 3D space-themed portfolio.",
    techStack: ["Three.js", "React Three Fiber", "GSAP"],
    link: "https://space.surya.dev"
  }
];
`
  },
  {
    name: "skills.json",
    language: "json",
    icon: VscJson,
    color: "#cbcb41",
    content: `{
  "languages": [
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML",
    "CSS"
  ],
  "frameworks": [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Tailwind CSS"
  ],
  "tools": [
    "Git",
    "Docker",
    "Figma",
    "Vite",
    "Webpack"
  ],
  "databases": [
    "MongoDB",
    "PostgreSQL",
    "Firebase"
  ]
}
`
  },
  {
    name: "experience.ts",
    language: "typescript",
    icon: SiTypescript,
    color: "#3178c6",
    content: `// Work Experience Timeline

interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Tech Solutions Inc.",
    role: "Frontend Developer",
    period: "2023 - Present",
    highlights: [
      "Led the migration of a legacy app to Next.js, improving load times by 40%.",
      "Developed an extensive UI component library used across 3 products."
    ]
  },
  {
    company: "Startup Co.",
    role: "Junior Web Developer",
    period: "2021 - 2023",
    highlights: [
      "Implemented responsive designs using Tailwind CSS.",
      "Integrated RESTful APIs into React frontend."
    ]
  }
];
`
  },
  {
    name: "contact.css",
    language: "css",
    icon: SiCss,
    color: "#1572b6",
    content: `/* 
 * GET IN TOUCH 
 * Feel free to reach out for collaborations or just a friendly hello.
 */

:root {
  --email: "mailto:surya@example.com";
  --github: "https://github.com/surya";
  --linkedin: "https://linkedin.com/in/surya";
  --twitter: "https://twitter.com/surya";
}

.contact-me {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  cursor: pointer;
}

.contact-me:hover {
  transform: scale(1.05); /* Reach out! */
}
`
  }
];
