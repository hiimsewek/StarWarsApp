import { MainContentWrapper } from "components";
import { Hero, TextSections } from "./components";
import { useLayoutEffect } from "react";
import { APP_TITLE } from "constants/appDetails";

const Home = () => {
  useLayoutEffect(() => {
    document.title = APP_TITLE;
  }, []);

  return (
    <>
      <Hero />
      <MainContentWrapper>
        <TextSections />
      </MainContentWrapper>
    </>
  );
};

export default Home;
