"use client";
import Container from "../shared/Container";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
const workExperience = [
  {
    title: "Full Stack Developer",
    company: "techKinks",
    period: "07/2022 – 12/2023",
    location: "Beirut, Lebanon",
    description: [
      "Spearheaded the development of a Vue/Nuxt based web application, resulting in a 40% increase in user engagement.",
      "Developed robust back-end systems with Node.js, enhancing scalability and performance.",
      "Led the integration of CMS Medusa, enhancing content management capabilities and scalability for eCommerce.",
      "Designed and implemented a UI library using Nuxt3 and Tailwind CSS, reducing development time for future projects by 30%.",
      "Mentored interns, significantly improving their coding skills and project contribution rates.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "02/2021 – 07/2022",
    location: "Beirut, Lebanon",
    description: [
      "Developed MERN stack web applications, focusing on responsive design and cross-browser compatibility, resulting in high client satisfaction.",
      "Translated Figma prototypes into high-fidelity, interactive user interfaces, enhancing user experience and engagement.",
      "Stayed abreast of open source projects to push towards modern and efficient web solutions.",
    ],
  },
  {
    title: "Programming Lab Assistant",
    company: "Lebanese University",
    period: "01/2022 – 04/2022",
    location: "Beirut, Lebanon",
    description: [
      "Enhanced students' understanding of programming and algorithms through innovative teaching and mentorship.",
      "Led a 12-week intensive training program, integrating Moodle for interactive learning experiences.",
      "Provided personalized mentorship, aiding students in overcoming academic challenges and achieving success.",
    ],
  },
];

export function Work() {
  return (
    <Container title="Work" className="space-y-10 ">
      {/* {workExperience.map((experience, index) => (
        <BackgroundGradient key={index}>
          <div className="p-4 bg-transparent bg-neutral-800 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <h4 className="text-sm font-semibold">{experience.company}</h4>
            <p className="text-sm">{experience.period}</p>
            <p className="text-sm">{experience.location}</p>
            <ul className="list-disc list-inside">
              {experience.description.map((desc, index) => (
                <li key={index} className="text-sm">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </BackgroundGradient>
      ))} */}
      work experience goes here
    </Container>
  );
}
