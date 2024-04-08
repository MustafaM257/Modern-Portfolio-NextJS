import React from "react";
import { Meteors } from "./ui/metors";
const ContactCard = ({
  title,
  icon,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  description: { title: string; link?: string }[];
}) => {
  return (
    <div className=" w-full relative max-w-xs ">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-white  transform scale-[0.80] bg-white rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-start">
        <div className="h-10 w-10 rounded-full  flex items-center justify-center  mb-4 ">
          {icon}
        </div>
        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          {title}
        </h1>
        <ul className="gap-5">
          {description.map((desc, index) => (
            <li key={index}>
              <a
                href={desc.link}
                className="text-white hover:text-blue-500 transition-colors"
              >
                {desc.title}
              </a>
            </li>
          ))}
        </ul>
        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
};

export default ContactCard;
