import GradientButton from "../ui/gradient-button";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconMail,
  IconBrandLinkedin,
  IconPhone,
} from "@tabler/icons-react";
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
const Links = () => {
  return (
    <div className=" w-full max-w-6xl mx-auto">
      <ul
        role="list"
        className=" py-10 flex flex-row items-center justify-between "
      >
        {socialLinks.map((link, index) => (
          <li
            key={index}
            className="flex items-center w-full gap-2 cursor-pointer "
          >
            <GradientButton
              className="w-[12rem] text-md"
              href={link.link}
              title={link.name}
              icon={link.icon}
            ></GradientButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
