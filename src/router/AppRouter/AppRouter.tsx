import { About, Home, Movie, Movies, NotFound } from "pages";
import { Route, Routes } from "react-router";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
