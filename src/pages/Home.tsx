import Hero from "../components/Hero";
import MovieListSection from "../components/MovieListSection";
import FeaturedMovie from "../components/movie/FeaturedMovie";
import { IMDbMovieListEndpoint } from "../enums/imdb-movie-list-endpoint";
import useMovieOverviewList from "../hooks/useMovieOverviewList";

export function Home() {
  // Movie lists
  const { data: inTheaters, isLoading: inTheatersIsLoading } = useMovieOverviewList(IMDbMovieListEndpoint.InTheaters)
  const { data: popular, isLoading: popularIsLoading } = useMovieOverviewList(IMDbMovieListEndpoint.Popular)
  const { data: topRated, isLoading: topRatedIsLoading } = useMovieOverviewList(IMDbMovieListEndpoint.TopRated)
  const { data: upComing, isLoading: upComingIsLoading } = useMovieOverviewList(IMDbMovieListEndpoint.UpComing)

  return (
    <div className="flex flex-col gap-6">
      {inTheatersIsLoading || (
        <>
          <Hero movie={inTheaters[0]} />

          <MovieListSection title="Nos cinemas" movieList={inTheaters.slice(1)} />
        </>
      )}

      {popularIsLoading || (
        <>
          <FeaturedMovie movie={popular[0]} />

          <MovieListSection title="Em alta" movieList={popular.slice(1)} />
        </>
      )}

      {topRatedIsLoading || (
        <MovieListSection title="Gosto do público" movieList={topRated} />
      )}

      {upComingIsLoading || (
        <MovieListSection title="Em breve..." movieList={upComing} />
      )}
    </div>
  )
}
