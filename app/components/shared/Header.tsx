"use client";
import { FloatingNav } from "../ui/floating-navbar";

import {
  IconHome,
  IconUser,
  IconDesk,
  IconDeviceLaptop,
  IconAddressBook,
} from "@tabler/icons-react";

export const navLinks = [
  {
    name: "Home",
    link: "#home",
    icon: <IconHome stroke={2} className="text-black" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconUser stroke={2} className="text-black" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <IconDesk stroke={2} className="text-black" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <IconDeviceLaptop stroke={2} className="text-black" />,
  },

  {
    name: "Contact",
    link: "#contact",
    icon: <IconAddressBook stroke={2} className="text-black" />,
  },
];

const Header = () => {
  return (
    <div className="relative w-full">
      <FloatingNav
        navItems={navLinks}
        className=" px-4 shadow-white/50 shadow-md"
      />
    </div>
  );
};

export default Header;
