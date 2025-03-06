import { MainContentWrapper } from "components";
import { useLayoutEffect } from "react";
import { APP_TITLE } from "constants/appDetails";
import { Description, Heading, TechnologyList } from "./components";
import { PhotoGallery } from "./components/PhotoGallery";

const About = () => {
  useLayoutEffect(() => {
    document.title = `${APP_TITLE} | About`;
  }, []);

  return (
    <MainContentWrapper>
      <Heading />
      <Description />
      <TechnologyList />
      <PhotoGallery />
    </MainContentWrapper>
  );
};

export default About;
