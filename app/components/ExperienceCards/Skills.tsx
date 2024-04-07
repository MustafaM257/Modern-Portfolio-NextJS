import { cn } from "@/utils/cn";
import React from "react";
import {
  HTMLIcon,
  CSSIcon,
  JSIcon,
  ReactIcon,
  BootstrapIcon,
  TailwindIcon,
  NextJSIcon,
  TSIcon,
  NuxtJSIcon,
  VueIcon,
  NodeJSIcon,
  DockerIcon,
  KubernetesIcon,
} from "../shared/icons/skills";

import { BentoGrid, BentoGridItem } from "../ui/skills-bento-grid";
import Container from "../shared/Container";

export function Skills() {
  return (
    <div className=" max-w-4xl mx-auto space-y-6 ">
      <h1 className="experience-title ">Skills</h1>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={
              i === 3 || i === 9 || i === 13 || i === 19 ? "md:col-span-2" : ""
            }
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "JavaScript",
    description: "Master the language of the web.",
    header: <Skeleton />,
    icon: <JSIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "React",
    description: "Build powerful user interfaces.",
    header: <Skeleton />,
    icon: <ReactIcon className="w-8 h-8" />, // Changed className
  },
  {
    title: "TypeScript",
    description: "Enhance your JavaScript with static types.",
    header: <Skeleton />,
    icon: <TSIcon className="w-8 h-8" />, // Already has className
  },
  {
    title: "Vue.js",
    description: "Create interactive web interfaces with ease.",
    header: <Skeleton />,
    icon: <VueIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "Node.js",
    description: "Build scalable network applications.",
    header: <Skeleton />,
    icon: <NodeJSIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "Next.js",
    description: "The React framework for production.",
    header: <Skeleton />,
    icon: <NextJSIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "Nuxt.js",
    description: "The intuitive Vue framework for building applications.",
    header: <Skeleton />,
    icon: <NuxtJSIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "HTML",
    description: "The standard markup language for creating web pages.",
    header: <Skeleton />,
    icon: <HTMLIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "CSS",
    description: "Style your web pages with CSS.",
    header: <Skeleton />,
    icon: <CSSIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",
    header: <Skeleton />,
    icon: <TailwindIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "Bootstrap",
    description: "The world’s most popular front-end component library.",
    header: <Skeleton />,
    icon: <BootstrapIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "Docker",
    description: "Build, ship, and run distributed applications.",
    header: <Skeleton />,
    icon: <DockerIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "Kubernetes",
    description: "Manage containerized applications across clusters.",
    header: <Skeleton />,
    icon: <KubernetesIcon className="w-8 h-8" />, // Added className
  },
];

export default Skills;
