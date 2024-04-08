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
  PythonLogo,
  MySQLLogo,
  MongoDBLogo,
  GraphQLLogo,
  ASPCoreLogo,
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

    icon: <JSIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "TypeScript",
    description: "Enhance your JavaScript with static types.",

    icon: <TSIcon className="w-8 h-8" />, // Already has className
  },
  {
    title: "React",
    description: "Build powerful user interfaces.",

    icon: <ReactIcon className="w-8 h-8" />, // Changed className
  },
  {
    title: "Next.js",
    description: "The React framework for production.",

    icon: <NextJSIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "Vue.js",
    description: "Create interactive web interfaces with ease.",

    icon: <VueIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "Nuxt.js",
    description: "The intuitive Vue framework for building applications.",

    icon: <NuxtJSIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapid UI development.",

    icon: <TailwindIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "Node.js",
    description: "Build scalable network applications.",

    icon: <NodeJSIcon className="w-8 h-8" />, // Added className
  },

  {
    title: "Docker",
    description: "Build, ship, and run distributed applications.",

    icon: <DockerIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "Kubernetes",
    description: "Manage containerized applications across clusters.",

    icon: <KubernetesIcon className="w-8 h-8" />, // Added className
  },
  {
    title: "Python",
    description:
      "A versatile language used in web development, data science, and more.",

    icon: <PythonLogo className="w-8 h-8" />, // Added className
  },
  {
    title: "MySQL",
    description: "An open-source relational database management system.",

    icon: <MySQLLogo className="w-8 h-8" />, // Added className
  },
  {
    title: "MongoDB",
    description: "A NoSQL database that’s flexible and scalable.",

    icon: <MongoDBLogo className="w-8 h-8" />, // Added className
  },

  {
    title: ".NET Core",
    description:
      "A cross-platform, high-performance framework for building modern cloud-based applications.",

    icon: <ASPCoreLogo className="w-8 h-8" />, // Added className
  },
  {
    title: "GraphQL",
    description: "A query language for your API.",

    icon: <GraphQLLogo className="w-8 h-8" />, // Added className
  },
];

export default Skills;
