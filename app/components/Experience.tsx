import Container from "./shared/Container";
import { Work } from "./ExperienceCards/Work";
import Education from "./ExperienceCards/Education";
import Skills from "./ExperienceCards/Skills";
import Certificates from "./ExperienceCards/Certificates";
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
    <Container id="experience" title="Experience">
      Drop the tabs
    </Container>
  );
};
// Maybe add lamp section for each tab , and inside the lamp section there will be a list of items , accordingly i wanna maintain consistency in the design

export default Experience;
