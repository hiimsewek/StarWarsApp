import { MainContentWrapper } from "components";
import { useLayoutEffect } from "react";
import { APP_TITLE } from "constants/appDetails";
import { Description, Heading, TechnologyList } from "./components";

const About = () => {
  useLayoutEffect(() => {
    document.title = `${APP_TITLE} | About`;
  }, []);

  return (
    <MainContentWrapper>
      <Heading />
      <Description />
      <TechnologyList />
    </MainContentWrapper>
  );
};

export default About;
