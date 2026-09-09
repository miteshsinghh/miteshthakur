import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { TypographyH3, TypographyP } from "@/components/ui/typography";

export type Skill = {
  title: string;
  bg?: string;
  fg?: string;
  icon: ReactNode;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "agri-market",
    category: "Agriculture marketplace",
    title: "Agri Market App",
    src: "/assets/portfolio/agri-market.png",
    screenshots: ["/assets/portfolio/agri-market.png"],
    skills: { frontend: [], backend: [] },
    content: (
      <div>
        <TypographyP className="font-mono text-xl text-center">
          A project focused on connecting farmers and buyers through technology.
        </TypographyP>
        <TypographyH3 className="my-4 mt-8">Project overview</TypographyH3>
        <p className="font-mono mb-4 text-muted-foreground leading-relaxed">
          Smart India Hackathon (SIH) is a nationwide initiative that provides
          students a platform to solve pressing problems and build a culture of
          product innovation and problem-solving.
        </p>
        <p className="font-mono text-muted-foreground leading-relaxed">
          Mission: bridge the gap between farmers and buyers by eliminating
          intermediaries through technology.
        </p>
        <p className="mt-4 text-sm text-muted-foreground font-mono">
          Listed in the CV as: August 2025 – Present.
        </p>
      </div>
    ),
  },
  {
    id: "fashion-ekart",
    category: "E-commerce website",
    title: "Fashion Ekart Website Using WordPress",
    src: "/assets/portfolio/fashion-ekart.png",
    screenshots: ["/assets/portfolio/fashion-ekart.png"],
    skills: { frontend: [], backend: [] },
    content: (
      <div>
        <TypographyP className="font-mono text-xl text-center">
          A responsive fashion e-commerce website built using WordPress.
        </TypographyP>
        <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
        <ul className="list-disc pl-5 space-y-2 font-mono text-muted-foreground">
          <li>Product listings</li>
          <li>Product categories</li>
          <li>Shopping cart</li>
          <li>Checkout functionality</li>
        </ul>
      </div>
    ),
  },
  {
    id: "sap-manufacturing-dashboard",
    category: "Manufacturing dashboard",
    title: "Dashboard of Company Manufacturing using SAP Management System",
    src: "/assets/portfolio/sap-dashboard.png",
    screenshots: ["/assets/portfolio/sap-dashboard.png"],
    skills: { frontend: [], backend: [] },
    content: (
      <div>
        <TypographyP className="font-mono text-xl text-center">
          A manufacturing dashboard using the SAP Management System.
        </TypographyP>
        <TypographyH3 className="my-4 mt-8">Purpose</TypographyH3>
        <p className="font-mono text-muted-foreground leading-relaxed">
          Developed to monitor production data, inventory, and business
          operations.
        </p>
      </div>
    ),
  },
];

export default projects;
