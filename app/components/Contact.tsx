import Container from "./shared/Container";
import Links from "./shared/Links";
import { TypewriterEffect } from "./ui/typewriter-effect";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";

const words = [
  {
    text: "Let's",
  },
  {
    text: "transform",
  },
  {
    text: "ideas",
  },
  {
    text: "into",
  },
  {
    text: "Reality!",
    className: "text-blue-500 dark:text-blue-500",
  },
];
const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

const Contact = () => {
  return (
    <Container id="contact" title="Contact" className="space-y-10 w-full ">
      <TypewriterEffect words={words} />
      <Links />
      <div className="flex py-20 items-center justify-center antialiased">
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>Next.js 14</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              The power of full-stack to the frontend. Read the release notes.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </div>
    </Container>
  );
};

export default Contact;
