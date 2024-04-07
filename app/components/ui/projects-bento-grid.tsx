import { cn } from "@/utils/cn";
import DotBackground from "./dot-background";
import { IconBrandGithub } from "@tabler/icons-react";
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
        "grid md:auto-rows-[20px] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
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
  href?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1   rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  bg-black/50 border-white/[0.2]  border hover:border-white justify-between flex flex-col space-y-2",
        className
      )}
    >
      <div className="font-sans text-xl font-bold text-white mb-2 mt-2 flex flex=row items-center justify-between">
        <h2>{title}</h2>
        {icon}
      </div>
      <button className=" max-w-40 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex justify-between items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
          <span>{`Source Code`}</span>
          <IconBrandGithub className="w-4 h-4" />
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className=" font-normal text-white text-base ">{description}</div>
      </div>
    </div>
  );
};
