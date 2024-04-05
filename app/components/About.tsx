import Image from "next/image";
import MostafaImg from "../../public/assets/mostafa.jpg";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconMail,
  IconBrandLinkedin,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
const socialLinks = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/mustafa.m257/",
    icon: <IconBrandInstagram stroke={2} className="text-white" />,
  },
  {
    name: "GitHub",
    link: "https://github.com/MustafaM257",
    icon: <IconBrandGithub stroke={2} className="text-white" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mustafam257/",
    icon: <IconBrandLinkedin stroke={2} className="text-white" />,
  },
  {
    name: "Email",
    link: "mailto:mustafa.m257@proton.me",
    icon: <IconMail stroke={2} className="text-white" />,
  },
  {
    name: "Phone",
    link: "tel:+13473822775",
    icon: <IconPhone stroke={2} className="text-white " />,
  },
];
import Container from "./shared/Container";
const About = () => {
  return (
    <Container
      id="about"
      title="About Me"
      className="mt-16 sm:mt-32 space-y-4 sm:space-y-8 md:space-y-10  "
    >
      <div className="flex flex-col md:flex-row  gap-6 md:gap-20 justify-be ">
        <div className="lg:w-full">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl ">
            I’m Mostafa . I live in{" "}
            <span className="text-red-500">New Jersey, United States</span> .
          </h1>
          <div className="mt-6 space-y-7 text-base text-white">
            <p>
              Boasting a typing speed that blurs the line between man and
              machine, my fingers dance across the keys at a pace so
              electrifying, it could power a small city, or at the very least,
              churn out code faster than you can say{" "}
              <span className="text-red-500">'syntax error'</span>.
            </p>
            <p>
              From crafting elegant solutions that speak volumes of my knack for
              innovation to debugging with the precision of a digital surgeon,
              my journey in tech is nothing short of a high-speed chase towards
              the future.
            </p>
            <p className="font-semibold">
              <span className="text-red-500"> TL;DR:</span> I'm a software
              developer, and I write 150+ Words Per Minute!.
            </p>
          </div>
        </div>
        <div className="max-w-xs px-2.5 lg:max-w-none flex flex-col">
          <Image
            src={MostafaImg}
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            className="aspect-square   lg:rotate-3 rounded-2xl object-cover select-none"
          />
          <div className="lg:pl-20">
            <ul role="list" className="space-y-6 py-6">
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 cursor-pointer "
                >
                  {link.icon}
                  <Link href={link.link} target="_blank">
                    <p className="text-white hover:text-red-500 border-r border-black hover:border-white transition-all">
                      {link.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
