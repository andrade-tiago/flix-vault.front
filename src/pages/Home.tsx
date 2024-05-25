import Hero from "../components/Hero";
import MovieListSection from "../components/MovieListSection";
import FeaturedMovie from "../components/movie/FeaturedMovie";
import useMovieOverviewList from "../hooks/use-movie-overview-list";
import { IMDbMovieListEndpoint } from "../services/imdb-api/get-imdb-movie-list";

export default function Home() {
  // Movie lists
  const inTheaters = useMovieOverviewList(IMDbMovieListEndpoint.InTheaters)
  const popular = useMovieOverviewList(IMDbMovieListEndpoint.Popular)
  const topRated = useMovieOverviewList(IMDbMovieListEndpoint.TopRated)
  const upComing = useMovieOverviewList(IMDbMovieListEndpoint.UpComing)

  return (
    <div className="flex flex-col gap-6">
      {inTheaters.data && inTheaters.data.length > 0 && (
        <>
          <Hero movie={inTheaters.data[0]} />

          {inTheaters.data.length > 1 && (
            <MovieListSection title="Nos cinemas" movieList={inTheaters.data.slice(1)} />
          )}
        </>
      )}

      {popular.data && popular.data.length > 0 && (
        <>
          <FeaturedMovie movie={popular.data[0]} />

          {popular.data.length > 1 && (
            <MovieListSection title="Em alta" movieList={popular.data.slice(1)} />
          )}
        </>
      )}

      {topRated.data && topRated.data.length > 0 && (
        <MovieListSection title="Gosto do público" movieList={topRated.data} />
      )}

      {upComing.data && upComing.data.length > 0 && (
        <MovieListSection title="Em breve..." movieList={upComing.data} />
      )}
    </div>
  )
}
