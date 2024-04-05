import Container from "./shared/Container";
import { Tabs } from "./ui/tabs";

const tabs = [
  {
    title: "Work",
    value: "work",
    content: "Work content",
  },
  {
    title: "Education",
    value: "education",
    content: "Education content",
  },
  {
    title: "Projects",
    value: "projects",
    content: "Projects content",
  },
];
const Experience = () => {
  return (
    <Container
      id="experience"
      title="Experience"
      className="mt-16 sm:mt-32 space-y-4 sm:space-y-8 md:space-y-10 h-screen w-full bg-neutral-400 "
    >
      <Tabs tabs={tabs} />
    </Container>
  );
};

export default Experience;
