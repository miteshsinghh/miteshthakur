export enum SkillNames {
  DSA = "dsa",
  OOP = "oop",
  DBMS = "dbms",
  OS = "os",
  NETWORKS = "networks",
  VSCODE = "vscode",
  GIT = "git",
  GITHUB = "github",
  POSTMAN = "postman",
  TERMINAL = "terminal",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.DSA]: {
    id: 1,
    name: "dsa",
    label: "Data Structures & Algorithms",
    shortDescription: "Data Structures & Algorithms",
    color: "#111827",
    icon: "/assets/skill-icons/dsa.svg",
  },
  [SkillNames.OOP]: {
    id: 2,
    name: "oop",
    label: "Object-Oriented Programming",
    shortDescription: "Object-Oriented Programming (OOP)",
    color: "#1e3a8a",
    icon: "/assets/skill-icons/oop.svg",
  },
  [SkillNames.DBMS]: {
    id: 3,
    name: "dbms",
    label: "DBMS",
    shortDescription: "Database Management Systems",
    color: "#0f766e",
    icon: "/assets/skill-icons/dbms.svg",
  },
  [SkillNames.OS]: {
    id: 4,
    name: "os",
    label: "Operating Systems",
    shortDescription: "Operating Systems",
    color: "#374151",
    icon: "/assets/skill-icons/os.svg",
  },
  [SkillNames.NETWORKS]: {
    id: 5,
    name: "networks",
    label: "Computer Networks",
    shortDescription: "Computer Networks",
    color: "#7c3aed",
    icon: "/assets/skill-icons/networks.svg",
  },
  [SkillNames.VSCODE]: {
    id: 6,
    name: "vscode",
    label: "Visual Studio Code",
    shortDescription: "Visual Studio Code (VS Code)",
    color: "#007acc",
    icon: "/assets/skill-icons/vscode.svg",
  },
  [SkillNames.GIT]: {
    id: 7,
    name: "git",
    label: "Git",
    shortDescription: "Git version control",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 8,
    name: "github",
    label: "GitHub",
    shortDescription: "GitHub",
    color: "#111827",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.POSTMAN]: {
    id: 9,
    name: "postman",
    label: "Postman",
    shortDescription: "API testing with Postman",
    color: "#ff6c37",
    icon: "/assets/skill-icons/postman.svg",
  },
  [SkillNames.TERMINAL]: {
    id: 10,
    name: "terminal",
    label: "Command Line / Terminal",
    shortDescription: "Command Line / Terminal",
    color: "#111827",
    icon: "/assets/skill-icons/terminal.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2026",
    endDate: "Aug 2026",
    title: "IT Executive",
    company: "TDK Global Corporation — Gurugram, India",
    description: [
      "Diagnosed and resolved software glitches in Automation Software and application-related issues.",
      "Gained hands-on experience in networking infrastructure and troubleshooting.",
      "Supported troubleshooting of AM parts/production-related systems and related IT issues.",
    ],
    skills: [
      SkillNames.NETWORKS,
      SkillNames.OS,
      SkillNames.DSA,
      SkillNames.TERMINAL,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
