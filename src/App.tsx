import { Footer, Header } from "components";
import { AppRouter } from "router";

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
