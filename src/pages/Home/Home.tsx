import { MainContentWrapper } from "components";
import { Hero, TextSections } from "./components";

const Home = () => {
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
