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
      {inTheaters.data && (
        <>
          <Hero movie={inTheaters.data[0]} />

          <MovieListSection title="Nos cinemas" movieList={inTheaters.data.slice(1)} />
        </>
      )}

      {popular.data && (
        <>
          <FeaturedMovie movie={popular.data[0]} />

          <MovieListSection title="Em alta" movieList={popular.data.slice(1)} />
        </>
      )}

      {topRated.data && (
        <MovieListSection title="Gosto do público" movieList={topRated.data} />
      )}

      {upComing.data && (
        <MovieListSection title="Em breve..." movieList={upComing.data} />
      )}
    </div>
  )
}
