import Container from "./shared/Container";

import { Work } from "./ExperienceCards/Work";
import Education from "./ExperienceCards/Education";
import Skills from "./ExperienceCards/Skills";
import Certificates from "./ExperienceCards/Certificates";
import DotBackground from "./ui/dot-background";
const tabs = [
  {
    title: "Work",
    value: "work",
    content: <Work />,
  },
  {
    title: "Education",
    value: "education",
    content: <Education />,
  },
  {
    title: "Skills",
    value: "skills",
    content: <Skills />,
  },
  {
    title: "Certificates",
    value: "certificates",
    content: <Certificates />,
  },
];
const Experience = () => {
  return (
    <DotBackground>
      <Container id="experience" title="Experience">
        <div className="flex flex-col space-y-8 w-full h-full ">
          {tabs.map((tab) => (
            <div key={tab.value} className="w-full h-full">
              {tab.content}
            </div>
          ))}
        </div>
      </Container>
    </DotBackground>
  );
};
// Maybe add lamp section for each tab , and inside the lamp section there will be a list of items , accordingly i wanna maintain consistency in the design

export default Experience;
