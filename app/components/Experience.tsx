import Container from "./shared/Container";
import { Tabs } from "./ui/tabs";

const tabs = [
  {
    title: "Work",
    value: "work",
    content: (
      <div className="w-full h-full bg-transparent text-white">
        Work content
      </div>
    ),
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
// Maybe add lamp section for each tab , and inside the lamp section there will be a list of items , accordingly i wanna maintain consistency in the design

export default Experience;
