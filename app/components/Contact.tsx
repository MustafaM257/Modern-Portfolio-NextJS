import React from "react";
import { Meteors } from "./ui/metors";
import Container from "./shared/Container";
import { IconPhone, IconMail, IconLocation } from "@tabler/icons-react";
import { title } from "process";
import ContactCard from "./ContactCard";
const contacts = [
  {
    icon: IconPhone,
    title: "Phone Numbers",
    description: [
      {
        title: "+1 (347) 382-2775",
        link: "tel:+13473822775",
      },
      {
        title: "+961 (81) 879-053",
        link: "tel:+96181879053",
      },
    ],
  },
  {
    icon: IconMail,
    title: "Email",
    description: [
      {
        title: "mustafa.m257@proton.me",
        link: "mailto:mustafa.m257@proton.me",
      },
    ],
  },
  {
    icon: IconLocation,
    title: "Location",
    description: [
      {
        title: "New Jersey, United States",
      },
      {
        title: "Beirut, Lebanon",
      },
    ],
  },
];
export function Contact() {
  return (
    <Container id="contact" title="Contact Me" className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            title={contact.title}
            icon={<contact.icon stroke={2} className="text-white" />}
            description={contact.description}
          />
        ))}
      </div>
    </Container>
  );
}
export default Contact;
