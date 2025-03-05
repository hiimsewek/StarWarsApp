import { Footer, Header, PageWrapper } from "components";
import { AppRouter } from "router";

const App = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <AppRouter />
      </PageWrapper>
      <Footer />
    </>
  );
};

export default App;
