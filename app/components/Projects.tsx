import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/projects-bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Container from "./shared/Container";

export function Projects() {
  return (
    <Container id="projects" title="Projects">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </Container>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Events Management System",
    href: "https://github.com/MustafaM257/Events-Application-NextJS",
    description:
      "Next.js, TypeScript, Tailwind CSS, Stripe, REST API, Serverless Functions, MongoDB, Mongoose, Clerk Auth, Webhooks.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Learning Management System",
    href: "https://github.com/MustafaM257/LMS",
    description:
      "PHP, JavaScript, MySQL, SMTP, REST API, HTML, CSS, Bootstrap.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Github Search App",
    href: "https://github.com/MustafaM257/React-GithubSearchUsers",
    description:
      "React, Styled Components, REST API, GitHub API, Axios, Fusion Charts.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Job Portal APIS",
    href: "https://github.com/MustafaM257/Jobs-API",

    description: "Node.js, Express, MongoDB, Mongoose, REST API, JWT, Bcrypt.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Modern Portfolio",
    href: "https://github.com/MustafaM257/Modern-Portfolio-NextJS",
    description: "React, TypeScript, Tailwind CSS, Next.js, Framer Motion.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "URL Shortener",
    href: "https://github.com/MustafaM257/url-shortener",
    description:
      "Vue, Nuxt, TypeScript, Tailwind CSS, Server actions, Supabase, Prisma.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];

export default Projects;
