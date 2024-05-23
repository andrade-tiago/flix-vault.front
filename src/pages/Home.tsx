import Hero from "../components/Hero";
import MovieListSection from "../components/MovieListSection";
import FeaturedMovie from "../components/movie/FeaturedMovie";
import { IMDbMovieListEndpoint } from "../enums/imdb-movie-list-endpoint";
import useMovieOverviewList from "../hooks/use-movie-overview-list";

export default function Home() {
  // Movie lists
  const inTheaters = useMovieOverviewList(['in-theaters'], IMDbMovieListEndpoint.InTheaters)
  const popular = useMovieOverviewList(['popular'], IMDbMovieListEndpoint.Popular)
  const topRated = useMovieOverviewList(['top-rated'], IMDbMovieListEndpoint.TopRated)
  const upComing = useMovieOverviewList(['up-coming'], IMDbMovieListEndpoint.UpComing)

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
