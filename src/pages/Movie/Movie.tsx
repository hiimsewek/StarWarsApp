import { useLayoutEffect } from "react";
import { useParams } from "react-router";
import { FallbackScreen, MainContentWrapper, Spinner } from "components";
import { useGetMovieQuery } from "services/starWars";
import { MovieOverview } from "./components";
import { getPoster } from "utils/apiHelpers";
import { APP_TITLE } from "constants/appDetails";

const Movie = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isError, isLoading, error } = useGetMovieQuery(+id!);

  useLayoutEffect(() => {
    if (data) {
      document.title = `${APP_TITLE} | ${data.title}`;
    }
  }, [data]);

  if (isError) {
    if ("status" in error && error.status === 404) {
      return <FallbackScreen type="notFound" />;
    }

    return <FallbackScreen type="error" />;
  }

  const dataWithPoster = data && { ...data, poster: getPoster(data.title) };

  return (
    <MainContentWrapper>
      {isLoading && <Spinner />}
      {dataWithPoster && <MovieOverview data={dataWithPoster} />}
    </MainContentWrapper>
  );
};

export default Movie;
