import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/projects-bento-grid";
import {
  IconCalendarEvent, // Events Management System
  IconBooks, // Learning Management System
  IconUserSearch, // Github Search App
  IconDesk, // Job Portal
  IconUserScreen, // Modern Portfolio
  IconUnlink, // URL Shortener
} from "@tabler/icons-react";
import Container from "./shared/Container";

export function Projects() {
  return (
    <Container id="projects" title="Projects">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[12rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </Container>
  );
}

const items = [
  {
    title: "Events Management System",
    href: "https://github.com/MustafaM257/Events-Application-NextJS",
    description:
      "Next.js, TypeScript, Tailwind CSS, Stripe, REST API, Serverless Functions, MongoDB, Mongoose, Clerk Auth, Webhooks.",
    className: "md:col-span-2",
    icon: <IconCalendarEvent className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Job Portal APIS",
    href: "https://github.com/MustafaM257/Jobs-API",
    description: "Node.js, Express, MongoDB, Mongoose, REST API, JWT, Bcrypt.",
    className: "md:col-span-1",
    icon: <IconDesk className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Github Search App",
    href: "https://github.com/MustafaM257/React-GithubSearchUsers",
    description:
      "React, Styled Components, REST API, GitHub API, Axios, Fusion Charts.",
    className: "md:col-span-1",
    icon: <IconUserSearch className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Learning Management System",
    href: "https://github.com/MustafaM257/LMS",
    description:
      "PHP, JavaScript, MySQL, SMTP, REST API, HTML, CSS, Bootstrap.",
    className: "md:col-span-2",
    icon: <IconBooks className="h-8 w-8 text-neutral-500" />,
  },

  {
    title: "Modern Portfolio",
    href: "https://github.com/MustafaM257/Modern-Portfolio-NextJS",
    description: "React, TypeScript, Tailwind CSS, Next.js, Framer Motion.",
    className: "md:col-span-2",
    icon: <IconUserScreen className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "URL Shortener",
    href: "https://github.com/MustafaM257/url-shortener",
    description:
      "Vue, Nuxt, TypeScript, Tailwind CSS, Server actions, Supabase, Prisma.",
    className: "md:col-span-1",
    icon: <IconUnlink className="h-8 w-8 text-neutral-500" />,
  },
];

export default Projects;
