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
    title: "Skills",
    value: "skills",
    content: "Skills content",
  },
  {
    title: "Certifications",
    value: "certifications",
    content: "Certifications content",
  },
];
const Experience = () => {
  return (
    <Container
      id="experience"
      title="Experience"
      className="mt-16 sm:mt-32 space-y-4 sm:space-y-8 md:space-y-10 h h-[50vh] lg:h-[1000px] w-full "
    >
      <Tabs
        tabs={tabs}
        containerClassName="justify-between bg-neutral-500 rounded-3xl"
        activeTabClassName="bg-red-600 text-black"
        contentClassName="text-neutral-100"
      />
    </Container>
  );
};

export default Experience;
