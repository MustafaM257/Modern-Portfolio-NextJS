import { cn } from "@/utils/cn";

import { IconBrandGithub } from "@tabler/icons-react";
import GradientButton from "./gradient-button";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  href,
  //   header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  //   header?: React.ReactNode;
  icon?: React.ReactNode;
  href: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  bg-black/50 border-white/[0.2]  border hover:border-white  flex flex-col justify-start space-y-2",
        className
      )}
    >
      <div className="font-sans text-xl font-bold text-white mb-2 mt-2 flex flex=row items-center justify-between ">
        <h2>{title}</h2>
        {icon}
      </div>
      <GradientButton
        className="w-[10rem] text-sm"
        title="Source Code"
        href={href}
        icon={<IconBrandGithub className="w-6 h-6" />}
      />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div
          className=" text-sm 
         font-normal text-white  "
        >
          {description}
        </div>
      </div>
    </div>
  );
};
